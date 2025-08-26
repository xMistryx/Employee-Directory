import express from "express";
import employees from "#db/employees";

const app = express();

app.route("/").get((req, res) => {
    res.send("Hello employees!")
});

app.route("/employees").get((req, res) => {
    res.send(employees);
});

app.route("/employees/random").get((req, res) => {
    const id = Math.floor(Math.random() * employees.length) + 1;
    const target = employees.find((employee) => employee.id === Number(id));

    if (!target) res.status(404).send("No employee found");

    res.send(target)

});

app.route("/employees/:id").get((req, res) => {
    const {id} = req.params;
    const target = employees.find((employee) => employee.id === Number(id));

    if (!target) res.status(404).send("No employee found");

    res.send(target)
});

export default app;