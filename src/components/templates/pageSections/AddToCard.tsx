"use client";

import React from 'react'
import { IncrementDecrement } from '../shared/IncrementDecrement'

const AddToCard = () => {
  return (
    <>
      <h1>Add to cart</h1>
      <IncrementDecrement
        className=""
        value={1}
        onChange={() => { }}
      />
    </>
  )
}

export default AddToCard