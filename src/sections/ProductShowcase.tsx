'use client';

import productImage from '@/assets/product-image.png';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';
import HyperText from '@/components/ui/hyper-text';
import Image from 'next/image';
import { useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import 'aos/dist/aos.css';
import Aos from 'aos';
import ShowcaseCard from '@/components/showcaseCard/ShowcaseCard';
import Leaf from '@/assets/leaf.svg';
import Target from '@/assets/target.svg';
import Secure from '@/assets/secure.svg';
import Notification from '@/assets/notification.svg';
import { div } from 'framer-motion/client';
import image from 'next/image';
import { title } from 'process';

export const ProductShowcase = () => {
	useEffect(() => {
		Aos.init({
			duration: 1000,
			once: true,
		});
	}, []);

	return (
		<section className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
			<Fade>
				<div className='container'>
					<div className='section-heading'>
						<div className='flex justify-center'>
							<HyperText text='Boost your productivity' />
						</div>
						<h2 className='section-title mt-5'>
							A more effective way to track progress
						</h2>
						<p className='section-description mt-5'>
							Effortlessly turn your ideas into a fully functional, responsive,
							SaaS website in just minutes with this template.
						</p>
					</div>
					<div className='relative'>
						<Image
							src={productImage}
							alt='Product Image'
							className='mt-10'
							draggable='false'
						/>
						<img
							src={pyramidImage.src}
							alt='Pyramid Image'
							height={262}
							width={262}
							className='hidden md:block absolute -right-36 -top-32'
							draggable='false'
							data-aos='zoom-out-down'
						/>
						<img
							src={tubeImage.src}
							alt='Tube image'
							height={248}
							width={248}
							className='hidden md:block absolute bottom-24 -left-36'
							draggable='false'
							data-aos='fade-right'
						/>
					</div>
					<div className='mt-10 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
						<Slide>
							<ShowcaseCard
								image={<Leaf />}
								title={'Integration ecosystem'}
								subTitle={
									'Track your progress and motivate your efforts every day.'
								}
							/>
							<ShowcaseCard
								image={<Target />}
								title={'Goal setting and tracking'}
								subTitle={
									'Set and track goals with manageable task breakdowns.'
								}
							/>
							<ShowcaseCard
								image={<Secure />}
								title={'Secure data encryption'}
								subTitle={'Ensure your data’s safety with top-tier encryption.'}
							/>
							<ShowcaseCard
								image={<Notification />}
								title={'Customizable notifications'}
								subTitle={'Get alerts on tasks and deadlines that matter most.'}
							/>
						</Slide>
					</div>
				</div>
			</Fade>
		</section>
	);
};
