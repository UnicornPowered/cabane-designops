import chroma from 'chroma-js'
import * as Figma from 'figma-js'

import {getFrameWithName, getTokensPage} from '../lib/figma'
import {Frames} from '../lib/frames'
import * as sort from '../lib/sort'
import {generateTokens} from '../lib/tokens'
import {createToken} from '../lib/utils'

export function generateColor({document, styles}: Figma.FileResponse) {
  const tokensPage = getTokensPage(document)
  const colorsFrame = getFrameWithName(tokensPage, Frames.Color)
  if (!colorsFrame) {
    return
  }

  const colorRectangles = getColorElements(colorsFrame)

  const color = colorRectangles
    .map((item) => {
      const style = styles[(item.styles as any).fill]
      const color = item.fills[0].color
      const value = color ? chroma.gl(color.r, color.g, color.b).hex() : undefined

      return createToken({
        name: style.name,
        value
      })
    })
    .sort((a, b) => sort.alpha(a.name, b.name))

  generateTokens({
    name: 'color',
    props: color
  })
}

function getColorElements(frame: Figma.Frame): Figma.VectorBase[] {
  // Find the color rectangles with a shared style applied to them
  const colorRectangles = frame.children.filter(
    (child: any) => child.styles?.fill
  ) as Figma.VectorBase[]

  if (!colorRectangles) {
    console.warn('No color rectangles with applied styles found')
  }

  return colorRectangles
}
