const router = require('express').Router()
const { Playlist, Song } = require('../models')


router.get('/', async (req, res) => {

  try {
    // render favorites to page
    res.render("home");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/invader', async(req, res)=>{
  try {
    res.render('error');
  } catch (error) {
    res.status(404).json(error);
  }
});

router.get('*', async (req, res) => {
  res.render('error')
});


module.exports = router
