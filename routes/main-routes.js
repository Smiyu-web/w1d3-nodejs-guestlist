const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", { title: "Thank you for visiting our website" });
});

const data = [
  {
    id: 1,
    note: "First note",
  },
  {
    id: 2,
    note: "Second note",
  },
  {
    id: 3,
    note: "Third note",
  },
  {
    id: 5,
    note: "Forth note",
  },
];

router.get("/leave-note", (req, res) => {
  res.render("leave-note", { notes: data, title: "Leave a note" });
});

router.post("/leave-note", (req, res, next) => {
  data.push({
    id: Math.random(),
    note: req.body.note,
  });

  fs.writeFile(
    path.join(__dirname, "..", "notes.json"),
    JSON.stringify(data, null, 2),
    () => {
      res.status(302).redirect("/leave-note");
    }
  );
});

router.get("/read-notes", (req, res, next) => {
  res.render("read-notes", { notes: data, title: "read notes left by others" });
});

module.exports = router;
