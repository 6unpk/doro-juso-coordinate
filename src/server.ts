import fastify, {FastifyInstance} from 'fastify'
import {DataTypes, Sequelize} from "sequelize";

export const server: () => Promise<FastifyInstance> = (async () => {
    const server: FastifyInstance = await fastify();

    const sequelize = new Sequelize('', '', '', {
        dialect: 'sqlite',
        storage: './db/doro-juso.db',
    });

    await server.decorate('sequelize', sequelize);

    return server
})
