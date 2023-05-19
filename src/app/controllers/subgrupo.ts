import { Request, Response } from 'express';
import { prismaClient } from '../database';

export class SubGrupoController {
    async list(request: Request, response: Response) {
        const subGrupoController = prismaClient.subGrupo.findMany()
        response.json(subGrupoController)
    }
}