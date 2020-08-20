var express = require('express');
var Harmony = require('harmony-websocket');

var router = express.Router();
const harmony = new Harmony();

router.get('/', async function (_, res) {
  try {
    if (!harmony.isOpened()) {
      await harmony.connect(process.env.HUB_IP_ADDRESS);
    }
    var response = await harmony.getDevices();
    res.send(response);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get('/:deviceId', async function (req, res) {
  try {
    if (!harmony.isOpened()) {
      await harmony.connect(process.env.HUB_IP_ADDRESS);
    }
    var response = await harmony.getDevices();

    for (const index in response) {
      if (response[index].id == req.params.deviceId) {
        res.send(response[index]);
        return;
      }
    }

    res.status(404).send('Device not found');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
