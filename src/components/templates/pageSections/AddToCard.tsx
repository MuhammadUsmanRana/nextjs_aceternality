"use client";

import React from 'react'
import { IncrementDecrement } from '../shared/IncrementDecrement'
import { CardData } from '@/data/CardData'
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const AddToCard = () => {
  const [value, setValue] = React.useState(1);

  const dispatch = useSelector((state: RootState) => console.log("state", state));
  console.log("🚀 ~ AddToCard ~ dispatch:", dispatch)

  const cartItem = CardData.find((item) => {
    return item.slug === 'running-shoes'
  })
  console.log("🚀 ~ AddToCard ~ item:", cartItem);
  return (
    <>
      <h1>Add to cart</h1>
    </>
  )
}

export default AddToCard