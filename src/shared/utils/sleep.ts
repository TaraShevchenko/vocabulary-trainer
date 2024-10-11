export const sleep = (timeInMs: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, timeInMs)
    })
}
