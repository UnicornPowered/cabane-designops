import * as Figma from 'figma-js'

export let file: Figma.FileResponse

export function getTokensPage(document: Figma.Document): Figma.Canvas {
    // Find the page named "Design tokens"
    const tokensPages = document.children.find((child) => child.name === 'Design Tokens') as
        | Figma.Canvas
        | undefined

    if (!tokensPages) {
        throw new Error('No page named "Design Tokens" found')
    }

    return tokensPages
}

export function getFrameWithName(canvas: Figma.Canvas, name: string): Figma.Frame {
    // Find the frame named "name"
    const colorsFrame = canvas.children.find(
        (child) => child.type === 'FRAME' && child.name === name
    ) as Figma.Frame

    if (!colorsFrame) {
        console.warn(`No frame named '${name}' found`)
    }

    return colorsFrame
}
