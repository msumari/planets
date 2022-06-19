const express = require("express");

const {
  getAllLaunches,
  AddNewLaunch,
  AbortLaunch,
} = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/", getAllLaunches);
launchesRouter.post("/", AddNewLaunch);
launchesRouter.delete("/:id", AbortLaunch);

module.exports = launchesRouter;
