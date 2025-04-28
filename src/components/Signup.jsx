import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignup() {
    axios.post("http://localhost:5000/signup", { name, password })
      .then((res) => {
        alert(res.data.message) 
        if(res.data.success){
          
          navigate("/");
        } 
      })
      .catch(() => {
        alert("Server Error");
      });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
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
          onClick={handleSignup}
          className="w-full bg-green-500 hover:bg-[#F7C94C] text-white py-2 rounded"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center">
          Already have an account? <a href="/" className="text-blue-500">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
