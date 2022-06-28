const userModel = require('../models/userModel');
// var users = [
//     { id: 1, firstname: 'Peter', lastname: 'Parker', email: 'Peter@gmail.com', city: 'Mumbai' },
//     { id: 2, firstname: 'Tony', lastname: 'Stark', email: 'Tony@gmail.com', city: 'New Delhi' }
// ]

function GetUsers(req, res) {
    userModel.find({}, (err, data) => {
        if (!err) {
            res.status(200).send(data);
        }
    })
}

function GetUser(req, res) {
    userModel.findOne({ _id: req.params.id }, (err, data) => {
        if (data !== null) {
            res.status(200).send(data);
        }
        else if (data == null) {
            res.status(404).send({ status: 404, message: `User with specified id: ${req.params.id} does not exists` });
        } else {
            throw err;
        }
    })
}

function AddUser(req, res) {
    let user = new userModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        city: req.body.city,
        age: req.body.age
    });
    user.save((err) => {
        if (!err) {
            res.status(201).send({ message: "User added successfully" });
        } else {
            throw err;
        }
    });
}

function DeletUser(req, res) {
    userModel.deleteOne({ userid: req.params.id }, (err, data) => {
        console.log(data);
        if (err) {
            throw err;
        } else {
            res.status(200).send({ message: "User deleted successfully" });
        }
    });
}

function UpdateUser(req, res) {
    let user = users.find(x => x.id == req.params.id);
    if (user === undefined) {
        res.status(404).send({ status: 404, message: `User with specified id: ${req.params.id} does not exists` });
    } else {
        users[users.indexOf(user)] = req.body;
        res.status(200).send({ message: "User updated successfully" });
    }
}

module.exports = { GetUsers, GetUser, AddUser, DeletUser, UpdateUser }