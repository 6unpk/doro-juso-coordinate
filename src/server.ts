import fastify, {FastifyInstance} from 'fastify'
import {Sequelize} from "sequelize";
import fastifyCaching from "@fastify/caching";

export const server: () => Promise<FastifyInstance> = (async () => {
    const server: FastifyInstance = await fastify();

    const sequelize = new Sequelize('', '', '', {
        dialect: 'sqlite',
        storage: './db/doro-juso.db',
    });

    await server.decorate('sequelize', sequelize);

    server.register(
        fastifyCaching,
        {privacy: fastifyCaching.privacy.PRIVATE},
    );

    return server
})
