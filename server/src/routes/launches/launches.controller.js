const {
  AllLaunches,
  setLaunch,
  exists,
  removeLaunch,
} = require("../../models/launches.model");

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

function AbortLaunch(req, res) {
  const id = Number(req.params.id);
  const launch = exists(id);
  if (!launch) {
    return res.status(404).json({ error: "Launch Not Found" });
  }
  const aborted = removeLaunch(id);
  return res.status(200).json(aborted);
}

module.exports = {
  getAllLaunches,
  AddNewLaunch,
  AbortLaunch,
};
