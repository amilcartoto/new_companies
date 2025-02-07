import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { generateToken } from '@/lib/auth'; // Asegúrate de importar tu función de generación de tokens


export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí puedes realizar la verificación de tu clave o cualquier otra lógica
    if (email && password) {
      try {
        // Genera el token con la clave proporcionada (por ejemplo, "development_key")
        const token = generateToken(email, 'development_key'); // Usa la clave que desees

        // Guarda el token en localStorage o como prefieras
        localStorage.setItem('token', token);

        // Redirige a la página de Dashboard o donde desees
        router.push('/dashboard');
      } catch (error) {
        setError('Error during sign-in');
        console.error('Sign-in error:', error);
      }
    } else {
      setError('Please provide both email and password');
    }
  };

  return (
    <div className="sign-in-page">
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
