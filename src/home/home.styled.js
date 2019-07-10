import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
  from{
    transform: scale(0);
  }   
  to{
    transform: scale(1);
  }
`;

const StyledHome = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 70px;
`;

const Container = styled.div`
	text-align: center;
`;

const Image = styled.div`
	height: ${props => (props.height ? props.height : '250px')};
	width: ${props => (props.width ? props.width : '250px')};
	background-size: cover;
	background-position: center;
	background-image: ${props =>
		`url("${process.env.PUBLIC_URL}/${props.image}.jpg")`};
	animation: ${zoomIn} 0.6s;
`;

export { StyledHome, Image, Container };
