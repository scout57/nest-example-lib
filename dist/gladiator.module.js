"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GladiatorModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GladiatorModule = void 0;
const common_1 = require("@nestjs/common");
const gladiator_service_1 = require("./gladiator.service");
let GladiatorModule = GladiatorModule_1 = class GladiatorModule {
    static register(options) {
        return {
            module: GladiatorModule_1,
            providers: [
                {
                    provide: 'GLADIATOR_OPTIONS',
                    useValue: options,
                },
                gladiator_service_1.GladiatorService
            ],
            exports: [gladiator_service_1.GladiatorService],
        };
    }
};
GladiatorModule = GladiatorModule_1 = __decorate([
    (0, common_1.Module)({})
], GladiatorModule);
exports.GladiatorModule = GladiatorModule;
//# sourceMappingURL=gladiator.module.js.map