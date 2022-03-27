import React from 'react'
import CardOnlyProduct from '../../components/CardOnlyProduct/CardOnlyProduct'
import CardProduct from '../../components/CardProduct/CardProduct'
import CardPromotion from '../../components/CardPromotion/CardPromotion'

const Products = () => {
  return (
    <div>
        <CardProduct/>
        <CardPromotion/>
        <CardOnlyProduct/>
    </div>
  )
}

export default Products