import { type ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
    className?: string
}

const Button = ({ children, ...props }: ButtonProps) => (
    <button
        role="button"
        {...props}
        className={`${props.className || ""} px-4 py-2 rounded-lg duration-150`}
    >
        {children}
    </button>
)
export default Button