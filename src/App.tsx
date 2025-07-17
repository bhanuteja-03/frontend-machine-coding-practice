import { ToastProvider } from "./components/Toast/ToastProvider";
import { TransferListDemo } from "./demos/TransferListDemo";

function App() {
  return (
    <ToastProvider position="top-right">
      <div className="p-4">
        <TransferListDemo />
      </div>
    </ToastProvider>
  );
}

export default App;
