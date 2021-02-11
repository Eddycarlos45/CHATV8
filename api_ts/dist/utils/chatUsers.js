"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLeave = exports.getCurrentUser = exports.userJoin = void 0;
const users = [];
//Join user to chat
function userJoin(id, username) {
    const user = { id, username };
    users.push(user);
    console.log(users);
    return user;
}
exports.userJoin = userJoin;
//Get current user
function getCurrentUser(id) {
    return users.find(user => user.id === id);
}
exports.getCurrentUser = getCurrentUser;
//User leaves chat
function userLeave(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}
exports.userLeave = userLeave;
