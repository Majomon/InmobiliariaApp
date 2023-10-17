const routerSearch = require("express").Router();
const handlerGetSearch = require("../handlers/search/handlerGetSearch");

routerSearch.post("/", handlerGetSearch);

module.exports = routerSearch;
