// Estructura del CRUD
const router = require('express').Router();
const {
    getMenu
} = require('../controllers/menu')

router.get('/', getMenu);

module.exports = router;