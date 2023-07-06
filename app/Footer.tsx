import React from 'react';
import Image from 'next/image';

export default function Footer() {
	return (
		<footer className="h-24 lg:h-48">
			<div className="flex items-center justify-center py-6 sm:justify-between sm:px-36 sm:py-5 lg:px-80 lg:py-12">
				<Image
					alt="Unihub Icon Logo"
					className="mr-2 sm:hidden"
					height={48}
					src="/Iconlogo.png"
					width={48}
				/>
				<Image
					alt="Unihub Full Logo"
					className="hidden sm:block lg:w-48"
					height={64}
					src="/Fulllogo.png"
					width={128}
				/>
				<span className="text-xs text-dark lg:text-base">
					© 2023 UniHub. All Rights Reserved
				</span>
			</div>
		</footer>
	);
}
