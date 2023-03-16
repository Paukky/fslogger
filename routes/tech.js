const express = require('express');
const router = express.Router();

const Tech = require('../models/Tech');

// @route     GET api/tech
// @desc      Get all techs
// @access    Public
router.get('/', async (req, res) => {
    try {
      const tech = await Tech.find({id: req.id})
      res.json(tech);   
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

// @route     POST api/tech
// @desc      Add a tech
// @access    Public
  router.post('/', async (req, res) => {

    const {firstName,lastName} = req.body;

    try {
        const newTech = new Tech({
            firstName,
            lastName
        });
        
        const tech = await newTech.save();

        res.json(tech);

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
      await Tech.findByIdAndRemove(req.params.id);

      res.json({ msg: 'Tech removed' });
    } catch(err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
})
  module.exports = router;