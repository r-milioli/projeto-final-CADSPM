import { Router } from 'express';
import {
  criarSolicitacaoPalestra,
  obterPalestraPorProtocolo,
  editarSolicitacaoPalestra,
  cancelarSolicitacaoPalestra,
  listarPalestrasUsuario
} from '../controladores/palestraControlador.js';

const router = Router();
router.get('/', listarPalestrasUsuario);
router.post('/', criarSolicitacaoPalestra);
router.get('/:protocolo', obterPalestraPorProtocolo);
router.put('/:protocolo', editarSolicitacaoPalestra);
router.post('/:protocolo/cancelar', cancelarSolicitacaoPalestra);
export default router;
