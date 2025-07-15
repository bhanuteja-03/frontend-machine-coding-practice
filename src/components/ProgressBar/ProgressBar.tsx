import { useEffect, useState } from "react";
import { Bar } from "./Bar";

export const Statuses = {
  PENDING: "pending",
  FILLING: "filling",
  COMPLETED: "completed",
} as const;

type Status = (typeof Statuses)[keyof typeof Statuses];

type ProgressBarItem = {
  id: number;
  status: Status;
};

export const ProgressBar: React.FC = () => {
  const [bars, setBars] = useState<ProgressBarItem[]>([]);

  const addBar = () => {
    setBars((prev) => [...prev, { id: Date.now(), status: Statuses.PENDING }]);
  };

  const markComplete = (id: number) => {
    setBars((prev) =>
      prev.map((bar) =>
        bar.id === id ? { ...bar, status: Statuses.COMPLETED } : bar
      )
    );
  };

  useEffect(() => {
    const fillingCount = bars.filter(
      (b) => b.status === Statuses.FILLING
    ).length;
    if (fillingCount < 2) {
      const nextPending = bars.find((b) => b.status === Statuses.PENDING);
      if (nextPending) {
        setBars((prev) =>
          prev.map((bar) =>
            bar.id === nextPending.id
              ? { ...bar, status: Statuses.FILLING }
              : bar
          )
        );
      }
    }
  }, [bars]);
  console.log(bars);

  return (
    <div className="w-full max-w-md flex flex-col items-center">
      <button
        onClick={addBar}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Add Progress Bar
      </button>

      <div className="w-full">
        {bars.map((bar) => (
          <Bar
            key={bar.id}
            id={bar.id}
            start={bar.status !== Statuses.PENDING}
            onComplete={markComplete}
          />
        ))}
      </div>
    </div>
  );
};
