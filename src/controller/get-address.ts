import {FastifyReply, FastifyRequest} from "fastify";
import {GetAddressBody, AddressQuery, SortQuery} from "@mytypes/dto/get-address.type";

export const getAddressCoordinate = {
    method: 'GET',
    path: '/address/coordinate',
    router: async (req: FastifyRequest, reply: FastifyReply, repository: any) => {
        const { sigunguCode, roadNumberCode, mainNumber, subNumber } = req.query as AddressQuery;

        const findOne = await repository.JusoRepository.findOne({
            where: {
                sigunguCode,
            }
        })

        reply.send({
            x: findOne.xCoordinate,
            y: findOne.yCoordinate
        });
    }
}

export const getRoadNumbersByRoadName = {
    method: 'GET',
    path: '/address/roadNumberOf/:roadName',
    router: async (req: FastifyRequest, reply: FastifyReply, repository: any) => {
        const { roadName } = req.params as { roadName: string};

    }
}

export const batchGetAddressCoordinate = {
    method: 'POST',
    path: 'address/coordinate/batch',
    router: async (req: FastifyRequest, reply: FastifyReply, respository: any) => {
        const { address } = req.body as GetAddressBody;
        const { sort } = req.query as SortQuery;

        if (address.length > 10)
            throw Error('')

    }
}
