import { ToastProvider } from "./components/Toast/ToastProvider";
import { ToastDemo } from "./demos/ToastDemo";

function App() {
  return (
    <ToastProvider position="top-right">
      <div className="p-4">
        <ToastDemo />
      </div>
    </ToastProvider>
  );
}

export default App;
