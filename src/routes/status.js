var express = require('express');
var Harmony = require('harmony-websocket');

var router = express.Router();
const harmony = new Harmony();

router.get('/', async function (_, res) {
  try {
    await harmony.connect(process.env.HUB_IP_ADDRESS);
    res.send('Connected to Harmony');
  } catch (e) {
    res.status(503).send(e.message);
  }
});

module.exports = router;
