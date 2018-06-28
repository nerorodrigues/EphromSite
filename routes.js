var express = require('express');
var router = express.Router();
var sendMailFromWorkshop = require('./sendMailFromWorkshop');

var getDevice = function (device) {
  if(device == "desktop" || device == "mobile")
    return device;
  return "desktop"
}

router.get('/', function(req, res){
    res.render("index");
});

router.get('/historico', function(req, res){
    res.render("historico");
});

router.get('/contato', function(req, res){
    res.render("contato");
});

router.get('/missao', function(req, res){
    res.render("missao");
});

//Rota antiga. Está aqui porque o link ainda é publico.
router.get('/workshops/workshop1/:id', function(req, res) {
  if(id = req.params.id)
    sendMailFromWorkshop(id, "Geral", "Acesso ao convite do workshop 'Alto Desempenho na Melhoria de Processos': ");
  res.render("workshops/WorkshopSP3/Convite-Workshop-SP-15_06-V2_desktop", { codigo: req.params.id });
});

// workshops
// WorkshopSP3
router.get('/workshops/WorkshopSP3/:id', function(req, res) {
  res.render("redirect", {
    codigo: req.params.id,
    page: "WorkshopSP3"
  });
});

router.get('/workshops/WorkshopSP3/:device/:id', function(req, res) {
  var device = getDevice(req.params.device), id;
  if(id = req.params.id)
    sendMailFromWorkshop(id, device, "Acesso ao convite do workshop 'Alto Desempenho na Melhoria de Processos'");
  res.render("workshops/WorkshopSP3/Convite-Workshop-SP-15_06-V2_" + device, { codigo: req.params.id });
});

// WorkshopSP3 > SaibaMais
router.get('/workshops/WorkshopSP3-SaibaMais/:id', function(req, res) {
  res.render("redirect", {
    codigo: req.params.id,
    page: "WorkshopSP3-SaibaMais"
  });
});

router.get('/workshops/WorkshopSP3-SaibaMais/:device/:id', function(req, res) {
  var device = getDevice(req.params.device), id;
  if(id = req.params.id)
    sendMailFromWorkshop(id, device, "Acesso ao Saiba Mais do workshop 'Alto Desempenho na Melhoria de Processos': ");
  res.render("workshops/WorkshopSP3/Saiba-Mais_" + device, { codigo: req.params.id });
});

module.exports = router;
