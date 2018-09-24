import React from 'react';

import Slider from "./image-caruosel/Slider";
import SliderNav from "./image-caruosel/SliderNav";
import TextNav from "./text-caruosel/TextNav";
import Spinner from "./Spinner";

import {MovieSlider, ImageView, LoadingScreen} from "./App.styles";
import { inject, observer } from "mobx-react";


const App = inject("store")(observer(({ store }) => {
	if (store.status === 'pending') return <LoadingScreen><Spinner/></LoadingScreen>;
	return (
		<MovieSlider onMouseEnter={ store.stopTimer }
					 onMouseLeave={ store.restartTimer }>
			<ImageView>
				<Slider/>
				<SliderNav/>
			</ImageView>
			<TextNav/>
		</MovieSlider>
	)
}));

export default App;