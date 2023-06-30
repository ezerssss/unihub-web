import React from 'react';

interface PrimaryButtonProps {
	className?: string;
	children?: React.ReactNode;
}

function PrimaryButton(props: PrimaryButtonProps) {
	const { className, children } = props;
	return (
		<button
			className={`h-10 w-40 rounded-md bg-secondary-100 text-xs font-semibold text-primary-400 sm:h-12 sm:w-52 sm:text-base ${className}`}
		>
			{children}
		</button>
	);
}

export default PrimaryButton;
