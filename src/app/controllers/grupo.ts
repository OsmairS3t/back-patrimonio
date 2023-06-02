import { Request, Response } from "express";
import { prismaClient } from "../database";

export class GrupoController {
    async list(request: Request, response: Response) {
        const grupoController = await prismaClient.grupo.findMany()
        return response.json(grupoController)
    }

    async handle(request: Request, response: Response) {
        const { descricao } = request.body;
        const grupoController = await prismaClient.grupo.create({
            data: {
                descricao
            }
        })
        return response.json(grupoController)
    }

    async update(request: Request, response: Response) {
        const { id, descricao } = request.body;
        const grupoController = await prismaClient.grupo.update({
            data: {
                descricao
            },
            where: {
                id: id
            }
        })
        return response.json(grupoController)
    }

    async delete(request: Request, response: Response) {
        const { id } = request.body;
        try {
            const grupoController = await prismaClient.grupo.delete({
                where: {
                    id: id
                }
            });
            return response.json(grupoController);
        } catch (error) {
            console.log(error)
        }
    }
}