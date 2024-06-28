import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const buttonStyles = cva('px-4 py-2 rounded', {
  variants: {
    color: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-gray-500 text-black',
    },
    size: {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'medium',
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & {
  className?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ color, size, className, children }) => (
  <button className={clsx(buttonStyles({ color, size }), className)}>{children}</button>
);

export default Button;
