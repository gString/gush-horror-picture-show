import { observable, computed, action, when } from 'mobx';
	let mainStore = null;

export default class TimerStore {
	@observable timer = null;
	
	constructor (rootStore) {
		this.rootStore = rootStore;
		mainStore = this.rootStore.movieStore;
		when(
			() => this.moviesLoaded,
			() => this.setTimer()
		);
	}
	
	@computed get moviesLoaded () {
		return mainStore.status === "done";
	}
	
	@action
	setTimer () {
		this.timer = setInterval (this.timeout, 10000)
	}
	
	@action
	stopTimer () {
		if ( this.timer ) {
			clearInterval(this.timer);
		}
	}
	
	@action
	timeout () {
		mainStore.navigate("forward", 1, mainStore.nextBtnTarget)
	}
}