import express from "express";
import "express-async-errors";

const app = express();

app.get("/planets", (request, response) => {
    const planets = [{ name: "Mercury" }, { name: "Venus" }, { name: "Earth" }];

    console.table(planets);

    response.json(planets);
});

export default app;