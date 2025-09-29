import { useGLTF } from '@react-three/drei'

const Model = ({ url }: { url: string }) => {
	const { scene } = useGLTF(url)

	return (
		<mesh>
			<primitive object={scene} />
		</mesh>
	)
}

export default Model
