const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const data = {
  aud: "doordash",
  iss: process.env.DEVELOPER_ID,
  kid: process.env.KEY_ID,
  exp: Math.floor(Date.now() / 1000 + 300),
  iat: Math.floor(Date.now() / 1000),
};

const headers = { algorithm: "HS256", header: { "dd-ver": "DD-JWT-V1" } };

const token = jwt.sign(
  data,
  Buffer.from(process.env.SIGNING_SECRET, "base64"),
  headers
);

console.log(token);
