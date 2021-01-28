import { registerDecorator, ValidationOptions } from "class-validator";

export function IsNotBlank(property: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "isNotBlank",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value: any) {
                    return typeof value === "string" && value.trim().length > 0;
                }
            }
        });
    };
}

export function IsPassword(property: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "IsPassword",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value: any) {
                    return value.indexOf(" ") === -1;
                }
            }
        });
    };
  }