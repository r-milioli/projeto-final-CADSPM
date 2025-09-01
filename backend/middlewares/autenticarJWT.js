// middlewares/autenticarJWT.js
import jwt from 'jsonwebtoken';

export function autenticarJWT(req, res, next) {
  try {
    console.log('autenticarJWT - headers:', req.headers);
    const auth = req.headers['authorization'] || '';
    console.log('autenticarJWT - auth header:', auth);
    
    const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
    console.log('autenticarJWT - token:', token ? 'presente' : 'ausente');
    
    if (!token) {
      console.log('autenticarJWT - Token ausente, retornando 401');
      return res.status(401).json({ erro: 'Token ausente' });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log('autenticarJWT - payload:', payload);
    
    req.usuario = {
      id: payload.id,
      nome: payload.nome,
      email: payload.email,
      tipo_usuario: payload.tipo_usuario
    };
    console.log('autenticarJWT - usuário autenticado:', req.usuario);
    next();
  } catch (error) {
    console.error('autenticarJWT - erro:', error);
    return res.status(401).json({ erro: 'Token inválido' });
  }
}
