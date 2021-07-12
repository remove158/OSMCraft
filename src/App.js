import React from "react";
import { Canvas } from "react-three-fiber";
import { Physics } from "use-cannon";
import { Sky } from "drei";
import "./App.css";
import { Ground } from "./Components/Ground";
import { Player } from "./Components/Player";
import { Cube } from "./Components/Cube";
import { border, osm, randomTexture } from "./osmText";
function App() {
	return (
		<Canvas shadowMap sRGB>
			<Sky sunPosition={[100, 20, 100]} />
			<ambientLight intensity={0.25} />
			<pointLight castShadow intensity={0.3} position={[100, 100, 100]} />
			<Physics gravity={[0, -30, 0]}>
				<Ground position={[0, 0.5, 0]} />
				<Player position={[1, 3, 10]} />
				{osm.map((e, idx) => (
					<Cube
						position={[e[0], e[1] + 1, e[2]]}
						type={randomTexture[idx % 7]}
					/>
				))}
				{border.map((e) => (
					<Cube position={e} type={"glass"} />
				))}
			</Physics>
		</Canvas>
	);
}

export default App;
