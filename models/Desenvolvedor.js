/**
 * Created by Felipe on 04/02/2017.
 */
/**
 * Created by Felipe on 04/02/2017.
 */

// Desenvolvedor.js
var mongoose = require('mongoose');

var DesenvolvedorSchema = new mongoose.Schema({
    nome: String,
    email: String,
    valor: {type: Number, default: 0},
    qtdhoras: {type: Number, default: 0},
});

mongoose.model('Desenvolvedor', DesenvolvedorSchema);