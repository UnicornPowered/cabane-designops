import React from 'react'
import styled from 'styled-components'

import * as tokens from '@cabane/tokens'

export const Menu = () => (
  <MenuWrapper>
    <MenuItem href="https://lepointdevente.com/billets/cabane">Billets</MenuItem>
    <MenuItem href="mailto:info@cabane.io">Contact</MenuItem>
  </MenuWrapper>
)

const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 38px;
  right: 38px;
  text-align: right;
  font-size: 28px;
`

const MenuItem = styled.a`
  margin-bottom: 10px;
  color: ${tokens.textContent};
`
