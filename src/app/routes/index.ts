import { Request, Response, Router } from "express";

import { MarcaController } from "../controllers/marca";
import { CentroCustoController } from "../controllers/centrocusto";
import { GrupoController } from "../controllers/grupo";
import { SubGrupoController } from "../controllers/subgrupo";
import { LocalController } from "../controllers/local";
import { MotivoController } from "../controllers/motivo";
import { AtivoController } from "../controllers/ativo";

const routes = Router();
const marcaController = new MarcaController();
const centroCustoController = new CentroCustoController();
const grupoController = new GrupoController();
const subGrupoController = new SubGrupoController();
const localController = new LocalController();
const motivoController = new MotivoController();
const ativoController = new AtivoController();

routes.get('/', (req: Request, res: Response) => res.send('Inicital Route'));
//Marcas
routes.get('/marcas', marcaController.list);
routes.post('/marcas', marcaController.handle);
routes.put('/marcas', marcaController.update);
routes.delete('/marcas', marcaController.delete);

//Centro de custo
routes.get('/centrocusto', centroCustoController.list);
routes.post('/centrocusto', centroCustoController.handle);
routes.put('/centrocusto', centroCustoController.update);
routes.delete('/centrocusto', centroCustoController.delete);

//Grupos
routes.get('/grupos', grupoController.list);
routes.post('/grupos', grupoController.handle);
routes.put('/grupos', grupoController.update);
routes.delete('/grupos', grupoController.delete);
//SubGrupos
routes.get('/subgrupos', subGrupoController.list);

//Locais
routes.get('/locais', localController.list);

//Motivos
routes.get('/motivos', motivoController.list);

//Ativos
routes.get('/ativos', ativoController.list);

export { routes };