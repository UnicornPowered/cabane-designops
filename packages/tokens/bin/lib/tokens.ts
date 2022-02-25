import path from 'path'

import fs from 'fs-extra'
import theo, {Format, Transform} from 'theo'

import {formatTS} from './theo/formats'

import {Token} from '../types/token'

theo.registerTransform('css', ['color/hex'])
theo.registerTransform('ts', ['color/hex'])

theo.registerFormat('ts', formatTS)

const formats = (
  name: string
): Array<{
  type: Format | 'ts'
  file: string
  transform: string
}> => [
  {type: 'custom-properties.css', file: `${name}.css`, transform: 'css'},
  {type: 'ts', file: `${name}.ts`, transform: 'ts'}
]

function generateVariables(tokenName: string, file: string) {
  formats(tokenName).forEach((format) => {
    try {
      const output = theo.convertSync({
        transform: {
          type: format.transform as Transform,
          file
        },
        format: {
          type: format.type as Format
        }
      })

      if (format.transform === 'ts') {
        fs.writeFileSync('./src/' + format.file, output)
      } else {
        fs.writeFileSync('./dist/' + format.file, output)
      }
    } catch (error) {
      throw new Error(`Error while generating token values: ${error}`)
    }
  })
}

const tokensDist = path.resolve(__dirname, '../../dist/')

export function generateTokens<V = string | number | undefined>({
  name,
  props,
  type,
  category
}: {
  name: string
  props: Token<V>[]
  type?: string
  category?: string
}) {
  fs.ensureDirSync(tokensDist)

  const file = `${tokensDist}/${name}.json`

  fs.writeJSONSync(file, {
    props,
    global: {
      type: type ?? name,
      category: category ?? name
    }
  })

  generateVariables(name, file)

  console.log(`Generated ${name} tokens`)
}
