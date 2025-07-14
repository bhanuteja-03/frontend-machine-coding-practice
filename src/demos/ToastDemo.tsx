import React from "react";
import { useToast } from "../components/Toast/useToast";

export const ToastDemo: React.FC = () => {
  const { showToast } = useToast();

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        Toast Notification System 🚀
      </h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Click one of the buttons below to trigger a toast. Each toast will
        auto-dismiss after 3 seconds or can be manually dismissed.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => showToast("Success! Action completed.", "success")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Success
        </button>
        <button
          onClick={() => showToast("FYI: Something informative.", "info")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Info
        </button>
        <button
          onClick={() => showToast("Careful! Check your input.", "warning")}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
        >
          Warning
        </button>
        <button
          onClick={() => showToast("Error! Something went wrong.", "error")}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Error
        </button>
      </div>

      <footer className="mt-10 text-sm text-gray-400 text-center">
        Built with ❤️ using React, Tailwind, and Framer Motion
      </footer>
    </main>
  );
};
