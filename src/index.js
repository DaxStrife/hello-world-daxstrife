const axios = require('axios');

const greet = name => `Hello ${name}`

const PI = 3.1415

const users = async() =>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=2')
    return res.data;
}

module.exports = {
    users,
    greet,
    PI
}

// users().then(res => console.log('R: ', res))
// console.log('R: ', users());