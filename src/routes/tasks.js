const express = require("express");
const router = new express.Router();

const Task = require("../models/Task");

router.post("/create", async (req, res) => {
  try {
    const { desc } = req.body;

    const task = new Task({
      desc,
    });

    await task.save();
    res
      .status(201)
      .send({ success: true, message: "Zadatak uspješno unesen!" });
  } catch (err) {
    res.status(500).send({ success: false, message: "Došlo je do pogreške!" });
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({}, null, {
      sort: {
        updatedAt: -1,
      },
    });
    res.status(200).send({ success: true, tasks });
  } catch (err) {
    res.status(500).send({ success: false, message: "Došlo je do pogreške!" });
  }
});

router.put("/confirm/:id", async (req, res) => {
  try {
    task = await Task.findOne({ _id: req.params.id });
    if (!task) {
      return res.status(404).send();
    }
    task.completed = !task.completed;
    await task.save();

    res
      .status(201)
      .send({ success: true, message: "Zadatak uspješno ažuriran!" });
  } catch (err) {
    res.status(500).send({ success: false, message: "Došlo je do pogreške!" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
    });
    await task.remove();

    if (!task) {
      return res.status(404).send();
    }
    res
      .status(201)
      .send({ success: true, message: "Zadatak uspješno izbrisan!" });
  } catch (err) {
    res.status(500).send({ success: false, message: "Došlo je do pogreške!" });
  }
});

module.exports = router;
