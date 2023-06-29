import React from 'react';
import PrimaryButton from './components/PrimaryButton';
import Image from 'next/image';

function Hero() {
	return (
		<div className="flex flex-col items-center">
			<h1 className="text-primary-400 text-2xl font-bold text-center sm:text-5xl mt-12 mx-12 sm:mx-24 sm:leading-normal">
				Making in-campus buying and selling easy
			</h1>
			<PrimaryButton className="mt-4">GET EARLY ACCESS</PrimaryButton>
			<Image
				alt="Mockup 1"
				className="mt-6 sm:w-56 sm:h-fit"
				height={226}
				src="/mockup1.png"
				width={160}
			/>
			<p className="text-dark text-center text-xs mx-20 mt-6 mb-14 sm:text-base sm:mx-48">
				Save <span className="text-primary-400">time</span> and{' '}
				<span className="text-primary-400">money</span> by connecting with
				fellow students in your campus.
			</p>
		</div>
	);
}

export default Hero;
