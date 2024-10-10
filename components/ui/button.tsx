import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'uppercase bg-primary text-background shadow hover:bg-[hsl(var(--hover))] active:bg-[hsl(var(--active))] focus:outline-none focus:ring focus:primary/80',
        secondary:
          'uppercase bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 active:bg-secondary-foreground/10 focus:outline-none focus:ring ring-secondary/50 focus:secondary/80',
        outline:
          'uppercase text-primary-foreground border border-primary bg-background shadow-sm hover:bg-primary/80 hover:text-primary-foreground active:bg-primary-foreground/10 focus:outline-none focus:ring focus:primary/80',
        link: 'text-terciary underline-offset-4 hover:underline',
        ghost:
          'uppercase text-primary-foreground hover:bg-[hsl(var(--primary))] hover:text-background active:bg-primary-foreground/10 focus:outline-none focus:ring focus:primary/80',
        destructive:
          'uppercase bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 active:bg-destructive-foreground/10 focus:outline-none focus:ring focus:primary/80',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-12',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
