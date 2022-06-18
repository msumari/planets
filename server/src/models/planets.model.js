const { parse } = require("csv-parse");
const fs = require("fs");

const habitablePlanet = [];

/**
 * If the planet is confirmed, has an insolence between 0.36 and 1.11, and has a radius less than 1.6,
 * then it is habitable.
 * @param planet - The planet object
 * @returns An array of objects that are habitable planets.
 */
const habitable = (planet) => {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
};

function loadPlanets() {
  return new Promise((resolve, reject) => {
    /* Reading the csv file and parsing it. */
    fs.createReadStream("data/kepler-data.csv")
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("data", (data) => {
        if (habitable(data)) {
          habitablePlanet.push(data);
        }
      })
      .on("end", () => {
        console.log(`${habitablePlanet.length} habitable planets found!`);
        resolve();
        console.log("completed");
      });
  });
}

module.exports = {
  loadPlanets,
  planets: habitablePlanet,
};
