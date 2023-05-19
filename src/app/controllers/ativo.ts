import { Request, Response } from 'express';
import { prismaClient } from '../database';

export class AtivoController {
    async list(request: Request, response: Response) {
        const ativoController = prismaClient.ativo.findMany()
        response.json(ativoController)
    }
}