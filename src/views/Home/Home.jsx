import { useEffect, useState } from 'react';
import ShaderCanvas from "@signal-noise/react-shader-canvas";
import galleryApi from '../../api/galleryApi';
import shader from "../../assets/shader";
import Shader from "../../models/Shader";
import useWindowDimensions from "../../hooks/window";
import './Home.css';

function Home() {
    const { height, width } = useWindowDimensions();
    const [shaders, setShaders] = useState([]);
    const [selectedShaderNumber, setSelectedShaderNumber] = useState(0);
    const [selectedShader, setSelectedShader] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (shaders && shaders[selectedShaderNumber]) {
            setSelectedShader(shaders[selectedShaderNumber].code);
        }
    }, [selectedShader, shaders]);

    const fetchData = () => {
        console.log("fetch");
        galleryApi.getShaders().then(res => setShaders(res));
    }

    const uniforms = {
        u_initial_time: new Date().getTime() / 1000000000
    };

    return (
        <div className="Home">
            {shaders && <ShaderCanvas
                width={height}
                height={height}
                fragShader={selectedShader}
                uniforms={uniforms}
            />}
        </div>
    );
}

export default Home;
