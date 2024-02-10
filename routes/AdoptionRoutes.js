const { Router } = require("express");
const AdoptionForm = require("../schema/AdoptionForm");
const app = Router();

app.get("/", (req, res) => {
    AdoptionForm.find()
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
});

app.get("/:filter", (req, res) => {
    const filter = req.params.filter;
    AdoptionForm.find({ species: filter })
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
});

app.get("/adopted/:filter", (req, res) => {
    const filter = req.params.filter;
    AdoptionForm.find({ species: filter, isAdopted: true })
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
});

app.post("/", (req, res) => {
    const adoptionForm = new AdoptionForm(req.body);
    adoptionForm
        .save()
        .then((result) => {
            res.json({
                msg: "Adoption form submitted successfully!",
                result,
            });
        })
        .catch((error) => {
            res.json(error);
        });
});

app.get("/:id", (req, res) => {
    const id = req.params.id;
    AdoptionForm.findById(id)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
});

module.exports = app;
