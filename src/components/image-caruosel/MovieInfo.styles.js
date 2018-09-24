import styled from 'styled-components';

export const Caption = styled.figcaption`
	position: absolute;
    top: 0;
    right: 50%;
    bottom: 2vw;
    left: 12vw;
    letter-spacing: 1px;
    text-shadow: 0 1px 2px rgba(0,0,0,.9);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1vw 0;
`;
export const Title = styled.h2`
    font-weight: 800;
    margin: 1vw 0;
    
    @media (min-width: 31.25rem) {
    	font-size: 33px;
    }
    @media (min-width: 48rem) {
    	font-size: 45px;
    }
    @media (min-width: 87.5rem) {
    	font-size: 52px;
    }
    @media (min-width: 106.25rem) {
    	font-size: 68px;
    }
`;
export const Divide = styled.hr`
    background-color: #b08a42;
    height: 4px;
    width: 7vw;
	margin: 1vw 0;
    
    @media only screen and (min-width: 31.25rem) {
	    height: 6px;
    }

`;
export const Info = styled.p`
    font-size: 18px;
    font-weight: 700;
    margin: 1vw 0;
    
    @media only screen and (min-width: 64rem) {
    	font-size: 20px;
    }
    @media only screen and (min-width: 106.25rem) {
    	font-size: 22px;
    }

`;