import http from "http";
import {Sequelize} from "sequelize";

declare module 'fastify' {
    export interface FastifyInstance<
        HttpServer = http.Server,
        HttpRequest = http.IncomingMessage,
        HttpResponse = http.ServerResponse> {
        sequelize: Sequelize;
        repository: Record<string, any>;
    }
}
