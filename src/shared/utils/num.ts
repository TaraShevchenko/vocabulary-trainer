export const num = (number: number) => {
    return new Intl.NumberFormat('en-US').format(number).replaceAll(',', ', ')
}
