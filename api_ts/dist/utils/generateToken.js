"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genarateToken = void 0;
function genarateToken(name, email) {
    let payload = {
        iss: "chatv8.net",
        iat: new Date().getSeconds(),
        exp: new Date().setMinutes(60),
        username: "Edson Sousa"
    };
}
exports.genarateToken = genarateToken;
