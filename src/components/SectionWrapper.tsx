import React from "react"

export default function SectionWrapper({ children, ...props }: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>) {
    return <section {...props} className={`py-16 ${props.className || ""}`}>
        {children}
    </section>
}

