import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// components
import InputField from "../components/InputField";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";

// assets
import Logo from "../assets/logo.png";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.password) {
      newErrors.password = "Senha é obrigatória";
    } else if (formData.password.length < 6) {
      newErrors.password = "Senha deve ter no mínimo 6 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login:", formData);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1115] text-white flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 mb-6">
          <div className="text-center mb-2">
            <img
              src={Logo}
              alt="Logo Casa Church"
              width={74}
              draggable={false}
              className="select-none mx-auto"
            />
            <h1 className="text-4xl font-bold m-0">Seja bem vindo</h1>
            <p className="text-white/60 text-sm">Faça login para continuar</p>
          </div>
          <div>
            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              icon={Mail}
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
            />

            <PasswordInput
              label="Senha"
              name="password"
              value={formData.password}
              showPassword={showPassword}
              onToggle={() => setShowPassword(!showPassword)}
              onChange={handleInputChange}
              placeholder="Mínimo 6 caracteres"
              error={errors.password}
            />

            <Button onClick={handleSubmit} fullWidth style={1} size="lg">
              Entrar
            </Button>

            <div className="text-center text-white/70 text-sm mt-4">
              Não tem uma conta?{" "}
              <button
                onClick={() => navigate("/registrar")}
                className="text-white hover:text-neutral-400 transition-colors font-medium cursor-pointer"
              >
                Registre-se
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
