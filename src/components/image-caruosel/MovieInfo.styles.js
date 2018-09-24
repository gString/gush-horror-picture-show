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
	font-size: 4.3vw;
    font-weight: 800;
    margin: 1vw 0;
`;
export const Divide = styled.hr`
    background-color: #b08a42;
    height: 6px;
    width: 7vw;
	margin: 1vw 0;
`;
export const Info = styled.p`
    font-size: 22px;
    font-weight: 700;
    margin: 1vw 0;
`;