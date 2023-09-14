import { FC, ReactNode } from 'react';

const Loader: FC<{ show: boolean; icon: ReactNode; spin?: boolean; text?: string }> = ({
	show,
	icon,
	spin = false,
	text,
}) => {
	if (!show) return null;
	return (
		<>
			<div className={`animate-svg-stereo animate-spin z-[-1] block m-auto absolute top-[20px] right-[50px] `}>
				<div className={spin ? 'animate-spin' : ''}>{icon}</div>
				{text && <div className="text-center">{text}</div>}
			</div>
		</>
	);
};

export default Loader;
