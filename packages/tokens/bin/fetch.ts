import * as Figma from 'figma-js'
import fs from 'fs-extra'

if (!process.env.FIGMA_TOKEN) {
  throw new Error('Missing expected FIGMA_TOKEN env variable.')
}
const FIGMA_TOKEN: string = process.env.FIGMA_TOKEN
const FILE_ID = 'mF4gTetKuGO7Zx9zWtdWeu'

const client = Figma.Client({personalAccessToken: FIGMA_TOKEN})

export let file: Figma.FileResponse

export async function getFile(): Promise<Figma.FileResponse> {
  const {data} = await client.file(FILE_ID)
  console.log(data)
  fs.writeJSONSync('./data/figma.json', data, {
    spaces: 2
  })
  return data
}

getFile()
