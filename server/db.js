//importing all dependencies
const pg = require("pg");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const {clientPool} = pg;

client = new clientPool({
    connectionString:
    process.env.DATABASE_URL || "postgres://localhost/commerceshop",
});