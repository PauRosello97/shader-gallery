import ShaderCanvas from "@signal-noise/react-shader-canvas";
import shader from "./assets/shader";
import useWindowDimensions from "./hooks/window";
import Home from "./views/Home/Home";
import './App.css';

function App() {

  const { height, width } = useWindowDimensions();

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
