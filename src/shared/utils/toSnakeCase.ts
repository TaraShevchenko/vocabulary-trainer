export const toSnakeCase = (str: string) => {
    return str
        .trim()
        .replace(/^\W+|\W+$/g, '')
        .replace(/\s+/g, '_')
        .toLowerCase()
}
