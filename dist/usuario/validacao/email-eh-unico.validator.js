"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailEhUnico = exports.EmailEhUnicoValidator = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const usuario_service_1 = require("../usuario.service");
let EmailEhUnicoValidator = class EmailEhUnicoValidator {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    async validate(value, _validationArguments) {
        const usuarioComEmailExiste = await this.usuarioService.buscaPorEmail(value);
        return !usuarioComEmailExiste;
    }
};
EmailEhUnicoValidator = __decorate([
    (0, common_1.Injectable)(),
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], EmailEhUnicoValidator);
exports.EmailEhUnicoValidator = EmailEhUnicoValidator;
const EmailEhUnico = (opcoesDeValidacao) => {
    return (objeto, propriedade) => {
        (0, class_validator_1.registerDecorator)({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: EmailEhUnicoValidator,
        });
    };
};
exports.EmailEhUnico = EmailEhUnico;
//# sourceMappingURL=email-eh-unico.validator.js.map