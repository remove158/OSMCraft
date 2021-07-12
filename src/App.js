import React from "react";
import { Canvas } from "react-three-fiber";
import { Physics } from "use-cannon";
import { Sky } from "drei";
import "./App.css";
import { Ground } from "./Components/Ground";
import { Player } from "./Components/Player";
import { Cube } from "./Components/Cube";
function App() {
	return (
		<Canvas shadowMap sRGB>
			<Sky sunPosition={[100, 20, 100]} />
			<ambientLight intensity={0.25} />
			<pointLight castShadow intensity={0.7} position={[100, 100, 100]} />
			<Physics gravity={[0, -30, 0]}>
				<Ground position={[0, 0.5, 0]} />
				<Player position={[0, 3, 10]} />
				<Cube position={[0, 1, 0]} type="wood" />
				<Cube position={[0, 2, 0]} type="dirt" />
				<Cube position={[0, 3, 0]} type="glass" />
				<Cube position={[0, 4, 0]} type="log" />
				<Cube position={[0, 5, 0]} type="grass" />
			</Physics>
		</Canvas>
	);
}

export default App;
