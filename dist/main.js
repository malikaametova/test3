"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // Импортируйте reflect-metadata
const app_module_1 = require("./app.module");
const core_1 = require("@nestjs/core");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
}
bootstrap();
