import {Sequelize} from "sequelize";
import {FastifyInstance, HookHandlerDoneFunction} from "fastify";

export function sequelizeDatasource(fastify: FastifyInstance, options: any) {
    const sequelize = new Sequelize(options);

    if (options.autoConnect) {
        return sequelize.authenticate().then(decorate)
    }

    decorate();

    return Promise.resolve();

    function decorate() {
        fastify.decorate(options.instacne, sequelize);
        fastify.addHook('onClose', (fastifyInstance: FastifyInstance, done: HookHandlerDoneFunction) => {
            sequelize.close()
                .finally(done);
        });
    }
}
