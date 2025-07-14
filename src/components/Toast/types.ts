export type ToastType = "info" | "warning" | "success" | "error";

export interface Notification {
  id: number;
  type: ToastType;
  message: string;
}

export type ToastPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center";
