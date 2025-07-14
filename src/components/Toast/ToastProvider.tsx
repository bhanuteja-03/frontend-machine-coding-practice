import React, { createContext, useState, useCallback } from "react";
import { ToastContainer } from "./ToastContainer";
import type { Notification, ToastType, ToastPosition } from "./types";

interface ToastContextType {
  showToast: (message: string, type: ToastType) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);

export const ToastProvider: React.FC<{
  children: React.ReactNode;
  position?: ToastPosition;
}> = ({ children, position = "top-right" }) => {
  const [toasts, setToasts] = useState<Notification[]>([]);

  const showToast = (message: string, type: ToastType) => {
    const newToast: Notification = {
      id: Date.now(),
      type,
      message,
    };
    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer
        toasts={toasts}
        removeToast={removeToast}
        position={position}
      />
    </ToastContext.Provider>
  );
};
