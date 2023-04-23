import './App.css';
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { useEffect } from 'react';
import lax from 'lax.js'

const App = () => {
  useEffect(() => {
    gsap.registerPlugin(PixiPlugin, MotionPathPlugin);
    lax.init()
  })

  const animation = () => {
    gsap.to(".box", { scale: 10 })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="box"></div>
        <button onClick={animation}>Click</button>
      </header>
      <div className="lax lax_preset_fadeIn:50:100 lax_preset_spin"></div>
    </div>
  );
}

export default App;
