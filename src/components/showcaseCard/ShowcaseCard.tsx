import React, { ReactNode } from 'react';
import Arrow from '@/assets/arrow-right.svg';

type Props = {
	title: string;
	subTitle: string;
	image: ReactNode;
};

const ShowcaseCard = ({ title, subTitle, image }: Props) => {
	return (
		<div className='flex flex-col items-center justify-center gap-4 p-6 text-center max-w-xs mx-auto'>
			<div className='text-2xl'>{image}</div>
			<h3 className='text-xl font-semibold text-black tracking-tight'>
				{title}
			</h3>
			<p className='text-gray-600 tracking-tight'>{subTitle}</p>
			<button className='text-sm font-medium text-black flex items-center gap-1 mt-2'>
				Learn more
				<Arrow className='w-4 h-4' />
			</button>
		</div>
	);
};

export default ShowcaseCard;
