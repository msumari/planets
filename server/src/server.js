const http = require("http");

const app = require("./app");
const { loadPlanets } = require("./models/planets.model");

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

async function start() {
  await loadPlanets();

  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}

start();
