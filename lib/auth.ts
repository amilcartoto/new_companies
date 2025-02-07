import jwt from 'jsonwebtoken';

// Asegúrate de que la clave secreta esté disponible en tus variables de entorno
const SECRET_KEY = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Clave secreta predeterminada

// Función para generar un token con un email o una clave proporcionada
const generateToken = (email: string, key: string = SECRET_KEY) => {
  if (!email) {
    throw new Error('Email is required for generating token');
  }

  try {
    const token = jwt.sign({ email }, key, { expiresIn: '1h' }); // Firmar el token con la clave proporcionada
    return token;
  } catch (error) {
    console.error('Error generating token:', error);
    throw error; // Re-lanzar el error para manejarlo en otra parte si es necesario
  }
};

export default generateToken;
