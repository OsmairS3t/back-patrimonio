import { Request, Response } from "express";
import { prismaClient } from "../database";

export class GrupoController {
    async list(request: Request, response: Response) {
        const grupoController = prismaClient.grupo.findMany()
        response.json(grupoController)
    }

    async handle(request: Request, response: Response) {
        const { descricao } = request.body;
        const grupoController = prismaClient.grupo.create({
            data: {
                descricao
            }
        })
        response.json(grupoController)
    }

    async update(request: Request, response: Response) {
        const { id, descricao } = request.body;
        const grupoController = prismaClient.grupo.update({
            data: {
                descricao
            },
            where: {
                id: id
            }
        })
        response.json(grupoController)
    }

    async delete(request: Request, response: Response) {
        const { id } = request.body;
        const grupoController = prismaClient.grupo.delete({
            where: {
                id: id
            }
        });
        response.json(grupoController);
    }

}