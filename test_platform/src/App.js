import "./App.css";
import React, { useEffect } from "react";
import kittenPic from './RGB.svg.png'

 function App() {
  const kitten = React.useRef(null);
  useEffect(() => {
    window.Caman(`#${kitten.current.id}`, function () {
      this.saturation(90)
      // this.curves('r', [0, 0], [180, 180], [120, 120], [0, 255]);
      // this.brightness(10);
      // this.contrast(30);
      // this.sepia(60);
      // this.saturation(-30);
      this.render();
    });
  }, [kitten.current]);


  return (
    <div className="App">
      <h2>Test Platform</h2>
     

  
    <div className="App">
      <img
        src={kittenPic}
        alt=""
        style={{ width: 200, height: 200 }}
      />
      <img
        id="kitten"
        ref={kitten}
        src={kittenPic}
        alt=""
        style={{ width: 200, height: 200 }}
      />
    </div>


    </div>
  );
}

export default App;
