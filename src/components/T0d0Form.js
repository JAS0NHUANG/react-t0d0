import React, { useState } from 'react'
import styled from 'styled-components'

const T0d0FormStyled = styled.form`
  margin-top: 8px;
  padding: 0 20px;
  min-height: 30px;
  background: #999;
`

const T0d0Input = styled.input`
  margin-top: 8px;
  text-align: left;
  color: #efefef;
  border: none;
  outline: none;
  background: none;
  min-height: 30px;
  width: 100%;
`

export default function T0d0Form ({ value, handleSubmit, handleInput }) {
  return(
    <T0d0FormStyled action="" onSubmit={handleSubmit}>
      <T0d0Input type="text" placeholder="what to do?" value={value} onChange={handleInput}/>
    </T0d0FormStyled>
  )
}
