// import the controller
const Note = require("../controllers/controller")

module.exports = (app) => {
    app.get("/api/notes", Note.findAll)
    app.post("/api/notes", Note.create)
    app.get("/api/notes/:id", Note.findOne)
    app.put("/api/notes/:id", Note.update)
    app.delete("/api/notes/:id", Note.delete)
}