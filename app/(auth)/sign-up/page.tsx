"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState(""); // Estado para manejar errores
  const [loading, setLoading] = useState(false); // Estado para manejar la carga
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
  
    setLoading(true);
    setError(""); // Resetear error antes de cada intento
  
    try {
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      if (!res.ok) {
        // Si la API responde con error, obtenemos el texto en vez de JSON
        const errorText = await res.text();
        throw new Error(`Error: ${res.status} - ${errorText}`);
      }
  
      // Verificamos si hay contenido antes de intentar convertirlo a JSON
      const textData = await res.text();
      const data = textData ? JSON.parse(textData) : null;
  
      if (data?.token) {
        localStorage.setItem("token", data.token);
        router.push("/sign-in"); // 🔄 Redirigir a sign-in después del registro
      } else {
        throw new Error(data?.error || "Respuesta inválida del servidor");
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido");
      console.error("Error en el registro:", error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h1>
        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            placeholder="Nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Cargando..." : "Sign Up"}
          </button>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
}
