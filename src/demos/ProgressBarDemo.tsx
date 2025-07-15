import React from "react";
import { ProgressBar } from "../components/ProgressBar/ProgressBar";

export const ProgressBarDemo: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        Progree Bar 🚀
      </h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Click the buttons below to start a progress bar. Only three progress
        bars can be in loading state ata time.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <ProgressBar />
      </div>

      <footer className="mt-10 text-sm text-gray-400 text-center">
        Built with ❤️ using React, Tailwind, and Framer Motion
      </footer>
    </main>
  );
};
