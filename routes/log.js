const express = require('express');
const router = express.Router();

const Log = require('../models/Log');

// @route     GET api/log
// @desc      Get all logs
// @access    Public
router.get('/', async (req, res) => {
    try {
      const log = await Log.find({id:req.id});

      res.json(log);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

// @route     POST api/log
// @desc      Add a log
// @access    Public
  router.post('/', async (req, res) => {

    const { message,attention, tech, date} = req.body;

    try {
      const newLog = new Log({
        message,
        attention,
        tech,
        date
      });

      const log = await newLog.save();

      res.json(log);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  })

// @route     PUT api/log/:id
// @desc      Update Log
// @access    Public
  router.put('/:id', async (req,res) => {

    const {message,attention, tech, date} = req.body;

    //Build Log Object
    const logFields = {};
    if (message) logFields.message = message;
    if (attention) logFields.attention = attention;
    if (tech) logFields.tech = tech;
    if (date) logFields.date = date;

     try { 
      let log = await Log.findById(req.params.id);

      log = await Log.findByIdAndUpdate(
        req.params.id,
        { $set: logFields }
      )
      res.json(log);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  })

  // @route     DELETE api/tech
// @desc      Delete a tech
// @access    Public
router.delete('/:id', async(req, res) => {
  try {
    await Log.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Log removed' });
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
})

module.exports = router;

  