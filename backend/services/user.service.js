const userModel = require('../models/user.model');

module.exports.createUser = async ({firstName, lastName, email, password}) => {
    if(!firstName || !lastName || !email || !password){
        throw new Error('All the fields are required');
    }
    const user = userModel.create({
        fullName: {
            firstName,
            lastName
        },
        email,
        password
    })

    return user;
}