import styled from 'styled-components'

import * as text from '@cabane/tokens/dist/text'
import * as color from '@cabane/tokens/dist/color'

export const Heading1 = styled.h1`
  font-size: ${text.heading1};
  font-weight: bold;
  color: ${color.textContent};
`

export const Heading2 = styled.p`
  font-size: ${text.heading2};
  font-weight: bold;
  color: ${color.textContent};
`

export const HeadingSection = styled.h6`
  font-family: 'EuclidCircularB-Medium';
  font-size: ${text.section};
  color: ${color.textContent};
  margin-bottom: 20px;
`
