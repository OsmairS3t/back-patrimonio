import { Request, Response } from 'express';
import { prismaClient } from '../database';

export class LocalController {
    async list(request: Request, response: Response) {
        const localController = await prismaClient.local.findMany()
        return response.json(localController)
    }

    async handle(request: Request, response: Response) {
        const { descricao, filial } = request.body
        const localController = await prismaClient.local.create({
            data: {
                descricao,
                filial
            }
        })
        return response.json(localController)
    }

    async update(request: Request, response: Response) {
        const { id, descricao, filial } = request.body
        const localController = await prismaClient.local.update({
            data: {
                descricao,
                filial
            },
            where: {
                id: id
            }
        })
        return response.json(localController)
    }

    async delete(request: Request, response: Response) {
        const { id } = request.body
        const localController = await prismaClient.local.delete({
            where: {
                id: id
            }
        })
        return response.json(localController)
    }
}