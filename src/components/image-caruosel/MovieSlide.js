import React from 'react';
import MovieInfo from "./MovieInfo";
import styled from 'styled-components';
import { inject, observer } from "mobx-react";

const MovieImage = styled.img`
	width: 100vw;
`;
const slideBasicStyle = styled.figure`
	position: relative;
	flex: 0 1 auto;
`;

const calculatePosition = ( index, activeImages ) => {
	const position = activeImages.indexOf(index)+1;
	return position < 1 ? null : position;
};

const MovieSlide = inject("store")(observer(({ item, store }) => {
	
	const position = calculatePosition( item.index, store.activeImages );
	const Slide = styled(slideBasicStyle)`
		display: ${position ? "block" : "none"};
		order: ${position};
	`;
	const altText = `Image from ${item.name}`;
	
	return <Slide data-pos={position}>
		<MovieImage src={`/images/${item.img}`} alt={altText}/>
		<MovieInfo item={item} position={position}/>
	</Slide>;
}));

export default MovieSlide;