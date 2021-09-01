import * as Figma from 'figma-js'
import fs from 'fs-extra'

if (!process.env.FIGMA_TOKEN) {
  throw new Error('Missing expected FIGMA_TOKEN env variable.')
}
const FIGMA_TOKEN: string = process.env.FIGMA_TOKEN
// cabane-tokens
// File link (READONLY): https://www.figma.com/file/EI5g7Oj4omBZBS5mqkhLDc/cabane-tokens
const FILE_ID = '7TFAZecES7fCaxu4ch8dGH'
// cabane-tokens-theme2
// File link (READONLY): https://www.figma.com/file/Uu43ZkwfRdt812Pszgldhq/cabane-tokens-theme2
// const FILE_ID = 'TkewhsGIfYZraRNcsczAdo'

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
