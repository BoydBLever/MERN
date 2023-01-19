// import the controller to use the instantiated model
const JokeController = require("../controllers/joke.controller");
// console.log(JokeController);

module.exports = app => {
    app.get("/api/jokes", JokeController.findAllJokes)
    app.post("/api/jokes", JokeController.createJoke)
    app.get("/api/jokes/:id", JokeController.findOneSingleJoke)
    app.put("/api/jokes", JokeController.updateExistingJoke)
    app.delete("/app/jokes/:id", JokeController.deleteAnExistingJoke)
}