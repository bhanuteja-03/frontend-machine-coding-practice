import { AnimatePresence } from "framer-motion";
import { ToastItem } from "./ToastItem";
import type { Notification, ToastPosition } from "./types";

const positionClasses: Record<ToastPosition, string> = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
};

interface ToastContainerProps {
  toasts: Notification[];
  removeToast: (id: number) => void;
  position: ToastPosition;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  removeToast,
  position,
}) => {
  return (
    <div
      className={`fixed z-50 ${positionClasses[position]} flex flex-col items-end w-full sm:w-auto px-4`}
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} removeToast={removeToast} />
        ))}
      </AnimatePresence>
    </div>
  );
};
