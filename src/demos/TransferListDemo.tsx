import React from "react";
import { TransferList } from "../components/TransferList/TransferList";

export const TransferListDemo: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        Transfer List 🚀
      </h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Select items using the checkboxes and use the arrows to transfer them
        between lists.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <TransferList />
      </div>

      <footer className="mt-10 text-sm text-gray-400 text-center">
        Built with ❤️ using React, Tailwind, and Framer Motion
      </footer>
    </main>
  );
};
