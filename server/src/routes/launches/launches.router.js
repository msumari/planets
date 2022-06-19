const express = require("express");

const { getAllLaunches, AddNewLaunch } = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/", getAllLaunches);
launchesRouter.post("/", AddNewLaunch);

module.exports = launchesRouter;
