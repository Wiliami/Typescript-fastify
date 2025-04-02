interface User {
    name: string    
    email: string
    password: string
}

function createUser(data: User) {

    console.log(data)
}

createUser({
    name: 'Wiliamis',
    email: 'oliveira@gmail.com',
    password: '123'
})


export default createUser