const { AllLaunches, setLaunch } = require("../../models/launches.model");

function getAllLaunches(req, res) {
  return res.status(200).json(AllLaunches());
}

function AddNewLaunch(req, res) {
  const launch = req.body;
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({ error: "Launch Data Missing" });
  }
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({ error: "Invalid Launch Date" });
  }
  setLaunch(launch);
  return res.status(201).json(launch);
}

module.exports = {
  getAllLaunches,
  AddNewLaunch,
};
