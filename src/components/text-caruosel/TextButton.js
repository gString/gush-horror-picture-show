import React from 'react';
import styled from 'styled-components';
import { inject, observer } from "mobx-react";

import { BtnWrapper, Btn } from './TextButton.styles';

const TextButton = inject("store")(observer( ({item, store}) => {
	const clickHandler = () => {
		if ( !item.nav || store.slidingTarget) return;
		store.navigate(item.nav.direction, item.nav.step, item.index);
	};
	const current = !store.slidingTarget && item.index === store.currentIndex;
	const target = store.slidingTarget && item.index === store.slidingTarget;
	const Wrapper = styled(BtnWrapper)`
		${Btn}
		{
			color: ${ (current || target) ? "#fff" : "#d2d2d2" };
			font-weight: ${ (current || target) ? "700" : "normal" };
		}
	`;
	return <Wrapper><Btn onClick={clickHandler} title={item.name} href="#">{item.name}</Btn></Wrapper>
}));

export default TextButton;