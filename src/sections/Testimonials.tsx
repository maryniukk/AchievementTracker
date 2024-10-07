import avatar1 from '@/assets/avatar-1.png';
import avatar2 from '@/assets/avatar-2.png';
import avatar3 from '@/assets/avatar-3.png';
import avatar4 from '@/assets/avatar-4.png';
import avatar5 from '@/assets/avatar-5.png';
import avatar6 from '@/assets/avatar-6.png';
import avatar7 from '@/assets/avatar-7.png';
import avatar8 from '@/assets/avatar-8.png';
import avatar9 from '@/assets/avatar-9.png';
import HyperText from '@/components/ui/hyper-text';
import { div, map, img, h3, p } from 'framer-motion/client';
import image from 'next/image';
import { text } from 'stream/consumers';

const testimonials = [
	{
		text: 'As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.',
		imageSrc: avatar1.src,
		name: 'Jamie Rivera',
		username: '@jamietechguru00',
	},
	{
		text: "Our team's productivity has skyrocketed since we started using this tool. ",
		imageSrc: avatar2.src,
		name: 'Josh Smith',
		username: '@jjsmith',
	},
	{
		text: 'This app has completely transformed how I manage my projects and deadlines.',
		imageSrc: avatar3.src,
		name: 'Morgan Lee',
		username: '@morganleewhiz',
	},
	{
		text: 'I was amazed at how quickly we were able to integrate this app into our workflow.',
		imageSrc: avatar4.src,
		name: 'Casey Jordan',
		username: '@caseyj',
	},
	{
		text: 'Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.',
		imageSrc: avatar5.src,
		name: 'Taylor Kim',
		username: '@taylorkimm',
	},
	{
		text: 'The customizability and integration capabilities of this app are top-notch.',
		imageSrc: avatar6.src,
		name: 'Riley Smith',
		username: '@rileysmith1',
	},
	{
		text: 'Adopting this app for our team has streamlined our project management and improved communication across the board.',
		imageSrc: avatar7.src,
		name: 'Jordan Patels',
		username: '@jpatelsdesign',
	},
	{
		text: 'With this app, we can easily assign tasks, track progress, and manage documents all in one place.',
		imageSrc: avatar8.src,
		name: 'Sam Dawson',
		username: '@dawsontechtips',
	},
	{
		text: 'Its user-friendly interface and robust features support our diverse needs.',
		imageSrc: avatar9.src,
		name: 'Casey Harper',
		username: '@casey09',
	},
];

const firstTestimonials = testimonials.slice(0, 3);
const secondTestimonials = testimonials.slice(3, 7);
const thirdTestimonials = testimonials.slice(0, 9);

export const Testimonials = () => {
	return (
		<section className='bg-white py-12'>
			<div className='container mx-auto'>
				<div className='section-heading text-center'>
					<div className='flex justify-center'>
						<HyperText text='Testimonials' />
					</div>
					<h2 className='section-title mt-5'>What our users say</h2>
				</div>
				<div className='flex flex-wrap justify-center items-center mt-10 md:hidden'>
					{firstTestimonials.map(({ text, imageSrc, name, username }) => {
						return (
							<div
								className='bg-white shadow-lg w-[325px] rounded-3xl mt-3'
								key={username}
							>
								<div
									className=' 
                mx-auto flex flex-col p-5 '
								>
									<p className='mt-4 tracking-tight'>{text}</p>
									<div className='flex mt-4 items-center'>
										<img
											src={imageSrc}
											alt={name}
											className='w-[42px] h-[42px] rounded-full'
										/>
										<div className='flex flex-col'>
											<h4 className='font-bold ml-2'>{name}</h4>
											<span className='text-gray-500 ml-2 text-sm'>
												{username}
											</span>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div className='hidden md:grid grid-cols-1 py-12 sm:grid-cols-2 md:grid-cols-2 lg:hidden gap-6'>
					{secondTestimonials.map((testimonial, index) => (
						<div
							key={index}
							className='bg-white p-6 rounded-lg shadow-md rounded-3xl'
						>
							<div className='flex items-center mb-4'>
								<div className='flex'>
									<img
										draggable={false}
										src={testimonial.imageSrc}
										alt={testimonial.name}
										className='w-12 h-12 rounded-full mr-4'
									/>
									<div className='flex flex-col'>
										<h3 className='text-lg font-semibold'>
											{testimonial.name}
										</h3>
										<p className='text-sm text-gray-600'>
											{testimonial.username}
										</p>
									</div>
								</div>
							</div>
							<p className='text-gray-800 tracking-tight'>{testimonial.text}</p>
						</div>
					))}
				</div>

				<div className='hidden lg:grid grid-cols-1 py-12 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{thirdTestimonials.map((testimonial, index) => (
						<div
							key={index}
							className='bg-white p-6 rounded-lg shadow-md roundex-3xl'
						>
							<div className='flex items-center mb-4'>
								<div className='flex'>
									<img
										draggable={false}
										src={testimonial.imageSrc}
										alt={testimonial.name}
										className='w-12 h-12 rounded-full mr-4'
									/>
									<div className='flex flex-col'>
										<h3 className='text-lg font-semibold'>
											{testimonial.name}
										</h3>
										<p className='text-sm text-gray-600'>
											{testimonial.username}
										</p>
									</div>
								</div>
							</div>
							<p className='text-gray-800 tracking-tight'>{testimonial.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
