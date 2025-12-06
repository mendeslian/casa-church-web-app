import { ToastContainer } from "react-toastify";
import { X } from "lucide-react";

function CloseButton({ closeToast }) {
  return (
    <button
      onClick={closeToast}
      aria-label="Fechar"
      className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
    >
      <X size={18} color="#ffffff" strokeWidth={2} />
    </button>
  );
}

export default function ToastProvider() {
  return (
    <ToastContainer
      containerId="global"
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      toastClassName="bg-[#0f1115] text-white border border-white/10 rounded-lg p-4 min-h-0"
      bodyClassName="text-sm text-white p-0 pr-2 flex items-start gap-3"
      progressClassName="bg-white/50"
      closeButton={<CloseButton />}
      style={{
        width: "auto",
        maxWidth: "500px",
      }}
    />
  );
}
