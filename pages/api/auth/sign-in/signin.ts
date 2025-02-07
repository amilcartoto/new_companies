import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'development_key'; // Usamos la misma clave para verificar

// Función para verificar el token
const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded; // Si el token es válido, decodificamos y devolvemos los datos
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

// Middleware para verificar el token en las rutas protegidas
export default function protectedRoute(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1]; // Obtenemos el token desde el encabezado

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = verifyToken(token); // Verificamos el token
    req.user = decoded; // Guardamos la información del usuario en la solicitud
    next(); // Continuamos con la solicitud
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}
