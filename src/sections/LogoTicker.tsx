'use client';
import acmeLogo from '@/assets/logo-acme.png';
import quantumLogo from '@/assets/logo-quantum.png';
import echoLogo from '@/assets/logo-echo.png';
import celestialLogo from '@/assets/logo-celestial.png';
import pulseLogo from '@/assets/logo-pulse.png';
import apexLogo from '@/assets/logo-apex.png';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import Marquee from 'react-fast-marquee';

export const LogoTicker = () => {
	return (
		<div className='py-8 md:py-12 bg-white'>
			<div className='container'>
				<div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
					<div className='flex flex-none pr-14'>
						<Fade direction='down' triggerOnce>
							<Marquee>
								<Image
									src={acmeLogo}
									alt='Acme Logo'
									className='logo-ticker-image mx-4'
								/>
								<Image
									src={quantumLogo}
									alt='Quantum Logo'
									className='logo-ticker-image mx-4'
								/>
								<Image
									src={echoLogo}
									alt='Echo Logo'
									className='logo-ticker-image mx-4'
								/>
								<Image
									src={celestialLogo}
									alt='Celestial Logo'
									className='logo-ticker-image mx-4'
								/>
								<Image
									src={pulseLogo}
									alt='Pulse Logo'
									className='logo-ticker-image mx-4'
								/>
								<Image
									src={apexLogo}
									alt='Apex Logo'
									className='logo-ticker-image mx-4'
								/>
								<Image
									src={acmeLogo}
									alt='Acme Logo'
									className='logo-ticker-image mx-4'
								/>
								<Image
									src={quantumLogo}
									alt='Quantum Logo'
									className='logo-ticker-image mx-4'
								/>
								<Image
									src={echoLogo}
									alt='Echo Logo'
									className='logo-ticker-image mx-4'
								/>
								<Image
									src={celestialLogo}
									alt='Celestial Logo'
									className='logo-ticker-image mx-4'
								/>
								<Image
									src={pulseLogo}
									alt='Pulse Logo'
									className='logo-ticker-image mx-4'
								/>
								<Image
									src={apexLogo}
									alt='Apex Logo'
									className='logo-ticker-image mx-4'
								/>
							</Marquee>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	);
};
