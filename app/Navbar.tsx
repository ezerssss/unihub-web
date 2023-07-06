import React from 'react';
import Image from 'next/image';

export default function Navbar() {
	return (
		<nav className="h-14 bg-white shadow-lg shadow-gray-400 sm:h-20 lg:mb-12 lg:h-24">
			<div className="flex items-center justify-between px-3 py-2.5 sm:h-20 sm:px-20 sm:py-3 lg:h-24 lg:px-36 lg:py-6">
				<Image
					alt="Unihub Icon Logo"
					className="items-center justify-center sm:w-12 lg:hidden"
					height={36}
					src="/Iconlogo.png"
					width={36}
				/>
				<Image
					alt="Unihub Full Logo"
					className="hidden lg:block lg:h-16 lg:w-32 lg:items-center lg:justify-center"
					height={36}
					src="/Fulllogo.png"
					width={36}
				/>
				<div className="sm:flex sm:h-6 sm:w-56 sm:items-center sm:justify-between lg:w-72">
					<Image
						alt="Hamburger Icon"
						className="items-center justify-center sm:hidden"
						height={36}
						src="/Hamburger.png"
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
