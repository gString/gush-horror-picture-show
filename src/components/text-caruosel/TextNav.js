import React from 'react';
import styled from 'styled-components';
import { inject, observer } from "mobx-react/index";
import TextButton from './TextButton';

const NavBar = styled.nav`
	height: 38px;
	text-align: center;
	overflow: hidden;
`;
const TextSlider = styled.ul`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	transition: none;
	transform: translateX(-40vw);
	width: 180vw;
`;

const TextNav = inject("store")(observer(({store}) =>
	
	 <NavBar>
		 <TextSlider id="textSlider">{
			 store.textNavList.map( (item, index) => <TextButton key={ item.id+index } item={item}/>)
		 }</TextSlider>
	 </NavBar>));

export default TextNav;