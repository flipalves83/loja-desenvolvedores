
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Desenvolvedor = mongoose.model('Desenvolvedor');

router.get('/api/desenvolvedores', function(req, res) {
    Desenvolvedor.find(function(err, desenvolvedores) {
        if (err)
            res.send(err)
        res.json(desenvolvedores);
    });
});

router.post('/api/desenvolvedores', function(req, res) {
    Desenvolvedor.create({
        nome : req.body.nome,
        email : req.body.email,
        valor : req.body.valor,
        qtdhoras : req.body.qtdhoras,
        done : false
    }, function(err, desenvolvedor) {
        if (err)
            res.send(err);
        Desenvolvedor.find(function(err, desenvolvedores) {
            if (err)
                res.send(err)
            res.json(Desenvolvedor);
        });
    });

});

router.delete('/api/desenvolvedores/:desenvolvedor_id', function(req, res) {
    Desenvolvedor.remove({
        _id : req.params.desenvolvedor_id
    }, function(err, desenvolvedor) {
        if (err)
            res.send(err);
        Desenvolvedor.find(function(err, desenvolvedores) {
            if (err)
                res.send(err)
            res.json(desenvolvedores);
        });
    });
});

router.get('/api/desenvolvedores/:desenvolvedor_id', function(req, res) {
    Desenvolvedor.findOne({
        _id : req.params.desenvolvedor_id
    }, function(err, desenvolvedor) {
        if (err)
            res.send(err);
        res.json(desenvolvedor);
    });
});

router.put('/api/desenvolvedores/:desenvolvedor_id', function(req, res) {
    var desenvolvedorData = req.body;
    var id = req.params.desenvolvedor_id;

    Desenvolvedor.update(
        {_id: id },
        desenvolvedorData,
        { upsert: true},
        function(err, desenvolvedor) {
            if (err) res.send(err);
            res.json(desenvolvedor);
        });

});

router.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});

module.exports = router;