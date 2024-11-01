'use client';
import ArrowIcon from '@/assets/arrow-right.svg';
import cogImage from '@/assets/cog.png';
import cylinderImage from '@/assets/cylinder.png';
import noodleImage from '@/assets/noodle.png';
import { useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Не забудьте импортировать CSS
import HyperText from '@/components/ui/hyper-text';

export const Hero = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000, // продолжительность анимации
			once: true, // если true, анимация будет выполнена только один раз
		});
	}, []);

	return (
		<section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip'>
			<div className='container'>
				<div className='md:flex items-center'>
					<div className='md:w-[478px]'>
						<Fade>
							<HyperText duration={1000} text='Version 2.0 is here'></HyperText>

							<h1 className='text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6'>
								Pathway to productivity
							</h1>
							<p className='text-xl text-[#010D3E] tracking-tighter mt-6'>
								Celebrate the joy of accomplishment with an app designed to
								track your progress, motivate your efforts, and celebrate your
								successes.
							</p>
							<div className='flex gap-1 items-center mt-[30px]'>
								<button className='btn btn-primary hover:bg-black/80'>
									Get for free
								</button>
								<button className='btn btn-text gap-1'>
									<span>Learn more</span>
									<ArrowIcon className='h-5 w-5' draggable='false' />
								</button>
							</div>
						</Fade>
					</div>
					<div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
						{/* AOS */}
						<img
							src={cogImage.src}
							alt='Cog image'
							className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0'
							draggable='false'
							data-aos='fade-down'
						/>
						<img
							src={cylinderImage.src}
							width={220}
							height={220}
							alt='Cylinder image'
							className='hidden md:block -top-8 -left-32 md:absolute'
							draggable='false'
							data-aos='fade-left'
						/>
						<img
							src={noodleImage.src}
							width={220}
							alt='Noodle image'
							className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]'
							draggable='false'
							data-aos='fade-right'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
