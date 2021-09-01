import React from 'react'
import styled from 'styled-components'
import NextImage from 'next/image'

import * as tokens from '@cabane/tokens'

const Box = styled.div`
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  width: 302px;
  height: 487px;
  padding: 26px 29px;
  margin-bottom: 15px;
  margin-right: 60px;
`

const Image = styled(NextImage).attrs({
  width: 301,
  height: 308
})``

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 41px;
  text-align: right;
  color: ${tokens.textTalks};
`

const Title = styled.div`
  font-size: ${tokens.textSmall};
  margin-bottom: 10px;
  color: ${tokens.textTalks};
`

const Description = styled.a`
  font-size: ${tokens.textSmall};
  color: ${tokens.textTalks};
`

export const Speakers = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 200px;
`

export default {Box, Image, Text, Title, Description}
