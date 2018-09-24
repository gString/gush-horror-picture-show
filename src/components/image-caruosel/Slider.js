import React from 'react';
import MovieSlide from "./MovieSlide";
import styled  from 'styled-components';
import { inject, observer } from "mobx-react/index";

const List = styled.div`
	display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    transition: none;
	transform: translateX(-200%);
`;

const Slider = inject("store")(observer(( {store} ) =>
	<List id="slider">{ store.movies.map( item => <MovieSlide key={item.id} item={item}/> ) }</List>
));
		
export default Slider;