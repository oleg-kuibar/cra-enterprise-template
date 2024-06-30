import { z } from 'zod';
import { ReactNode } from 'react';

const ButtonPropsSchema = z.object({
  type: z.enum(['button', 'submit', 'reset']).optional().default('button'),
  variant: z.enum(['primary', 'secondary']).optional().default('primary'),
  size: z.enum(['small', 'medium', 'large']).optional().default('medium'),
  className: z.string().optional(),
  children: z.custom<ReactNode>(),
});

export default ButtonPropsSchema;
