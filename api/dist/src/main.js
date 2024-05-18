"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useWebSocketAdapter(new platform_socket_io_1.IoAdapter(app));
    app.enableCors();
    const options = new swagger_1.DocumentBuilder()
        .setTitle('IdeaSpring.')
        .setDescription('API Endpoints for the IdeaSpring web app.')
        .setVersion('1.0')
        .addServer('api/v1', 'Version 1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    app.useLogger(['error', 'warn', 'log', 'verbose']);
    app.setGlobalPrefix('api/v1');
    await app.listen(3333);
}
bootstrap();
//# sourceMappingURL=main.js.map