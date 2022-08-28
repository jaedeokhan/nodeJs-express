const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors({
    origin : '*'
}));

app.get("/sound/:name", (req, res) => {

    const name = req.params.name;
    let sound = "Not Found";

    if ("dog" === name){
        sound = "멍멍";
    } else if ("cat" == name){
        sound = "야옹";
    }

    res.send({'sound' : sound});
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
