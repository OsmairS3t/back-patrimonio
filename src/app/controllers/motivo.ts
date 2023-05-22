import { Request, Response } from 'express';
import { prismaClient } from '../database';

export class MotivoController {
    async list(request: Request, response: Response) {
        const motivoController = await prismaClient.motivo.findMany()
        return response.json(motivoController)
    }

    async handle(request: Request, response: Response) {
        const { descricao, explicacao } = request.body
        const motivoController = await prismaClient.motivo.create({
            data: {
                descricao,
                explicacao
            }
        })
        return response.json(motivoController)
    }

    async update(request: Request, response: Response) {
        const { id, descricao, explicacao } = request.body
        const motivoController = await prismaClient.motivo.update({
            data: {
                descricao,
                explicacao
            },
            where: {
                id: id
            }
        })
        return response.json(motivoController)
    }

    async delete(request: Request, response: Response) {
        const { id } = request.body
        const motivoController = await prismaClient.motivo.delete({
            where: {
                id: id
            }
        })
        return response.json(motivoController)
    }

}