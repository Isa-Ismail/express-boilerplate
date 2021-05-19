const express = require('express');
const router = express.Router();

router.get('/api',(req, res) => {
   res.send('<h1>Api</h1>')
})

module.exports = router