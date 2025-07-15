import { ToastProvider } from "./components/Toast/ToastProvider";
import { ProgressBarDemo } from "./demos/ProgressBarDemo";

function App() {
  return (
    <ToastProvider position="top-right">
      <div className="p-4">
        <ProgressBarDemo />
      </div>
    </ToastProvider>
  );
}

export default App;
