const express = require("express");
const user = express.Router();
const db = require("../config/database");

user.post("/", async (req, res, next) => {
    const { user_name, user_mail, user_password } = req.body;

    if(user_name && user_mail && user_password){
        let query = "INSERT INTO user (user_name, user_mail, user_password) ";
        query += `VALUES('${user_name}', '${user_mail}', '${user_password}')`;
        const rows = await db.query(query);
    
        if(rows.affectedRows == 1){
            return res.status(201).json({code: 201, message: "User registered"});
        }
        return res.status(500).json({code: 500, message: "Could not register user"});
    }
    return res.status(500).json({code: 500, message: "Please fill all the requirements for user"});
});

module.exports = user;