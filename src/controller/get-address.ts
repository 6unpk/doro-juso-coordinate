import {FastifyReply, FastifyRequest} from "fastify";
import {AddressQuery} from "@mytypes/dto/get-address.type";

export const getAddressCoordinate = {
    method: 'GET',
    path: '/address/coordinate',
    router: async (req: FastifyRequest, reply: FastifyReply, repository: any) => {
        const {sigunguCode, roadName, mainNumber, subNumber} = req.query as AddressQuery;

        const findOne = await repository.JusoRepository.findOne({
            where: {
                sigunguCode,
                roadName,
                mainRoadNumber: mainNumber,
                ...(subNumber ? {
                    subRoadNumber: subNumber ?? undefined
                } : {})
            }
        })

        if (findOne === null) {
            reply.status(404).send({
                message: "NOT FOUND"
            })
        } else {
            reply.send({
                x: findOne.xCoordinate,
                y: findOne.yCoordinate
            });
        }
    }
}
