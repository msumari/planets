const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "Kepler X",
  rocket: "Falcon 9",
  launchDate: new Date("June 20, 2022"),
  destination: "Kepler-62 f",
  customer: ["sule", "suhay"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function AllLaunches() {
  return Array.from(launches.values);
}

module.exports = {
  AllLaunches,
};
