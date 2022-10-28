import {FastifyReply, FastifyRequest} from "fastify";
import {GetAddressCoordinateQuery} from "@mytypes/dto/get-address.type";

export const getAddressCoordinate = {
    method: 'GET',
    path: '/address/coordinate',
    router: async (req: FastifyRequest, reply: FastifyReply, repository: any) => {
        const { sigunguCode, roadNumberCode, mainNumber, subNumber } = req.query as GetAddressCoordinateQuery;

        const findOne = await repository.JusoRepository.findOne({
            where: {
                sigunguCode,
            }
        })

        reply.send(findOne);
    }
}
