const express = require('express')
const router = express.Router()

// use res.render to load up an ejs view file=====>
router.get('/', (req, res) => {
  const drinks = [
    { name: 'Bloody Mary', drunkness: 3 },
    { name: 'Martini', drunkness: 5 },
    { name: 'Scotch', drunkness: 10 }
  ]
  const tagline =
    'Any code of your own that you haven`t looked at for six or mote months might as well have been written by someone '

  res.render('pages/home', {
    drinks: drinks,
    tagline: tagline,
    page: 'HOME'
  })
})

// about page
router.get('/about', (req, res) => {
  res.render('pages/about', { page: 'ABOUT' })
})

module.exports = router
