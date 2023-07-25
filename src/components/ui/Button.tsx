import React from 'react'
import Link from 'next/link'
import { VariantProps, cva } from 'class-variance-authority'

const buttonVariants = cva(
  'font-bold text-primary px-4 py-2 rounded-md disabled:pointer-events-none hover:brightness-90 transition-color duration-300',
  {
    variants: {
      variant: {
        cta:
          'bg-cta',
        "cta-danger":
          'bg-cta-danger',
        "cta-success":
          'bg-cta-success',
        neon:
          'bg-secondary-dark border-2 border-solid border-cta shadow-cta'
      },
    },
    defaultVariants: {
      variant: 'cta',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={(buttonVariants({ variant, className }))}
        >
          {children}
        </Link>
      )
    }
    return (
      <button
        className={(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }