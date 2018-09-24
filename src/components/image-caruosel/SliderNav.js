import React from 'react';
import OneStepBtn from './OneStepBtn';
import styled from 'styled-components';

const Wrapper = styled.nav`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	padding: 0 20px;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
`;

const SliderNav = () =>
	<Wrapper>
		<OneStepBtn next={false}/>
		<OneStepBtn next={true}/>
	</Wrapper>;

export default SliderNav;