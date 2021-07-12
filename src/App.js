import { Physics } from "use-cannon";
import { Sky } from "drei";
import { Canvas } from "react-three-fiber";

import { Ground } from "./Components/Ground";
import { Player } from "./Components/Player";
function App() {
	return (
		<Canvas shadowMap sRGC>
			<Sky sunPosition={[100, 20, 100]} />
			<ambientLight intensity={0.25} />
			<pointLight castShadow intensity={0.7} position={[100, 100, 100]} />
			<Physics>
				<Ground position={[0, 0.5, 0]} />
				<Player position={[0, 3, 10]} />
			</Physics>
		</Canvas>
	);
}

export default App;
