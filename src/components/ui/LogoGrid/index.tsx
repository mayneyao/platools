import Adobe from '../../../public/logos/adobe.svg'
import Freshbooks from '../../../public/logos/freshbooks.svg'
import Layers from '../../../public/logos/layers.svg'
import Sendgrid from '../../../public/logos/sendgrid.svg'

const logos: {
    icon: JSX.Element,
    alt: string
}[] = [
        {
            icon: <Freshbooks />,
            alt: "freshbooks"
        },
        {
            icon: <Sendgrid />,
            alt: "sendgrid"
        },
        {
            icon: <Layers />,
            alt: "layers"
        },
        {
            icon: <Adobe />,
            alt: "adobe"
        },
    ]


const LogoGrid = () => (
    <div>
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-600 text-center">
                TRUSTED BY TEAMS FROM AROUND THE WORLD
            </h2>
            <div className="mt-6">
                <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                    {
                        logos.map((item, idx) => (
                            <li key={idx}>
                                item.icon
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
)

export default LogoGrid