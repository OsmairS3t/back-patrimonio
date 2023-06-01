import { Request, Response } from 'express';
import { prismaClient } from '../database';

export class AtivoController {
    async list(request: Request, response: Response) {
        const ativoController = await prismaClient.ativo.findMany({
            include: {
                centrocusto: true,
                marca: true,
                subgrupo: true
            }
        })
        return response.json(ativoController)
    }

    async handle(request: Request, response: Response) {
        const { codigo,
            status,
            descricao,
            aquisicao,
            valor_aquisicao,
            valor_atual,
            depreciacao,
            codsubgrupo,
            codcentrocusto,
            codmarca } = request.body
        const strCodigo = codigo.padStart(6, '0')
        const ativoController = await prismaClient.ativo.create({
            data: {
                codigo: strCodigo,
                status,
                descricao,
                aquisicao,
                valor_aquisicao,
                valor_atual,
                depreciacao,
                codsubgrupo,
                codcentrocusto,
                codmarca
            }
        })
        return response.json(ativoController)
    }

    async update(request: Request, response: Response) {
        const { id,
            codigo,
            status,
            descricao,
            aquisicao,
            valor_aquisicao,
            valor_atual,
            depreciacao,
            codsubgrupo,
            codcentrocusto,
            codmarca } = request.body
        const strCodigo = codigo.padStart(6, '0')
        const ativoController = await prismaClient.ativo.update({
            data: {
                codigo: strCodigo,
                status,
                descricao,
                aquisicao,
                valor_aquisicao,
                valor_atual,
                depreciacao,
                codsubgrupo,
                codcentrocusto,
                codmarca
            },
            where: {
                id: id
            }
        })
        return response.json(ativoController)
    }

    async delete(request: Request, response: Response) {
        const { id } = request.body
        const ativoController = await prismaClient.ativo.delete({
            where: {
                id: id
            }
        })
        return response.json(ativoController)
    }

}