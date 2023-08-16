import React from "react"
import Link from "next/link"
import { VariantProps, cva } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const buttonVariants = cva(
  "text-primary rounded-md disabled:pointer-events-none hover:brightness-90 transition-color duration-300",
  {
    variants: {
      variant: {
        cta: "font-bold bg-cta px-4 py-2",
        "danger": "font-bold bg-danger px-4 py-2",
        "success": "font-bold bg-success px-4 py-2",
        neon: "font-bold bg-secondary-foreground border-2 border-solid border-cta shadow-cta px-4 py-2",
        "nav-link": `relative w-fit font-bold 
          before:absolute before:bottom-[-4px] before:w-full before:content-['']
           before:invisible before:opacity-0 before:translate-y-[0px]
           before:border-b-[3px] before:border-solid before:border-cta before:rounded-md before:transition-all
           before:duration-300 before:pointer-events-none`,
        link: "text-cta cursor-pointer",
        "continue-with": "p-4 w-full font-secondary text-secondary bg-primary-foreground flex justify-center items-center gap-x-4",
      },
      active: {
        active: "before:visible lalala before:opacity-100 before:translate-y-[2px]",
        inactive:
          "hover:before:visible hover:before:opacity-100 before:translate-y-[10px] hover:before:translate-y-[2px]",
      },
    },
    defaultVariants: {
      variant: "cta",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, active, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={twMerge(
            buttonVariants({
              variant,
              active,
              className,
            })
          )}>
          {children}
        </Link>
      )
    }
    return (
      <button
        className={twMerge(
          buttonVariants({
            variant,
            active,
            className,
          })
        )}
        ref={ref}
        {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
