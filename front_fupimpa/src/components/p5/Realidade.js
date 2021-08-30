import { useContext } from "react";
import Sketch from "react-p5";
import { AtividadeContext } from "../pages/PaginaAtividade/PaginaAtividade";

export function Realidade(props){    

    const {code, setCode} = useContext(AtividadeContext);

    
    const code_instructions = new Function (code);
    
    


    //console.log(props.realidade);

    const setup = (p5, canvasParentRef) => {
		p5.createCanvas(100, 100).parent(canvasParentRef);
        p5.pixelDensity(1);
	};

	const draw = (p5) => {

		code_instructions();
        console.log(code);

		//p5.ellipse(x, y, 70, 70);
        p5.loadPixels();
        //props.setRealidade(p5.pixels);
        p5.noLoop();		
	};


    return(
        <Sketch setup={setup} draw={draw}/>
        
    );
}
