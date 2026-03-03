import { useState, useEffect } from "react";

type Props = {
  name: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

function Card({ name, count, setCount }: Props) {

  // Smooth number animation
  const [displayCount, setDisplayCount] = useState(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayCount((prev) => {
        if (prev < count) return prev + 1;
        if (prev > count) return prev - 1;
        return prev;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{displayCount}</p>

      <button className="inc-btn" onClick={() => setCount(count + 1)}>INCREASE</button>
      <button className="dec-btn" onClick={() => setCount(count - 1)}>DECREASE</button>
    </div>
  );
}

export default Card;