import {ImmutableStyleMap} from 'theo'

import {formatTokenVariable, valueIncludesUnit} from '../../utils'

const STRING_TOKENS_TYPE = [
    'border',
    'color',
    'duration',
    'weight',
    'box-shadow',
    'rgba',
    'transition'
]

export const formatTS = (result: ImmutableStyleMap) => {
    return result
        .get('props')
        .map((prop) => {
            if (!prop) {
                return ''
            }

            const type = prop.get('type').toString()
            const name = formatTokenVariable(prop.get('name').toString())
            const value = prop.get('value')
            if (STRING_TOKENS_TYPE.includes(type) || valueIncludesUnit(value)) {
                return `export const ${name} = "${value}";`
            }

            return `export const ${name} = ${value};`
        })
        .toJS()
        .join('\n')
}
