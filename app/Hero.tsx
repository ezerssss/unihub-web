import React from 'react';
import Image from 'next/image';

function Hero() {
	return (
		<section className="hero grid px-12 text-center md:px-32 lg:text-left xl:px-56">
			<h1 className="hero_title mx-auto mt-12 max-w-[540px] text-2xl font-bold text-primary-400 sm:text-5xl sm:leading-normal lg:mx-0">
				Making in-campus buying and selling easy
			</h1>
			<p className="hero_description mx-auto my-6 max-w-[415px] text-xs text-dark text-primary-400 sm:text-base lg:mx-0 lg:-mt-20">
				Save <span>time</span> and <span>money</span> by connecting with fellow
				students in your campus.
			</p>
			<button className="hero_button mx-auto mt-4 block h-10 w-40 rounded-md bg-secondary-100 text-xs font-semibold text-primary-400 sm:h-12 sm:w-52 sm:text-base md:mt-12 lg:mx-0 lg:-mt-28">
				GET EARLY ACCESS
			</button>
			<div className="hero_image">
				<Image
					alt="Mockup 1"
					className="mx-auto mt-12 w-28 sm:w-56 lg:float-right lg:mt-0 lg:w-72"
					height={557}
					src="/mockup1.png"
					width={275}
				/>
			</div>
		</section>
	);
}

export default Hero;
