import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import CurrentYear from "../components/CurrentYear"

const AsGIS = () => {
    return (
        <div className="w-full min-h-screen flex justify-center bg-mywhite2">
            <div className="w-full max-w-[1440px] px-6 md:px-20 lg:px-40">
                <div className="mt-4 md:mt-12 flex items-center justify-between">
                    <a className="pr-8 py-2 flex items-center" href="/">
                        <FontAwesomeIcon className="text-myblack3 text-2xl ease-in duration-300 hover:scale-125" icon={ faArrowLeft } />
                    </a>
                    <h2 className="text-myblack3 text-xl md:text-2xl font-bold">Santamaa</h2>
                </div>
                <div className="my-20 md:my-36 lg:my-28 text-myblack3 text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold">I am</h1>
                    <h1 className="mt-2 mb-6 md:mb-10 text-4xl md:text-6xl font-extrabold">GIS Analyst</h1>
                    <p className="text-xs md:text-sm lg:tracking-wide">As a GIS analyst enthusiast, I enjoy exploring, analyzing, and visualizing geographic data to understand the patterns and trends hidden within. I explore various mapping techniques, satellite image processing, and utilize various GIS platforms and software, especially QGIS and Google Earth Engine to create accurate and informative spatial modeling. My dedication to GIS is reflected in my passion to continue learning and deepening my knowledge of spatial analysis, so that I can apply it in my research and beyond.</p>
                    <div className="mt-12 md:mt-20 flex justify-start gap-4 md:gap-8">
                        <a className="w-10 md:w-12 h-10 md:h-12 grid place-items-center border-2 border-myblack3 rounded-full bg-myblack3 text-mywhite2 text-xl md:text-2xl ease-in duration-300 hover:bg-mywhite2 hover:text-myblack3 hover:scale-125" href="https://instagram.com/santamaaa" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={ faInstagram } />
                        </a>
                        <a className="w-10 md:w-12 h-10 md:h-12 grid place-items-center border-2 border-myblack3 rounded-full bg-myblack3 text-mywhite2 text-xl md:text-2xl ease-in duration-300 hover:bg-mywhite2 hover:text-myblack3 hover:scale-125" href="https://linkedin.com/in/santamajati" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={ faLinkedinIn } />
                        </a>
                        <a className="w-10 md:w-12 h-10 md:h-12 grid place-items-center border-2 border-myblack3 rounded-full bg-myblack3 text-mywhite2 text-xl md:text-2xl ease-in duration-300 hover:bg-mywhite2 hover:text-myblack3 hover:scale-125" href="https://github.com/santamaa" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={ faGithub } />
                        </a>
                    </div>
                </div>
                <div className="w-full">
                    <h2 className="text-3xl md:text-4xl font-semibold text-myblack3 text-left">My Projects</h2>
                    <div className="w-full my-8 md:my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <div className="w-full h-20 rounded-lg bg-black"></div>
                        <div className="w-full h-20 rounded-lg bg-black"></div>
                        <div className="w-full h-20 rounded-lg bg-black"></div>
                        <div className="w-full h-20 rounded-lg bg-black"></div>
                        <div className="w-full h-20 rounded-lg bg-black"></div>
                    </div>
                </div>
                <div className="mt-6 mb-3 py-4 md:mt-12 md:mb-6 flex items-center justify-center gap-1 text-myblack3">
                    <span className="text-md">&copy;</span>
                    <span className="text-xs">Copyright Santamaa</span>
                    <CurrentYear />
                </div>
            </div>
        </div>
    )
}

export default AsGIS