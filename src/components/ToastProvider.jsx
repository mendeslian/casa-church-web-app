import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { X } from "lucide-react";

function CloseButton({ closeToast }) {
  return (
    <button
      onClick={closeToast}
      aria-label="Fechar"
      className="text-white/90 hover:text-white transition-colors cursor-pointer absolute right-2"
    >
      <X size={16} />
    </button>
  );
}

export default function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      toastClassName="bg-[#0f1115] text-white border border-white/10"
      bodyClassName="text-sm"
      progressClassName="bg-white/50"
      closeButton={<CloseButton />}
    />
  );
}
