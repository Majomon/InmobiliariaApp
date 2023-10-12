const routerSearch = require("express").Router();
const handlerGetSearch = require("../handlers/search/handlerGetSearch");

routerSearch.get("/", handlerGetSearch);

module.exports = routerSearch;
