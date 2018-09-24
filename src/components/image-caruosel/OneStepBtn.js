import React from 'react';
import styled from 'styled-components';
import { inject, observer } from "mobx-react/index";

const baseBtn = styled.button`
	display: inline-block;
	text-indent: -99999px;
	white-space: nowrap;
	width: 23px;
	height: 33px;
	overflow: hidden;
	cursor: pointer;
`;

const OneStepBtn = inject("store")(observer(({next, store}) => {
	const title = next ? "Next Movie" : "Previous Movie";
	const img = next ? "/images/arrow_right.png" : "/images/arrow_left.png";
	
	const Btn = styled(baseBtn)`
		background: url(${img}) 0 0 no-repeat;
	`;
	
	const clickHandler = evt => {
		if (store.slidingTarget) return;
		if (next) {
			store.navigate("forward", 1, store.nextBtnTarget);
		} else {
			store.navigate("backward", 1, store.previousBtnTarget);
		}
	};
	
	return <Btn title={title} onClick={clickHandler}>
		{title}
	</Btn>;
}));

export default OneStepBtn;