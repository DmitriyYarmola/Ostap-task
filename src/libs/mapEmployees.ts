export const mapEmployees = (employees) => {
    return employees.map(({name, surname, id}) => {
        return {
            id,
            name: `${id}${name[0]}${surname[0]}`
        }
    })
}
