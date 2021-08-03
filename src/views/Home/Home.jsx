import ShaderCanvas from "@signal-noise/react-shader-canvas";
import shader from "../../assets/shader";
import useWindowDimensions from "../../hooks/window";
import './Home.css';

function Home() {

    const { height, width } = useWindowDimensions();

    const uniforms = {
        u_initial_time: new Date().getTime() / 1000000000
    };

    return (
        <div className="Home">
            <ShaderCanvas
                width={height}
                height={height}
                fragShader={shader}
                uniforms={uniforms}
            />
        </div>
    );
}

export default Home;
