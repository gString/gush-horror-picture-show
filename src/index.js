import React from "react";
import { render } from "react-dom";
import { configure } from "mobx";
import { Provider } from "mobx-react";

import RootStore from './models/RootStore';
import App from "./components/App";

const rootStore = new RootStore();
// only the movies store is relevant for the UI
const store = rootStore.movieStore;
store.fetchMovies();

render (
	<Provider store={ store }>
		<App/>
	</Provider>,
	document.getElementById ("root")
);

// mobx global configuration
configure ({ enforceActions: "observed" });