import * as Figma from 'figma-js'
import rimraf from 'rimraf'

import figmaJSON from '../data/figma.json'
import {generateColor} from './tokens/color'
import { generateRadii } from './tokens/radii'

rimraf.sync('./dist/*')

const file = figmaJSON as Figma.FileResponse

try {
  generateColor(file)
  generateRadii(file)
} catch (err) {
  console.error('An error occured while building tokens', err)
}
