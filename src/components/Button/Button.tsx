import { Button as MUIButton } from '@mui/base';
import { FC, ButtonHTMLAttributes, ReactElement } from 'react';
import { z } from 'zod';
import { cva, VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import ButtonPropsSchema from './Button.schema.ts';

const buttonStyles = cva('px-4 py-2 rounded', {
  variants: {
    variant: {
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
    variant: 'primary',
    size: 'medium',
  },
});

type ButtonProps = z.infer<typeof ButtonPropsSchema> &
  VariantProps<typeof buttonStyles> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = (props): ReactElement => {
  const parsedProps = ButtonPropsSchema.parse(props);
  const { type, variant, size, className, children, ...rest } = parsedProps;

  console.log(clsx(buttonStyles({ variant, size })), variant);

  return (
    <MUIButton className={clsx(buttonStyles({ variant, size }), className)} type={type} {...rest}>
      {children}
    </MUIButton>
  );
};

export default Button;
