import styled from 'styled-components';

export const BtnWrapper = styled.li`
	display: block;
	flex: 0 1 auto;
	width: 20vw;
	height: 38px;
	cursor: pointer;
	overflow: hidden;
	text-align: center;
	position: relative;
	::after {
		content: '';
		height: 70%;
		border-left: 1px solid rgba(210,210,210,.15);
		position: absolute;
		width: 2px;
		left: 0;
		top: 15%;
	}
`;
export const Btn = styled.a`
	display: inline-block;
	line-height: 38px;
	text-decoration: none;
	text-transform: uppercase;
	min-width: 20vw;
`;
