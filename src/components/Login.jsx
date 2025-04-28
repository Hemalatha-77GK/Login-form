import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    axios.post("http://localhost:5000/login", { name, password })
      .then((res) => {
        if (res.data.success) {
          alert(res.data.message);
         
        } else {
          alert(res.data.message);
          if(res.data.message.includes("Sign Up")){
          navigate("/signup");
          }
        }
      })
      .catch(() => {
        alert("Server Error");
      });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FCE3F7]">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <input 
          type="text" 
          placeholder="Name" 
          className="w-full p-2 mb-4 border rounded"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-2 mb-6 border rounded"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button 
          onClick={handleLogin}
          className="w-full bg-[#80668E] hover:bg-[#A873C6] text-white py-2 rounded"
        >
          Login
        </button>
        <p className="mt-4 text-center">
          Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
