import { Request, Response } from 'express';
import { prismaClient } from '../database';

export class MotivoController {
    async list(request: Request, response: Response) {
        const motivoController = prismaClient.motivo.findMany()
        response.json(motivoController)
    }
}