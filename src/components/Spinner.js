import React from 'react';
import styled,{ keyframes }  from 'styled-components';

const squeeze = keyframes`
	0% { border-radius: 5px; }
	50% { border-radius: 50%; }
	100% { border-radius: 5px; }
`;

const spin = keyframes`
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
`;

const WashingMachine = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin: 0 auto;
	border: beige 4px solid;
	background-color: cornflowerblue;
	background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
	animation: ${squeeze} 1s linear infinite, ${spin} 1s ease-in-out infinite;
`;

const Spinner = () => <WashingMachine/>;

export default Spinner;
