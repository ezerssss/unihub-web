import React from 'react';
import PrimaryButton from './components/PrimaryButton';
import Image from 'next/image';

function Hero() {
	return (
		<div className="flex flex-col items-center">
			<h1 className="mx-12 mt-12 text-center text-2xl font-bold text-primary-400 sm:mx-24 sm:text-5xl sm:leading-normal">
				Making in-campus buying and selling easy
			</h1>
			<PrimaryButton className="mt-4">GET EARLY ACCESS</PrimaryButton>
			<Image
				alt="Mockup 1"
				className="mt-6 sm:h-fit sm:w-56"
				height={226}
				src="/mockup1.png"
				width={160}
			/>
			<p className="mx-20 mb-14 mt-6 text-center text-xs text-dark sm:mx-48 sm:text-base">
				Save <span className="text-primary-400">time</span> and{' '}
				<span className="text-primary-400">money</span> by connecting with
				fellow students in your campus.
			</p>
		</div>
	);
}

export default Hero;
