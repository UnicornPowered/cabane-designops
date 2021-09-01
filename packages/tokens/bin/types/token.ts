export interface Token<V = string | number | undefined> {
    name: string
    value: V
    type?: string
    group?: string
    alias?: string
}
