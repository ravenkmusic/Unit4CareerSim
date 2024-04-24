//importing all libraries

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const path = require("path");

const db = require("./db");

const app = express();
module.exports = app;

//routes

//init
const init = async ()=>{
    await Client.connect();
}

//init invocation
init();