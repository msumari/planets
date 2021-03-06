const launches = new Map();

let latest = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler X",
  rocket: "Falcon 9",
  launchDate: new Date("June 20, 2022"),
  target: "Kepler-62 f",
  customer: ["sule", "suhay"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function exists(id) {
  return launches.has(id);
}

function AllLaunches() {
  return Array.from(launches.values());
}

function setLaunch(launch) {
  latest++;
  launches.set(
    latest,
    Object.assign(launch, {
      flightNumber: latest,
      customer: ["sule", "suhay"],
      upcoming: true,
      success: true,
    })
  );
}

function removeLaunch(id) {
  const aborted = launches.get(id);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

module.exports = {
  AllLaunches,
  setLaunch,
  exists,
  removeLaunch,
};
