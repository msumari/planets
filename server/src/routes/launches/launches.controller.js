const { AllLaunches, setLaunch } = require("../../models/launches.model");

function getAllLaunches(req, res) {
  return res.status(200).json(AllLaunches());
}

function AddNewLaunch(req, res) {
  const launch = req.body;
  launch.launchDate = new Date(launch.launchDate);
  setLaunch(launch);
  return res.status(201).json(launch);
}

module.exports = {
  getAllLaunches,
  AddNewLaunch,
};
