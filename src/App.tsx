import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";

function App() {

  // 🔥 Load from localStorage
  const [insta, setInsta] = useState(() => {
    const saved = localStorage.getItem("insta");
    return saved ? Number(saved) : 10;
  });

  const [showToast, setShowToast] = useState(false);

  // 🔥 Save when insta changes
  useEffect(() => {
    localStorage.setItem("insta", insta.toString());
  }, [insta]);

  const resetAll = () => {
    setInsta(0);
    localStorage.removeItem("insta");

    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="layout">

      <h1>Instagram Dashboard</h1>

      <h2>Total Follower: {insta}</h2>

      <button onClick={resetAll}>Reset</button>

      <div className="container">
        <Card
          name="Instagram"
          count={insta}
          setCount={setInsta}
        />
      </div>

      {showToast && (
        <div className="toast">
          Reset Successful ✅
        </div>
      )}

    </div>
  );
}

export default App;