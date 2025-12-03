import { useState } from "react";
import { Mail, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

// components
import InputField from "../components/InputField";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";

// assets
import Logo from "../assets/logo.png";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Nome é obrigatório";

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

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirme sua senha";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Registro:", formData);
      // Chamada à API de registro aqui
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
            <h1 className="text-4xl font-bold">Crie sua conta</h1>
            <p className="text-white/60 text-sm">Junte-se à nossa comunidade</p>
          </div>
          <div>
            <InputField
              label="Nome Completo"
              name="name"
              placeholder="Seu nome completo"
              icon={User}
              value={formData.name}
              onChange={handleInputChange}
              error={errors.name}
            />

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

            <PasswordInput
              label="Confirmar Senha"
              name="confirmPassword"
              value={formData.confirmPassword}
              showPassword={showConfirmPassword}
              onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
              onChange={handleInputChange}
              placeholder="Confirme sua senha"
              error={errors.confirmPassword}
            />

            <Button onClick={handleSubmit} fullWidth style={1} size="lg">
              Cadastrar
            </Button>

            <div className="text-center text-white/70 text-sm mt-4">
              Já tem uma conta?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-white hover:text-neutral-400 transition-colors font-medium cursor-pointer"
              >
                Faça login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
