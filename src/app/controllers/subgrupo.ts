import { Request, Response } from 'express';
import { prismaClient } from '../database';

export class SubGrupoController {
    async list(request: Request, response: Response) {
        const subGrupoController = await prismaClient.subGrupo.findMany()
        return response.json(subGrupoController)
    }

    async handle(request: Request, response: Response) {
        const { codgrupo, descricao } = request.body
        const subGrupoController = await prismaClient.subGrupo.create({
            data: {
                codgrupo,
                descricao
            }
        })
        return response.json(subGrupoController)
    }

    async update(request: Request, response: Response) {
        const { id, codgrupo, descricao } = request.body
        const subGrupoController = await prismaClient.subGrupo.update({
            data: {
                codgrupo,
                descricao
            },
            where: {
                id: id
            }
        })
        return response.json(subGrupoController)
    }

    async delete(request: Request, response: Response) {
        const { id } = request.body
        const subGrupoController = await prismaClient.subGrupo.delete({
            where: {
                id: id
            }
        })
        return response.json(subGrupoController)
    }
}
