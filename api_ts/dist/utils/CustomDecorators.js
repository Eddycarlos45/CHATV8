"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsPassword = exports.IsNotBlank = void 0;
const class_validator_1 = require("class-validator");
function IsNotBlank(property, validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            name: "isNotBlank",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value) {
                    return typeof value === "string" && value.trim().length > 0;
                }
            }
        });
    };
}
exports.IsNotBlank = IsNotBlank;
function IsPassword(property, validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            name: "IsPassword",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value) {
                    return value.indexOf(" ") === -1;
                }
            }
        });
    };
}
exports.IsPassword = IsPassword;
