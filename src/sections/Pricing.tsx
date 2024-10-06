import HyperText from '@/components/ui/hyper-text';
import Tick from '@/assets/tick.svg';
import WhiteTick from '@/assets/white-tick.svg';

const pricingTiers = [
	{
		title: 'Free',
		monthlyPrice: 0,
		buttonText: 'Get started for free',
		popular: false,
		inverse: false,
		features: [
			'Up to 5 project members',
			'Unlimited tasks and projects',
			'2GB storage',
			'Integrations',
			'Basic support',
		],
	},
	{
		title: 'Pro',
		monthlyPrice: 9,
		buttonText: 'Sign up now',
		popular: true,
		inverse: true,
		features: [
			'Up to 50 project members',
			'Unlimited tasks and projects',
			'50GB storage',
			'Integrations',
			'Priority support',
			'Advanced support',
			'Export support',
		],
	},
	{
		title: 'Business',
		monthlyPrice: 19,
		buttonText: 'Sign up now',
		popular: false,
		inverse: false,
		features: [
			'Up to 5 project members',
			'Unlimited tasks and projects',
			'200GB storage',
			'Integrations',
			'Dedicated account manager',
			'Custom fields',
			'Advanced analytics',
			'Export capabilities',
			'API access',
			'Advanced security features',
		],
	},
];

type Props = {
	title: string;
	monthlyPrice: number;
	buttonText: string;
	popular: boolean;
	inverse: boolean;
	features: string[];
};

export const Pricing = () => {
	return (
		<section className='bg-white'>
			<div className='container'>
				<div className='section-heading'>
					<div className='flex justify-center'>
						<HyperText text='Boost your productivity' />
					</div>
					<h2 className='section-title mt-5'>
						A more effective way to track progress
					</h2>
					<p className='section-description mt-5'>
						Effortlessly turn your ideas into a fully functional, responsive
						SaaS website in just minutes with this template.
					</p>
				</div>

				<div className='py-12 grid grid-cols-1 lg:grid-cols-3 gap-6'>
					{pricingTiers.map((tier, index) => (
						<div
							key={index}
							className={`p-6 rounded-lg shadow-lg ${
								tier.popular ? 'bg-black text-white' : 'bg-white text-black'
							}`}
						>
							<div>
								<h5 className='text-[#6F6C90] pb-[34px] font-bold tracking-tighter'>
									{tier.title}
								</h5>
								<span className='text-5xl font-bold  mb-6'>
									${tier.monthlyPrice}
									<span className='text-sm text-[#6F6C90]'>/monthly</span>
								</span>
							</div>
							<button
								className={`mt-[34px] font-semibold ${
									tier.popular ? 'bg-white text-black' : 'bg-black text-white'
								} btn transition-colors duration-300 }`}
							>
								{tier.buttonText}
							</button>
							<ul className='mb-6 mt-[37px]'>
								{tier.features.map((feature, index) => (
									<li
										key={index}
										className={`mb-[23px] tracking-tight ${
											tier.inverse ? 'text-white' : 'text-black'
										}`}
									>
										<div className='flex items-center'>
											{tier.inverse ? (
												<WhiteTick className='w-4 h-4' />
											) : (
												<Tick className='w-4 h-4' />
											)}
											<span className='ml-4'>{feature}</span>
										</div>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
