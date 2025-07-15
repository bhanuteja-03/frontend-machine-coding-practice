import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BarProps {
  start: boolean;
  id: number;
  onComplete: (id: number) => void;
}

export const Bar: React.FC<BarProps> = ({ start, id, onComplete }) => {
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    let frame: number;
    if (start) {
      frame = requestAnimationFrame(() => setFilled(true));
    }
    return () => cancelAnimationFrame(frame);
  }, [start]);

  useEffect(() => {
    if (filled) {
      const timer = setTimeout(() => onComplete(id), 2000);
      return () => clearTimeout(timer);
    }
  }, [filled]);

  return (
    <div className="w-full h-3 rounded bg-gray-200 overflow-hidden border border-gray-400 mb-2">
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: filled && start ? "100%" : "0%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="h-full bg-green-500"
      />
    </div>
  );
};
