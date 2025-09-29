import { ContactShadows } from '@react-three/drei'

const Lights = () => {
	return (
		<>
			<hemisphereLight intensity={2} groundColor="#fff" />
			<directionalLight intensity={4} position={[1, 2, 3]} />
			<directionalLight intensity={3} position={[-3, 2, -3]} />
			<ContactShadows
				position={[0, -2, 0]}
				blur={1}
				opacity={0.5}
				scale={20}
				color="#000"
			/>
		</>
	)
}

export default Lights
