'use client';

import ArrowIcon from '@/assets/arrow-right.svg';
import Star from '@/assets/star.png';
import Spring from '@/assets/spring.png';
import Image from 'next/image';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Fade } from 'react-awesome-reveal';

export const CallToAction = () => {
	useEffect(() => {
		Aos.init({
			duration: 1000,
			once: false,
		});
	}, []);

	return (
		<section className='text-center justify-center bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#D2DCFF_0%,#FFFFFF_100%)]'>
			<div className='py-[134px] container'>
				<div className='section-heading'>
					<Fade>
						<h2 className='section-title mt-5 relative'>
							Sign up for free today
						</h2>

						{/* Изображение звезды */}
						<Image
							data-aos='fade-right'
							src={Star}
							alt='Star'
							className='sm:hidden md:absolute md:block md:w-[362px] md:h-[362px] md:-left-[180px] md:-bottom-[-330px] lg:-left-[20px] lg:bottom-[400px]'
							draggable='false'
						/>

						<p className='section-description mt-5 text-lg tracking-tighter text-[#010D3E]'>
							Celebrate the joy of accomplishment with an app designed to track
							your progress and motivate your efforts.
						</p>

						{/* Изображение спирали */}
						<Image
							src={Spring}
							alt='Spring'
							className='hidden md:block md:absolute md:w-[363px] md:h-[363px] md:-right-[150px] md:-bottom-[-340px] lg:-right-[-30px] lg:bottom-[320px]'
							draggable='false'
						/>

						<div className='flex gap-1 items-center justify-center mt-[30px]'>
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
			</div>
		</section>
	);
};
