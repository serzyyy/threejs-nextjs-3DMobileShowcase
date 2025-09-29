import { Html } from '@react-three/drei'
import models from '@/constants/models.json'

const Screen = ({ handleModel }: { handleModel: (model: IModel) => void }) => {
	return (
		<Html
			transform
			occlude="raycast"
			scale={0.2}
			position={[0.1, 0.08, 0.01]}
			rotation={[0, Math.PI / 2, 0]}
		>
			<section className="bg-white w-[300px] h-[650px] rounded-[40px] overflow-hidden flex flex-col items-center justify-between">
				<div className="bg-black rounded-[10px] w-[60px] h-[15px] mt-[5px]"></div>
				<section className="flex flex-col gap-[20px] items-center">
					<a
						className="font-bold font-mono text-[25px] select-none hover:opacity-70 text-center"
						target="_blank"
						href="https://github.com/AriyanMLZM"
					>
						Visit GitHub
						<img
							src="/images/github_profile.png"
							alt="Github Profile"
							className="w-full"
						></img>
					</a>
					<a
						className="font-bold font-mono text-[25px] select-none hover:opacity-70 text-center"
						target="_blank"
						href="https://www.youtube.com/watch?v=TtGYcrUBqYc"
					>
						Visit YouTube
						<img
							src="/images/thum.png"
							alt="youtube video"
							className="w-full"
						></img>
					</a>
				</section>
				<section className="flex gap-[10px] p-[20px] items-center justify-center">
					{models.map((model: IModel) => (
						<button
							className="h-[40px] w-[40px] hover:opacity-70 rounded-full"
							style={{ background: model.color }}
							type="button"
							title="Change Color"
							key={model.color}
							onClick={() => handleModel(model)}
						></button>
					))}
				</section>
			</section>
		</Html>
	)
}

export default Screen
