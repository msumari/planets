const { AllLaunches } = require("../../models/launches.model");

function getAllLaunches(req, res) {
  return res.status(200).json(AllLaunches);
}

module.exports = {
  getAllLaunches,
};
