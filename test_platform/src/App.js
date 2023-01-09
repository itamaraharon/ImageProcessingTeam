import "./App.css";
import React, { useEffect } from "react";
import kittenPic from './RGB.svg.png'

 function App() {
  const kitten = React.useRef(null);
  useEffect(() => {
    window.Caman(`#${kitten.current.id}`, function () {
      this.threshold(100 );
      // this.reset()
      // this.hue(90)
      // this.curves('r', [0, 0], [120, 120], [180, 180], [255, 255]);
      // this.curves('g', [0, 0], [120, 60], [180, 100], [255, 100]);
      // this.curves('b', [0, 0], [120, 60], [180, 100], [255, 100]);
      // this.brightness(10);
      // this.contrast(30);
      // this.sepia(60);
      // this.saturation(0);
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
