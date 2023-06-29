import React from 'react';

interface PrimaryButtonProps {
  className?: string;
  children?: React.ReactNode;
}

function PrimaryButton(props: PrimaryButtonProps) {
  const { className, children} = props
  return (
    <button className={`text-primary-400 w-40 sm:w-52 h-10 sm:h-12 bg-secondary-100 text-xs sm:text-base font-semibold rounded-md ${className}`}>
      {children}
    </button>
  );
}

export default PrimaryButton;
