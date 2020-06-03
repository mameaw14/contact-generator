import styled from '@emotion/styled'
import React from 'react'

type Props = {
  title: string
  name: string
  accountNumber: string
}

const Container = styled.div`
  background: coral;
  width: 100%;
  padding: 15px;
`
export const Template = ({ title, name, accountNumber }: Props) => {
  return (
    <Container>
      <h1>{title}</h1>
      <h2>{name}</h2>
      <h2>{accountNumber}</h2>
    </Container>
  )
}
