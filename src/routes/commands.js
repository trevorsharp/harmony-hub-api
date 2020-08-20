var express = require('express');
var basicAuth = require('express-basic-auth');
var Harmony = require('harmony-websocket');

var router = express.Router({ mergeParams: true });
const harmony = new Harmony();

router.get('/', async function (req, res) {
  try {
    if (!harmony.isOpened()) {
      await harmony.connect(process.env.HUB_IP_ADDRESS);
    }
    var response = await harmony.getDeviceCommands(req.params.deviceId);
    res.send(response);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

const authUser = {};
authUser[`${process.env.USERNAME}`] = `${process.env.PASSWORD}`;

router.post('/:commandName', basicAuth({ users: authUser }), async function (
  req,
  res
) {
  try {
    if (!harmony.isOpened()) {
      await harmony.connect(process.env.HUB_IP_ADDRESS);
    }
    var response = await harmony.sendCommand(
      `{"command":"${req.params.commandName}","type":"IRCommand","deviceId":"${req.params.deviceId}"}`
    );
    if (response.code == 566) {
      res.status(404).send('Command not found');
    } else {
      res.status(response.code).send(response.msg);
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
