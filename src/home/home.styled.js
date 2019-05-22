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
  height: ${props => (props.height ? props.height : "250px")};
  width: ${props => (props.width ? props.width : "250px")};
  background-size: cover;
  background-position: center;
  background-image: ${props => `url("${process.env.PUBLIC_URL}/${props.image}.jpg")`};
`;

export { StyledHome, Image, Container };
