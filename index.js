const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
// app.use(express.urlencoded({extended:false}));

app.use("/Posts", require("./Routes/TwitteRoutes/TwitteReadRoutes"));
// app.use("/Posts", require("./Routes/TwitteRoutes/TwitteReadRoutes"));
// app.use("/Posts", require("./Routes/TwitteRoutes/TwitteReadRoutes"));
// app.use("/Posts", require("./Routes/TwitteRoutes/TwitteReadRoutes"));


app.listen(PORT, () => console.log('Server starts SucceFull'));

