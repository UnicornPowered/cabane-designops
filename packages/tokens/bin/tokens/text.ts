import * as Figma from 'figma-js'
import {getTokensPage, getFrameWithName} from '../lib/figma'
import {Frames} from '../lib/frames'
import {generateTokens} from '../lib/tokens'
import {createToken} from '../lib/utils'

export function generateText({document, styles}: Figma.FileResponse) {
  const tokensPage = getTokensPage(document)
  const textFrame = getFrameWithName(tokensPage, Frames.Text)
  if (!textFrame) {
    return
  }

  const fontSize = textFrame.children.map((node) => {
    const text = node as Figma.Text
    const value = text.style.fontSize

    return createToken({
      name: text.name,
      value: `${value}px`
    })
  })

  generateTokens({
    name: 'text',
    props: fontSize
  })
}
