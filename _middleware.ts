import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'development_key'; // Usamos la misma clave para verificar

// Función para verificar el token
const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded; // Si el token es válido, decodificamos y devolvemos los datos
  } catch {
    throw new Error('Invalid or expired token');
  }
};

// Middleware para verificar el token en las rutas protegidas
import { Request, Response, NextFunction } from 'express';

interface CustomRequest extends Request {
  user?: { id: string; name: string; email: string }; // Replace with the actual user type
}

export default function protectedRoute(req: CustomRequest, res: Response, next: NextFunction) {
  const token = req.headers['authorization']?.split(' ')[1]; // Obtenemos el token desde el encabezado

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = verifyToken(token); // Verificamos el token
    if (typeof decoded !== 'string' && 'id' in decoded && 'name' in decoded && 'email' in decoded) {
      req.user = decoded as { id: string; name: string; email: string }; // Guardamos la información del usuario en la solicitud
    } else {
      throw new Error('Invalid token payload');
    }
    next(); // Continuamos con la solicitud
  } catch {
    return res.status(401).json({ error: 'Invalid token' });
  }
}
