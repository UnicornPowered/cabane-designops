import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import {Heading1, Heading2} from './text'

import * as color from '@cabane/tokens/dist/color'

const LogoSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={107} height={95} viewBox="0 0 107 95" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M61.925 4.852c-4.885-5.993-12.773-5.962-17.619.07L1.425 58.304c-1.892 2.355-1.907 6.189-.028 8.572l20.356 25.815c1.876 2.38 4.953 2.415 6.877.074l21.416-26.068c1.921-2.339 4.983-2.291 6.838.105L76.898 92.66c1.855 2.396 4.935 2.453 6.869.14l21.723-25.992c1.938-2.32 1.956-6.106.054-8.44L61.925 4.852z"
      fill={color.textContent}
      fillRule="evenodd"
    />
  </svg>
)

export const Logo = () => (
  <HeadingContainer>
    <ImageWrapper>
      <LogoSVG />
    </ImageWrapper>
    <Heading1>Cabane</Heading1>
  </HeadingContainer>
)

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 158px;
`

const ImageWrapper = styled.div`
  margin-right: 21px;
`

export const LogoFooter = () => (
  <FooterContainer>
    <LogoSVG />
    <Heading2>Cabane</Heading2>
  </FooterContainer>
)

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 110px;
  margin-bottom: 163px;
`
