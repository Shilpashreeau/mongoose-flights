require("dotenv").config();

const express= require("express");

const connectToDB=require("./config/database");

const Flight=require("./models/Flight");

const app=express();

