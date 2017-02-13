import React from 'react'
import styled from 'styled-components'

const DeleteLink = styled.span`
  cursor: pointer;
  color: #999;
`
export default ({item, onDelete}) =>
  <div>{item.name} <DeleteLink onClick={onDelete}>delete</DeleteLink></div>
