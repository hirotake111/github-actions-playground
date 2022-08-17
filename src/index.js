const app = require("express")();

app.get("/", (req, ress) => ress.json({ message: "hello WORLD" }));

app.listen(3000, () => console.log("Listening on port 3000"));
