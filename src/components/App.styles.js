import styled, { injectGlobal } from "styled-components";

export const LoadingScreen = styled.div`
	width: 100%;
	height: 100%;
	background-color: #272727;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const MovieSlider = styled.div`
	background-color: #272727;
	color: #fff;
	text-transform: uppercase;
`;

export const ImageView = styled.div`
	position: relative;
	overflow: hidden;
	width: 100vw;
`;

injectGlobal`
	* {
		border: none;
		outline: none;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		list-style: none;
	}

	a, a:hover, a:active, a:visited {
		text-decoration: none;
		color: inherit;
	}

	html, body {
		font-family: "Gotham A", "Gotham B", Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
		background: url("/images/p4_@2x.png") 0 0/8px 8px fixed;
	}
`;