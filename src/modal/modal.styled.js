import styled from 'styled-components';

const StyledModal = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 80%;
	height: 80%;
	z-index: 100;
`;

const BackDrop = styled.a`
	position: fixed;
	top: 0px;
	left: 0px;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 99;
`;

export { StyledModal, BackDrop };
