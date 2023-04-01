import { type InputHTMLAttributes } from "react"
const Checkbox = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => (
    <input {...props} type="checkbox" className={`${props.className || ""} form-checkbox duration-75 rounded`} />
)

export default Checkbox