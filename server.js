const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.static('./client/public'));

require("./controllers.js")(app);

app.listen(PORT, (err) =>{
    if(err) throw err;
    console.log(`server started on port ${PORT}`);
})