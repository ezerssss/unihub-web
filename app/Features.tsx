import React from 'react';
import Image from 'next/image';

export default function Features() {
	return (
		<section>
			<div>
				<div className="mt-15 flex flex-col items-center justify-center lg:mt-16">
					<div>
						<p className="w-44 text-center font-sans text-xl font-medium text-dark sm:text-3xl">
							Features
						</p>
					</div>
					<hr className="h-1 w-44 bg-primary-400 opacity-50 sm:w-96 lg:w-5/12" />
				</div>
			</div>
			<div className="lg:items-aligned lg:mt-16 lg:flex lg:justify-evenly">
				<div className="items-aligned mt-7 flex justify-evenly sm:mt-14 lg:flex-col lg:justify-center">
					<Image
						alt="Mockup 2"
						className="lg:items-aligned w-28 sm:w-56 lg:ml-2 lg:w-64"
						height={226}
						src="/mockup2.png"
						width={111.51}
					/>
					<div className="w-40 self-center sm:w-72">
						<p className="items-aligned justify-center text-center text-xs text-primary-400 sm:text-2xl lg:my-3 lg:mr-4 lg:mt-10">
							Meetups made easy
						</p>
					</div>
				</div>
				<div className="items-aligned mt-14 flex flex-row-reverse justify-evenly sm:mt-11 lg:flex-col lg:justify-center">
					<Image
						alt="Mockup 3"
						className="lg:items-aligned w-28 sm:w-56 lg:ml-2 lg:w-64"
						height={226}
						src="/mockup3.png"
						width={111.51}
					/>
					<div className="w-40 self-center sm:w-72">
						<p className="items-aligned justify-center text-center text-xs text-primary-400 sm:text-2xl lg:mr-4 lg:mt-10">
							Selling made simple
						</p>
					</div>
				</div>
				<div className="items-aligned mt-14 flex justify-evenly sm:mt-11 lg:flex-col lg:justify-center">
					<Image
						alt="Mockup 4"
						className="lg:items-aligned w-28 sm:w-56 lg:ml-2 lg:w-64"
						height={557}
						src="/mockup4.png"
						width={275}
					/>
					<div className="w-40 self-center sm:w-72">
						<p className="items-aligned justify-center text-center text-xs text-primary-400 sm:text-2xl lg:mr-5 lg:mt-10">
							Campus exclusive
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
