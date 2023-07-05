import React from 'react';
import Image from 'next/image';

export default function Navbar() {
	return (
		<nav className="h-14 w-screen bg-white shadow-lg shadow-gray-400 sm:h-20 lg:mb-12 lg:h-24">
			<div className="flex items-center justify-between sm:h-20 lg:h-24">
				<div className="mb-2.5 ml-3 mt-2.5 sm:mb-3 sm:ml-20 sm:mt-4 lg:mb-4 lg:ml-36 lg:mt-6">
					<Image
						alt="Logo"
						className="items-center justify-center sm:w-12 lg:hidden"
						height={36}
						src="/logo.png"
						width={36}
					/>
					<Image
						alt="FullLogo"
						className="hidden lg:block lg:h-16 lg:w-32 lg:items-center lg:justify-center"
						height={36}
						src="/Fulllogo.png"
						width={36}
					/>
				</div>
				<div className="mb-2.5 mr-3 mt-2.5 sm:mb-6 sm:mr-20 sm:mt-7 sm:flex sm:h-6 sm:w-56 sm:items-center sm:justify-between lg:mr-36  lg:mt-7 lg:w-72">
					<Image
						alt="Logo"
						className="items-center justify-center sm:hidden"
						height={36}
						src="/Sort.png"
						width={36}
					/>
					<span className="hidden text-primary-400 sm:block sm:text-sm lg:text-base">
						Home
					</span>
					<span className="hidden text-primary-400 sm:block sm:text-sm lg:text-base">
						Features
					</span>
					<span className="hidden text-primary-400 sm:block sm:text-sm lg:text-base">
						Founders
					</span>
				</div>
			</div>
		</nav>
	);
}
