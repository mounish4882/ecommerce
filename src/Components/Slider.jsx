import styled from "styled-components"
import { ArrowLeftOutlined,ArrowRightOutlined } from "@material-ui/icons"
import  image1  from "./Images/1657907896112.jpeg"

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
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
width: 100vw;
height: 100vh;
`

const ImageContainer = styled.div`
flex:1;
height: 100%;
`
const Image = styled.img`
height: 80%;
`

const InfoContainer = styled.div`
flex:1;
padding:50px;
`

const Title = styled.h1`
font-size: 78px;
`

const Desc = styled.p`
margin : 50px 0px;
font-size: 20px;
font-weight : 500;
letter-spacing : 3px;
`

const Button = styled.button`
padding : 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
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
                    <Image src={image1} alt="logo" />
                </ImageContainer>
                <InfoContainer>
                    <Title>RAINY SALE</Title>
                    <Desc>DON'T COMPROMISE ON STYLE!! FLAT 30% OFF FOR NEW ARRIVALS</Desc>
                    <Button>SHOP NOW</Button>
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