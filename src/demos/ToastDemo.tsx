import { useToast } from "../components/Toast/useToast";

const ToastDemo = () => {
  const { showToast } = useToast();

  return (
    <div className="space-x-5 flex justify-center items-center h-screen">
      <button onClick={() => showToast("Saved successfully", "success")}>
        Success
      </button>
      <button onClick={() => showToast("This is a warning", "warning")}>
        Warning
      </button>
      <button onClick={() => showToast("Just FYI", "info")}>Info</button>
      <button onClick={() => showToast("Something went wrong", "error")}>
        Error
      </button>
    </div>
  );
};

export default ToastDemo;
