import { useEffect } from "react";
import { motion } from "framer-motion";
import type { Notification } from "./types";

interface ToastItemProps {
  toast: Notification;
  removeToast: (id: number) => void;
}

const bgColorMap = {
  success: "bg-green-500",
  warning: "bg-orange-500",
  info: "bg-blue-400",
  error: "bg-red-500",
};

export const ToastItem: React.FC<ToastItemProps> = ({ toast, removeToast }) => {
  useEffect(() => {
    const timer = setTimeout(() => removeToast(toast.id), 3000);
    return () => clearTimeout(timer);
  }, [toast.id, removeToast]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      className={`w-full sm:w-72 px-4 py-3 rounded-md text-white flex justify-between items-center mb-2 shadow ${bgColorMap[toast.type]}`}
    >
      <span className="text-sm">{toast.message}</span>
      <button
        className="ml-4 text-lg font-bold"
        onClick={() => removeToast(toast.id)}
        aria-label={`Dismiss toast ${toast.id}`}
      >
        ×
      </button>
    </motion.div>
  );
};
