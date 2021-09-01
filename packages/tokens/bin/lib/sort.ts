export const numeric = (a: number, b: number) => {
    return a < b ? -1 : a > b ? 1 : 0
}

export const alpha = (a: string, b: string) => {
    const valueA = a.toUpperCase()
    const valueB = b.toUpperCase()
    return valueA < valueB ? -1 : valueA > valueB ? 1 : 0
}
