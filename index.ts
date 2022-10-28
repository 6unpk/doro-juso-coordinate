import {server} from "./src/server";
import {getAddressCoordinate} from "./src/controller/get-address";
import {HTTPMethods} from "fastify/types/utils";
import {Juso} from "./src/model/juso";

(async function injectController() {
    const instance = await server()
    const { method, path, router } = getAddressCoordinate;
    const { modelName, columns } = Juso;
    const JusoRepository = instance.sequelize.define(modelName, columns, {
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true
    })
    instance.route({
        method: method as HTTPMethods,
        url: path,
        handler: (request, reply) => router(request, reply, { JusoRepository })
    });
    instance.listen({port: 9537}, (err, address) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        console.log(`Server listening at ${address}`)
    });
})()
