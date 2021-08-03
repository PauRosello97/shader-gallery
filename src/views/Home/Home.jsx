import { useEffect, useState } from 'react';
import ShaderCanvas from "@signal-noise/react-shader-canvas";
import galleryApi from '../../api/galleryApi';
import useWindowDimensions from "../../hooks/window";
import './Home.css';

function Home() {
    const { height, width } = useWindowDimensions();
    const [shaders, setShaders] = useState([]);
    const [selectedShaderNumber, setSelectedShaderNumber] = useState(0);
    const [selectedShader, setSelectedShader] = useState("");

    useEffect(() => {
        galleryApi.getShaders().then(res => setShaders(res));
    }, []);

    useEffect(() => {
        if (shaders && shaders[selectedShaderNumber]) {
            setSelectedShader(shaders[selectedShaderNumber].code);
        }
    }, [selectedShaderNumber, shaders]);

    const uniforms = {
        u_initial_time: new Date().getTime() / 1000000000
    };

    const handleClickLeft = () => {
        if (selectedShaderNumber > 0) {
            setSelectedShaderNumber(selectedShaderNumber - 1);
        } else {
            setSelectedShaderNumber(shaders.length - 1);
        }
    }

    const handleClickRight = () => {
        console.log(selectedShaderNumber);
        setSelectedShaderNumber((selectedShaderNumber + 1) % shaders.length);
    }

    return (
        <div className="Home" >
            <div onClick={handleClickLeft} className="btn" />
            {shaders && <ShaderCanvas
                width={height}
                height={height}
                fragShader={selectedShader}
                uniforms={uniforms}
            />}
            <div onClick={handleClickRight} className="btn" />
        </div>
    );
}

export default Home;
