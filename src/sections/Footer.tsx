import FooterLogo from '@/assets/FooterLogo.svg';
import X from '@/assets/Socials-5.svg';
import Instagram from '@/assets/Socials.svg';
import Pinterest from '@/assets/Socials-4.svg';
import LinkedIn from '@/assets/Socials-2.svg';
import TikTok from '@/assets/Socials-3.svg';
import YouTube from '@/assets/Socials-1.svg';

export const Footer = () => {
	return (
		<section className='bg-black text-white py-[40px]'>
			<div className='container'>
				<div className='flex flex-col md:flex-row md:justify-between'>
					{/* Логотип и текст слева */}
					<div className='w-full md:w-[240px] flex flex-col justify-around'>
						<FooterLogo />
						<p className='text-[#BCBCBC] mt-[20px]'>
							Effortlessly turn your ideas into a fully functional, responsive,
							no-code SaaS website.
						</p>
						<div className='mt-[40px] md:mt-[115px] flex gap-[13px]'>
							<a href='#'>{<X />}</a>
							<a href='#'>{<Instagram />}</a>
							<a href='#'>{<Pinterest />}</a>
							<a href='#'>{<LinkedIn />}</a>
							<a href='#'>{<TikTok />}</a>
							<a href='#'>{<YouTube />}</a>
						</div>
					</div>

					{/* Навигационные блоки справа */}
					<div className='grid grid-cols-2 gap-6 mt-8 md:mt-0 md:grid-cols-4'>
						{/* Product Section */}
						<div>
							<h3 className='font-bold text-lg tracking-tight'>Product</h3>
							<ul className='mt-4 space-y-2 text-[#7B7B7B]'>
								<li>
									<a href='#'>Features</a>
								</li>
								<li>
									<a href='#'>Integrations</a>
								</li>
								<li>
									<a href='#'>Updates</a>
								</li>
								<li>
									<a href='#'>FAQ</a>
								</li>
								<li>
									<a href='#'>Pricing</a>
								</li>
							</ul>
						</div>

						{/* Company Section */}
						<div>
							<h3 className='font-bold text-lg tracking-tight'>Company</h3>
							<ul className='mt-4 space-y-2 text-[#7B7B7B]'>
								<li>
									<a href='#'>About</a>
								</li>
								<li>
									<a href='#'>Blog</a>
								</li>
								<li>
									<a href='#'>Careers</a>
								</li>
								<li>
									<a href='#'>Manifesto</a>
								</li>
								<li>
									<a href='#'>Press</a>
								</li>
								<li>
									<a href='#'>Contact</a>
								</li>
							</ul>
						</div>

						{/* Resources Section */}
						<div>
							<h3 className='font-bold text-lg tracking-tight'>Resources</h3>
							<ul className='mt-4 space-y-2 text-[#7B7B7B]'>
								<li>
									<a href='#'>Examples</a>
								</li>
								<li>
									<a href='#'>Community</a>
								</li>
								<li>
									<a href='#'>Guides</a>
								</li>
								<li>
									<a href='#'>Docs</a>
								</li>
							</ul>
						</div>

						{/* Legal Section */}
						<div>
							<h3 className='font-bold text-lg tracking-tight'>Legal</h3>
							<ul className='mt-4 space-y-2 text-[#7B7B7B]'>
								<li>
									<a href='#'>Privacy</a>
								</li>
								<li>
									<a href='#'>Terms</a>
								</li>
								<li>
									<a href='#'>Security</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
