import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate()
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
       const user = result.user;

    localStorage.setItem("user", JSON.stringify(user));

      navigate("/home")
    } catch (error) {
    
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={handleGoogleLogin}
        className="flex items-center gap-3 bg-white border px-6 py-3 rounded-lg shadow hover:bg-gray-100"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          className="w-5 h-5"
        />
        Sign in with Google
      </button>
    </div>
  );
}