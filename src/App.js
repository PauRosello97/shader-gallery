import ShaderCanvas from "@signal-noise/react-shader-canvas";

import shader from "./assets/shader";
import useWindowDimensions from "./hooks/window";
import './App.css';

function App() {

  const { height, width } = useWindowDimensions();

  return (
    <div className="App">
      <ShaderCanvas width={width} height={height} fragShader={shader} />
    </div>
  );
}

export default App;
