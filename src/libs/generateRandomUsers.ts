export const generateRandomUsers = (length, startWith) => {
    return new Array(length).fill('').map((_,index) => {
        const order = startWith + index + 1;
        return ({
            id: order,
            name: `Name ${order}`,
            surname: `Surname ${order}`
        })
    })
}
