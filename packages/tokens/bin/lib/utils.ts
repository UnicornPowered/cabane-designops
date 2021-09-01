import {Token} from '../types/token'

export const formatTokenVariable = (value: string) => {
  return value.replace(/\//g, '-').replace(/(-\w)/g, (m) => m[1].toUpperCase())
}

export const valueIncludesUnit = (value: string | number) => {
  return /px$|%$/.test(value.toString())
}

export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function createToken<V = string | number | undefined>({
  id,
  name,
  value,
  type,
  comment,
  meta
}: {
  id?: string
  name: string
  value: V
  type?: string
  comment?: string
  meta?: {[key: string]: string | number}
}): Token<V> {
  return {
    ...(id && {id}),
    name: formatTokenVariable(name),
    value,
    type,
    ...(comment && {comment}),
    ...(meta && {meta})
  }
}
