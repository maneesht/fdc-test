"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var default_connector_1 = require("./dataconnect-generated/js/default-connector");
var json = require("./firebase-js-config.json");
var app_1 = require("firebase/app");
(0, app_1.initializeApp)(json);
(0, default_connector_1.listMovies)();
//# sourceMappingURL=test.js.map