const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use("/Create", require("./Routes/TwitteRoutes/TwitteCreateRoutes"));
app.use("/Read", require("./Routes/TwitteRoutes/TwitteReadRoutes"));
app.use("/Update", require("./Routes/TwitteRoutes/TwitteUpdateRoutes"));
app.use("/Delete", require("./Routes/TwitteRoutes/TwitteDeleteRoutes"));

app.listen(PORT, () => console.log('Server starts SucceFull'));