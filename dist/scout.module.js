"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ScoutModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoutModule = void 0;
const common_1 = require("@nestjs/common");
const scout_service_1 = require("./scout.service");
let ScoutModule = ScoutModule_1 = class ScoutModule {
    static register(options) {
        return {
            module: ScoutModule_1,
            providers: [
                {
                    provide: 'SCOUT_OPTIONS',
                    useValue: options,
                },
                scout_service_1.ScoutService
            ],
            exports: [scout_service_1.ScoutService],
        };
    }
};
ScoutModule = ScoutModule_1 = __decorate([
    (0, common_1.Module)({})
], ScoutModule);
exports.ScoutModule = ScoutModule;
//# sourceMappingURL=scout.module.js.map