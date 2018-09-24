import jsonResponse from "./fakeData";
import anime from "animejs";

export const textListMaker = ( base, current ) => {
	let list;
	// first half of the list
	if (current - 4 >= 0) {
		list = base.slice(current-4, current+1);
	} else {
		list = [...base.slice(current-4, base.length), ...base.slice(0, current+1)];
	}
	// second half
	if (base.length - (current+5) >= 0) {
		return list.concat( base.slice(current+1,current+5) );
	} else if ( current+1 <= base.length ) {
		const reminders = base.slice(current+1,base.length);
		return list.concat( reminders, base.slice(0, (4-reminders.length)));
	}
	return list.concat( base.slice(0,5) );
};

export const addNavDO = list => {
	for ( let index = 0; index < 7; index++ ) {
		if ( index < 4 && index > 1) {
			list[index].nav = {
				direction: "backward",
				step: Math.abs(index-4)
			}
		} else if ( index > 4 && index < 7 ) {
			list[index].nav = {
				direction: "forward",
				step: index-4
			}
		} else {
			list[index].nav = null
		}
	}
	return list;
};

export const fakeAPI = new Promise((resolve, reject ) => {
	setTimeout(() => {
		resolve(jsonResponse);
	}, 1500);
});

export const getForwardIndex = (current, length, amount) => {
	let index = current + amount;
	if ( index >= length ) {
		index -= length;
	}
	return index;
};

export const getBackwardIndex = (current, length, amount) => {
	let index = current - amount;
	if ( index < 0 ) {
		index = length+index;
	}
	return index;
};

export const slide = ( direction, stepsNum ) => {
	const step = 100;
	const basePosition = -2*step;
	const textStep = 20;
	const textBasePosition = -2*textStep;
	
	const calcStartPos = elem => {
		return ((elem.id === "slider") ? basePosition : textBasePosition) + "vw";
	};
	const calcEndPos = elem => {
		const _step = (elem.id === "slider") ? step : textStep;
		const _base = (elem.id === "slider") ? basePosition : textBasePosition;
		let endPos = (direction === "forward") ? _base - (stepsNum*_step) : _base + (stepsNum*_step);
		return ((elem.id === "slider") ? endPos : endPos) + "vw";
	};
	const getDuration = elem => {
		return (elem.id === "slider") ? 500 : 300;
	};
	
	return anime({
		 targets:    [ '#slider', "#textSlider" ],
		 translateX: [ el => calcStartPos(el), el => calcEndPos(el) ],
		 duration:   el => getDuration(el),
		 easing:     'easeInOutSine'
	 })
};

export const processMovieData = data => Object.keys(data).map(
	(id, index) => ({...data[id], index})
);

