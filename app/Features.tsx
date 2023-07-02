import React from 'react';
import Image from 'next/image';

export default function Features() {
	return (
		<section>
			<div>
				<div className="flex flex-col items-center justify-center mt-15 lg:mt-16">
					<div>
						<p className="w-44 font-sans font-medium text-xl text-center text-dark tracking-widest sm:text-3xl">
							Features
						</p>
					</div>
					<hr className="bg-primary-400 h-1 w-44 opacity-50 sm:w-96 lg:w-5/12" />
				</div>
			</div>
			<div className="lg:flex lg:items-aligned lg:justify-evenly lg:mt-16">
				<div className="flex items-aligned justify-evenly mt-7 sm:mt-14 lg:flex-col lg:justify-center">
					<Image
						alt="Mockup 2"
						className="w-28 sm:w-56 lg:w-64 lg:items-aligned lg:ml-2"
						height={226}
						src="/mockup2.png"
						width={111.51}
					/>
					<div className="w-40 self-center sm:w-72">
						<p className="items-aligned justify-center text-primary-400 text-xs text-center tracking-widest sm:text-2xl lg:mt-10 lg:my-3 lg:mr-4">
							Meetups made easy
						</p>
					</div>
				</div>
				<div className="flex flex-row-reverse items-aligned justify-evenly mt-14 sm:mt-11 lg:flex-col lg:justify-center">
					<Image
						alt="Mockup 3"
						className="w-28 sm:w-56 lg:w-64 lg:items-aligned lg:ml-2"
						height={226}
						src="/mockup3.png"
						width={111.51}
					/>
					<div className="w-40 self-center sm:w-72">
						<p className="items-aligned justify-center text-primary-400 text-xs text-center tracking-widest sm:text-2xl lg:mt-10 lg:mr-4">
							Selling made simple
						</p>
					</div>
				</div>
				<div className="flex items-aligned justify-evenly mt-14 sm:mt-11 lg:flex-col lg:justify-center">
					<Image
						alt="Mockup 4"
						className="w-28 sm:w-56 lg:w-64 lg:items-aligned lg:ml-2"
						height={557}
						src="/mockup4.png"
						width={275}
					/>
					<div className="w-40 self-center sm:w-72">
						<p className="items-aligned justify-center text-primary-400 text-xs text-center tracking-widest sm:text-2xl lg:mt-10 lg:mr-5">
							Campus exclusive
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
