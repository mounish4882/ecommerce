import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
display: flex;
`

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column; 
padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
` 
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Center = styled.div`
flex:1; 
padding: 20px;
`
const Title = styled.h3`

`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex:1;
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment = styled.img`
width: 50%;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MADDY</Logo>
            <Desc>E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. These business transactions occur either as business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business.</Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                 <Facebook/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                 <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                 <Twitter/>
            </SocialIcon> 
            <SocialIcon color="E60023">
                 <Pinterest/>
            </SocialIcon>
        </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> <Room style={{marginRight:"10px"}}/>
                Sector 18, Ulwe, Navi Mumbai, 410206
            </ContactItem>
            <ContactItem> <Phone style={{marginRight:"10px"}}/>
                7687267338
            </ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>
                madhuriboutique@gmail.com
            </ContactItem>
            <Payment src=""/>
        </Right>
    </Container>
  )
}

export default Footer