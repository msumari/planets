# PLANETS 🚀 🧑🏽‍🚀 🪐

A Mission control dashboard for space Mission in search of habitable planet using kepler data.

## Acknowledgements

- [NASA Exoplanet Archive](https://exoplanetarchive.ipac.caltech.edu/docs/intro.html)

## Screenshots

![Screenshot](https://firebasestorage.googleapis.com/v0/b/restaurant-340f0.appspot.com/o/nasa.png?alt=media&token=15bd3856-be0a-43ed-a3d0-4941f7b58041)

## API Reference

#### Get all planets

```http
  GET /planets
```

| Parameter | Type   | Description                   |
| :-------- | :----- | :---------------------------- |
|           | `JSON` | Returns all habitable planets |

#### Get all Launches

```http
  GET /launches
```

| Parameter | Type   | Description              |
| :-------- | :----- | :----------------------- |
|           | `JSON` | Returns launches mission |

```http
  POST /launches
```

| Parameter | Type   | Description             |
| :-------- | :----- | :---------------------- |
|           | `JSON` | Adds New launch mission |

```http
  DELETE /launches
```

| Parameter | Type   | Description                                      |
| :-------- | :----- | :----------------------------------------------- |
| `/:id`    | `JSON` | Aborts launch mission by id && **Required** {id} |

## Appendix

Repo was created for educational purpose on full stack javascript application.🎓

## Authors

- [@msumari](https://www.msumari.com)

## Badges

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Contributing

Contributions are always welcome!

## Deployment

To deploy this project locally run

```bash
  npm run deploy
```

## Feedback

If you have any feedback, please reach out to us at suleykhery@gmail.com

## 🚀 About Me

I'm a full stack developer...

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://msumari.com/)

## Tech Stack

**Client:** React

**Server:** Node, Express

## Run Locally

Clone the project

```bash
  git clone https://github.com/msumari/planets
```

Go to the project directory

```bash
  cd directory
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run deploy
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```
