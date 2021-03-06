const { db, Member, Dues, syncAndSeed } = require("./db");
const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use("/dist", express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/members", async (req, res, next) => {
  try {
    const members = await Member.findAll();
    res.send(members);
  } catch (err) {
    next(err);
  }
});
app.get("/members/:memberId", async (req, res, next) => {
  try {
    const member = await Member.findByPk(req.params.memberId);
    res.send(member);
  } catch (err) {
    next(err);
  }
});

app.post("/members", async (req, res, next) => {
  try {
    const name = req.body.name;
    res.status(201).send(await Member.create({ name }));
  } catch (err) {
    next(err);
  }
});

app.delete("/members/:memberId", async (req, res, next) => {
  try {
    const member = await Member.findByPk(req.params.memberId);
    await member.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

const init = async () => {
  try {
    await db.sync({ force: true });
    await syncAndSeed();
  } catch (err) {
    console.log(err);
  }
};

init();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
