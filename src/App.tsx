import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import logo from "./instagram.png"

function App() {

  // toast notification

  

  // mode toggle

  const [dark,setDark] = useState(false);

  // 🔥 Load from localStorage
  const [insta, setInsta] = useState(() => {
    const saved = localStorage.getItem("insta");
    return saved ? Number(saved) : 0;
  });

  const [showToast, setShowToast] = useState(false);

  // 🔥 Save when insta changes
  useEffect(() => {
    localStorage.setItem("insta", insta.toString());
  }, [insta]);

 

    const resetAll = () => {
      setInsta(0);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 2000);
  };

  return (
    <div className={ dark ? "layout dark" : "layout"}>
      {/*logo */}


    <img src={logo} width="70" alt="Instagram logo" />

      <h1>Instagram Dashboard</h1>
      <button className="toggle-btn" onClick={()=> setDark(!dark)}>{ dark? "light mode": "dark mode"}</button>

      <h2>Total Follower: {insta}</h2>

      <button className="reset-btn" onClick={resetAll}>Reset</button>

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