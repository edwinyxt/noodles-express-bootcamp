import express from "express";
import { read } from "/home/edwinyxt/bootcamp/module2/29-Jan/to-do-json/jsonFileStorage.js";
const app = express();

const getRecipeByIndex = (request, response) => {
  read("data.json", (err, data) => {
    // Respond with the name at the index specified in the URL

    const content = data.recipes[request.params.index];
    if (content) {
      response.send(content);
    } else {
      response.status(404).send("sorry, we cannot find that!");
    }
  });
};

const getRecipeByYield = (request, response) => {
  read("data.json", (err, data) => {
    // Respond with the name at the index specified in the URL

    const list = data.recipes;
    const portion = Number(request.params.portions);
    console.log(portion);
    const result = list.filter((item) => item["yield"] === portion);

    if (result) {
      response.send(result);
    } else {
      response.status(404).send("sorry, we cannot find that!");
    }
  });
};

app.get("/recipe/:index", getRecipeByIndex);

app.get("/yield/:portions", getRecipeByYield);

app.listen(3004);
