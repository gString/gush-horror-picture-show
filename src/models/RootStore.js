import MoviesStore from "./Movies";
import TimerStore from "./Timer";

export default class RootStore {
	constructor () {
		this.movieStore = new MoviesStore(this);
		this.timerStore = new TimerStore(this);
	}
}