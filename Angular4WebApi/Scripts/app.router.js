"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var qrcode_component_1 = require("./qrcode/qrcode.component");
exports.router = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'qrcode', component: qrcode_component_1.QRCodeComponent }
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app.router.js.map