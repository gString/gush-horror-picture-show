import React from 'react';
import { Caption, Divide, Title, Info } from './MovieInfo.styles';

const MovieInfo = ({ item }) =>
	<Caption>
		<Title>{item.name}</Title>
		<Divide/>
		<Info>{item.text}</Info>
	</Caption>;
	
export default MovieInfo;