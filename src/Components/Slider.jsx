import styled from "styled-components"
import {ArrowLeftOutlined,ArrowRightOutlined } from "@material-ui/icons"

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: coral;
position: relative;
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;  
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
cursor: pointer;
opacity: 0.5;
`

const Wrapper = styled.div`
    height: 100%;
`
const Slide = styled.div`
display: flex;
align-items: center;
`
const ImageContainer = styled.div`
flex:1
`
const Image = styled.img``

const InfoContainer = styled.div`
flex:1
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <Slide>
                <ImageContainer>
                    HI
                </ImageContainer>
                <Image></Image>
                <InfoContainer>
                    HI
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider