import { Router } from 'express';
import {
  criarSolicitacaoPalestra,
  obterPalestraPorProtocolo,
  editarSolicitacaoPalestra,
  cancelarSolicitacaoPalestra
} from '../controladores/palestraControlador.js';

const router = Router();
router.post('/', criarSolicitacaoPalestra);
router.get('/:protocolo', obterPalestraPorProtocolo);
router.put('/:protocolo', editarSolicitacaoPalestra);
router.post('/:protocolo/cancelar', cancelarSolicitacaoPalestra);
export default router;
