import React from 'react'
import { popularProducts} from '../data'
import Product from './Product'
import styled from "styled-components"
const Contaier = styled.div`
display:flex;
padding: 20px;
flex-wrap: wrap;
justify-content: space-between;
`
const Products = () => {
  return (
    <Contaier>
        {popularProducts.map((item) =>(
            <Product item={item} key={item.id}/>
        ))}
    </Contaier>
  )
}

export default Products