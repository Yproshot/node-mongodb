const express = require('express');
const Produto = require('../models/Produto');
const ProdutoController = require('../controllers/ProdutoController');
const router = express.Router();

router.get('/', function (req, res) {
    res.json({})
})



router.get('/Produto', (req, res) => ProdutoController.getAll(req, res))

router.post('/Produto', (req, res) => ProdutoController.create(req, res))

router.get('/Produto/:id', (req, res) => ProdutoController.get(req, res))

router.delete('/Produto/:id', (req, res) => ProdutoController.delete(req, res))

router.put('/Produto/:id', (req, res) => ProdutoController.update(req, res))

module.exports = router 