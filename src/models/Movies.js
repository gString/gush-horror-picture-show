import { observable, computed, action, runInAction } from 'mobx';
import {
	processMovieData,
	slide,
	getBackwardIndex,
	getForwardIndex,
	fakeAPI,
	addNavDO,
	textListMaker } from './Movies.utils';

export default class MoviesStore {
	
	constructor (rootStore) {
		this.rootStore = rootStore;
	}
	@observable movies = [];
	@observable status = "pending";
	@observable currentIndex = 0;
	@observable slidingTarget = null;
	
	// computed
	// scaled down version of the 'movies' observable, for the textual nav strip
	@computed get basicTextList () {
		return this.movies.map( item => ({ name:item.name, id:item.id, index:item.index }));
	}
	
	// currently used image indexes for the image-slider
	@computed get activeImages () {
		const length = this.movies.length;
		const current = this.currentIndex;
		return [
			getBackwardIndex(current, length, 2),
			getBackwardIndex(current, length, 1),
			current,
			getForwardIndex(current, length, 1),
			getForwardIndex(current, length, 2)
		]
	}
	
	// currently used text-items in the text-slider
	@computed get textNavList () {
		if ( this.movies.length > 0 ) {
			const base    = this.basicTextList;
			const current = this.currentIndex;
			let list      = textListMaker (base, current);
			return addNavDO (list);
		}
		return [];
	}
	
	// for the arrow buttons
	@computed get nextBtnTarget () {
		return getForwardIndex(this.currentIndex, this.movies.length, 1)
	}
	
	@computed get previousBtnTarget () {
		return getBackwardIndex(this.currentIndex, this.movies.length, 1)
	}
	
	// actions
	// simulate loading from server
	@action
	fetchMovies () {
		this.movies = [];
		this.status = "pending";
		fakeAPI.then (
			moviesRaw => {
				const movieArr = processMovieData (moviesRaw);
				runInAction ("fetchSuccess", () => {
					this.status = "done";
					this.movies = movieArr;
				})
			},
			error => {
				runInAction ("fetchError", () => {
					this.status = "error";
				})
			}
		)
	}
	
	// new movie selected (after the animation)
	@action
	setNewState = () => {
		const slider = document.getElementById("slider");
		const textSlider = document.getElementById("textSlider");
		this.currentIndex = this.slidingTarget;
		slider.removeAttribute("style");
		textSlider.removeAttribute("style");
		this.slidingTarget = null;
	};
	
	// trigger animation for new movie and call the setNewState
	@action
	navigate = ( direction, step, index ) => {
		this.slidingTarget = index;
		var promise = slide(direction, step).finished.then(() => this.setNewState());
	};
	
	@action
	stopTimer = () => {
		this.rootStore.timerStore.stopTimer()
	};
	
	@action
	restartTimer = () => {
		this.rootStore.timerStore.setTimer()
	};
}