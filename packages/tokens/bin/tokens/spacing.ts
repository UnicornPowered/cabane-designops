import * as Figma from 'figma-js'

import {getFrameWithName, getTokensPage} from '../lib/figma'
import {Frames} from '../lib/frames'
import {createToken} from '../lib/utils'
import {generateTokens} from '../lib/tokens'

export const generateSpacing = ({document, styles}: Figma.FileResponse) => {
  const tokensPage = getTokensPage(document)
  const spacingFrame = getFrameWithName(tokensPage, Frames.Spacing)
  if (!spacingFrame) {
    return
  }

  const spacingTokens = getSpacingElements(spacingFrame).map((item) => {
    const token = createToken({
      name: item.name,
      value: item?.absoluteBoundingBox?.width || 0,
    })
    return token
  })

  generateTokens({
    name: 'spacing',
    props: spacingTokens
  })
}

const getSpacingElements = (frame: Figma.Frame): Figma.Rectangle[] => {
  return frame.children as Figma.Rectangle[]
}