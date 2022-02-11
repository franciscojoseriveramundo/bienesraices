var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('Bienvenido al API de Bienes Raices');
});

router.use('/usuarios', require('./usuarios'));
router.use('/menu', require('./menu'));

module.exports = router;