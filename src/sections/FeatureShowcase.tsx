'use client';
import HyperText from '@/components/ui/hyper-text';
import Helix from '@/assets/cube-helix 1.svg';
import Cube from '@/assets/cube.svg';
import { Fade } from 'react-awesome-reveal';

export const FeatureShowcase = () => {
	return (
		<>
			<section className='bg-white items-center justify-center flex flex-col py-24'>
				<div className='container'>
					<Fade>
						<div className='section-heading'>
							<div className='flex justify-center'>
								<HyperText text='Everything you need' />
							</div>
							<h2 className='section-title mt-5'>
								Streamlined for easy management
							</h2>
							<p className='section-description mt-5 tracking-tight'>
								Enjoy customizable lists, team work tools, and smart tracking
								all in one place. Set tasks, get reminders, and see your
								progress simply and quickly.
							</p>
						</div>

						{/* Change direction for larger screens */}
						<div className='flex flex-col lg:flex-row py-10 gap-6 items-center lg:justify-center'>
							<div className='bg-white shadow-lg w-full max-w-[486px] p-6 rounded-lg'>
								<div className='flex flex-col items-center'>
									{<Helix />}
									<h3 className='text-center text-lg font-semibold mt-4 tracking-tight'>
										Integration ecosystem
									</h3>
									<p className='text-center text-gray-600 mt-2 tracking-tight'>
										Enhance your productivity by connecting with your favorite
										tools, keeping all your essentials in one place.
									</p>
								</div>
							</div>
							<div className='bg-white shadow-lg w-full max-w-[486px] p-6 rounded-lg'>
								<div className='flex flex-col items-center'>
									{<Cube />}
									<h3 className='text-center text-lg font-semibold mt-4 tracking-tight'>
										Goal setting and tracking
									</h3>
									<p className='text-center text-gray-600 mt-2 tracking-tight'>
										Define and track your goals, breaking down objectives into
										achievable tasks to keep your targets in sight.
									</p>
								</div>
							</div>
						</div>
					</Fade>
				</div>
			</section>
		</>
	);
};
