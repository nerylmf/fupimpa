import Sketch from "react-p5";

export function Expectativa(props){
   

    const setup = (p5, canvasParentRef) => {
		p5.createCanvas(10, 10).parent(canvasParentRef);
		p5.pixelDensity(1);
	};

	const draw = (p5) => {		
		p5.background(0);
		//p5.ellipse(50, 50, 70, 70);

		p5.loadPixels();
		//pixels = p5.pixels;
		props.setExpectativa(p5.pixels);

		p5.noLoop();
			
	};

    return(
        <Sketch setup={setup} draw={draw}/>
    );
}
