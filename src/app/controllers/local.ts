import { Request, Response } from 'express';
import { prismaClient } from '../database';

export class LocalController {
    async list(request: Request, response: Response) {
        const localController = prismaClient.local.findMany()
        response.json(localController)
    }
}