const User = require('./User')

// const users = [
//     {id:1,name:'Thiago',email:'Thiago_kauai@hotmail.com'},
//     {id:2,name:'Celina',email:'Celina@hotmail.com'},
// ]

module.exports = {
    Query:{
       users:() => {
          return User.find()
       },
       user:(_,{ id }) => {
           return User.findById(id)
       }
    },
    Mutation:{
       createUser:(_,{ name,email }) => {
           return User.create({ name, email })
       }
    }
}