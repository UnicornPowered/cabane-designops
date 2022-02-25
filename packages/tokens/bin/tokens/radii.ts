import * as Figma from 'figma-js'

import {getFrameWithName, getTokensPage} from '../lib/figma'
import {Frames} from '../lib/frames'
import {createToken} from '../lib/utils'
import {generateTokens} from '../lib/tokens'

export const generateRadii = ({document, styles}: Figma.FileResponse) => {
  const tokensPage = getTokensPage(document)
  const radiiFrame = getFrameWithName(tokensPage, Frames.Radii)
  if (!radiiFrame) {
    return
  }

  const radiiTokens = getRadiiElements(radiiFrame).map((item) => {
    const token = createToken({
      name: item.name,
      value: item?.cornerRadius || 0,
    })
    return token
  })

  generateTokens({
    name: 'radii',
    props: radiiTokens
  })
}

const getRadiiElements = (frame: Figma.Frame): Figma.Rectangle[] => {
  return frame.children as Figma.Rectangle[]
}