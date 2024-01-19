import { Application } from "express";
import mongoose from "mongoose";
import { PORT } from "./config/index";
var express = require("express");
var app: Application = express();

const HomeRoutes = require("../src/routes/homeRoute");

app.use(express.urlencoded());
app.use(express.json());

app.use("/", HomeRoutes);

mongoose
  .connect("mongodb://localhost:27017/testApp")

  .then(() => {
    console.log("Successfully connected to DB");
    app.listen(PORT, () => {
      console.log(`Server Started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
