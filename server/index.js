//importing all libraries

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const path = require("path");

//acknowledge database
const db = require("./db");

//iport functions
const {client} = db;

//express app
const app = express();
module.exports = app;

//routes

//init
const init = async ()=>{

    //connect to database
    await client.connect();

    //establish port
    const port = process.env.port || 3000;

    //start app
    app.listen(PORT, () => console.log(`Now listening on port ${port}.`));
}

//init invocation
init();