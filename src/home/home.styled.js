import styled from "styled-components";

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
  height: 250px;
  width: 250px;
  background-size: cover;
  background-position: center;
  background-image: ${props => `url("${process.env.PUBLIC_URL}/image/${props.image}")`};
`;

export { StyledHome, Image, Container };
