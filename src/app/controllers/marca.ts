import { Request, Response } from "express";
import { prismaClient } from "../database";

export class MarcaController {
    async list(request: Request, response: Response) {
        const marcaController = await prismaClient.marca.findMany()
        response.json(marcaController)
    }

    async handle(request: Request, response: Response) {
        const { descricao } = request.body;
        const marcaController = await prismaClient.marca.create({
            data: {
                descricao
            }
        })
        response.json(marcaController)
    }

    async update(request: Request, response: Response) {
        const { id, descricao } = request.body;
        const marcaController = await prismaClient.marca.update({
            data: {
                descricao
            },
            where: {
                id: id
            }
        })
        response.json(marcaController)
    }

    async delete(request: Request, response: Response) {
        const { id } = request.body;
        const marcaController = await prismaClient.marca.delete({
            where: {
                id: id
            }
        })
        response.json(marcaController)
    }

}