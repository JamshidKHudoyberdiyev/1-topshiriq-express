const express = require("express");
const Joi = require("joi");
const app = express();
app.use(express.json());
const port = process.env.PORT | 5000;
const darslar = [
  {
    id: 1,
    name: "JS darslari",
  },
  {
    id: 2,
    name: "React Darslari",
  },
  {
    id: 3,
    name: "Node js Darslari",
  },
];
// home
app.get("/", (req, res) => {
  res.send("vedio darslar kanaliga Xush kelibsiz");
});

// get all

app.get("/api/darslar", (req, res) => {
  res.send(darslar);
});

//  get for id

app.get("/api/darslar/:id", (req, res) => {
  const dars = darslar.find((itm) => itm.id === parseInt(req.params.id));
  if (!dars) {
    return res.status(404).send("Bunday Id li darlik topilmadi ");
  }
  res.send(dars);
});

// post

app.post("/api/darslar", (req, res) => {
  const darsSchema = Joi.object({
    name: Joi.string().required().min(5),
  });
  const { error } = darsSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details);
  }
  const dars = {
    id: darslar.length + 1,
    name: req.body.name,
  };
  darslar.push(dars);
  res.status(201).send(dars);
});

app.put("/api/darslar/:id", (req, res) => {
  const dars = darslar.find((itm) => itm.id === parseInt(req.params.id));
  if (!dars) {
    return res.status(404).send("bunday id li dars topilmadi");
  }
  const darsSchema = Joi.object({
    name: Joi.string().required().min(5),
  });

  const { error } = darsSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details);
  }
  //   // const dataIndex = darslar.findIndex(itm => itm.id === dars.id)

  dars.name = req.body.name;
  res.send(dars);
});

app.delete("/api/darslar/:id", (req, res) => {
  const dars = darslar.find((itm) => itm.id === parseInt(req.params.id));
  if (!dars) {
    return res.status(404).send("Bunday Id li vedo dars topilmadi");
  }
  dars.res.send(dars);
});

app.listen(port, () => {
  console.log(`${port} ishlamoqda`);
});
