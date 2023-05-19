import { Request, Response } from "express";
import { prismaClient } from "../database";

export class CentroCustoController {
    async list(request: Request, response: Response) {
        const centroCustoController = await prismaClient.centroCusto.findMany();
        response.json(centroCustoController);
    }

    async handle(request: Request, response: Response) {
        const { descricao } = request.body;
        const centroCustoController = await prismaClient.centroCusto.create({
            data: {
                descricao
            }
        });
        response.json(centroCustoController);
    }

    async update(request: Request, response: Response) {
        const { id, descricao } = request.body;
        const centroCustoController = await prismaClient.centroCusto.update({
            data: {
                descricao
            },
            where: {
                id: id
            }
        });
        response.json(centroCustoController);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.body;
        const centroCustoController = await prismaClient.centroCusto.delete({
            where: {
                id: id
            }
        });
        response.json(centroCustoController);
    }
}