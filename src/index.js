const app = require("express")();

app.get("/", (req, ress) => ress.json({ message: "hello world" }));

app.listen(3000, () => console.log("Listening on port 3000"));
