const express = require('express')
const fetch = require('node-fetch');
const app = express()
const port = 3000


app.set('view engine', 'ejs');

app.get('/r/:subreddit', async (req, res) => {
  const response = await fetch(`https://reddit.com/r/${req.params.subreddit}.json`);
  const subreddit = await response.json();
  res.render('subreddit', { subreddit });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// module.exports = app;