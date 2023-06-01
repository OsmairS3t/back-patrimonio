import { Request, Response } from 'express';
import { prismaClient } from '../database';

export class SubGrupoController {
    async list(request: Request, response: Response) {
        const subGrupoController = await prismaClient.subGrupo.findMany({
            include: {
                grupo: {
                    select: {
                        id: true,
                        descricao: true
                    }
                }
            },
            orderBy: {
                grupo: {
                    descricao: 'asc'
                }
            }
        })
        return response.json(subGrupoController)
    }

    async handle(request: Request, response: Response) {
        const { codgrupo, descricao } = request.body
        const subGrupoInclude = {
            codgrupo,
            descricao
        }
        try {
            const subGrupoController = await prismaClient.subGrupo.create({
                data: subGrupoInclude
            })
            return response.json(subGrupoController)
        } catch (error) {
            response.json(error)
        }
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
