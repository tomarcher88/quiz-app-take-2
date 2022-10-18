import { useState } from "react";
import "./App.css";
import { Quiz } from "./components/Quiz";
import { WatchListContextProvider } from "./context/context";
function App() {
  return (
    <div className="bg-slate-800">
      <WatchListContextProvider>
        <Quiz />
      </WatchListContextProvider>
    </div>
  );
}

export default App;
