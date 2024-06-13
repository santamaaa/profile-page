import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import CurrentYear from "../components/CurrentYear"

const AsWebDev = () => {
    return (
        <div className="w-full min-h-screen flex justify-center bg-myblack3">
            <div className="w-full max-w-[1440px] px-6 md:px-20 lg:px-40">
                <div className="mt-4 md:mt-12 flex items-center justify-between">
                    <h2 className="text-mywhite2 text-xl md:text-2xl font-bold">Santamaa</h2>
                    <a className="pl-8 py-2 flex items-center text-right" href="/">
                        <FontAwesomeIcon className="text-mywhite2 text-2xl ease-in duration-300 hover:scale-125" icon={ faArrowRight } />
                    </a>
                </div>
                <div className="my-20 md:my-36 lg:my-28 text-mywhite2 text-right">
                    <h1 className="text-4xl md:text-6xl font-extrabold">I am</h1>
                    <h1 className="mt-2 mb-6 md:mb-12 text-4xl md:text-6xl font-extrabold">Web Developer</h1>
                    <p className="text-xs md:text-sm lg:tracking-wide">I am a web development enthusiast who is always eager to explore the latest technologies and trends in the web development world. Although I am not yet a professional web developer, I am actively learning various programming such as HTML, CSS, JavaScript, Python, SQL, and NoSQL, as well as popular frameworks and libraries such as Bootstrap, Tailwind CSS, jQuery, React, and Flask. I often spend my free time working on personal projects and taking online courses. With a deep interest in both front-end and back-end development, I am committed to continually learning and growing in this field, with the hope of one day contributing professionally to the web development industry.</p>
                    <div className="mt-12 md:mt-20 flex justify-end gap-4 md:gap-8">
                        <a className="w-10 md:w-12 h-10 md:h-12 grid place-items-center border-2 border-mywhite2 rounded-full bg-mywhite2 text-myblack3 text-xl md:text-2xl ease-in duration-300 hover:bg-myblack3 hover:text-mywhite2 hover:scale-125" href="https://instagram.com/santamaaa" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={ faInstagram } />
                        </a>
                        <a className="w-10 md:w-12 h-10 md:h-12 grid place-items-center border-2 border-mywhite2 rounded-full bg-mywhite2 text-myblack3 text-xl md:text-2xl ease-in duration-300 hover:bg-myblack3 hover:text-mywhite2 hover:scale-125" href="https://linkedin.com/in/santamajati" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={ faLinkedinIn } />
                        </a>
                        <a className="w-10 md:w-12 h-10 md:h-12 grid place-items-center border-2 border-mywhite2 rounded-full bg-mywhite2 text-myblack3 text-xl md:text-2xl ease-in duration-300 hover:bg-myblack3 hover:text-mywhite2 hover:scale-125" href="https://github.com/santamaa" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={ faGithub } />
                        </a>
                    </div>
                </div>
                <div className="w-full">
                    <h2 className="text-3xl md:text-4xl font-semibold text-mywhite2 text-right">My Projects</h2>
                    <div className="w-full my-8 md:my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <div className="w-full h-20 rounded-lg bg-white"></div>
                        <div className="w-full h-20 rounded-lg bg-white"></div>
                        <div className="w-full h-20 rounded-lg bg-white"></div>
                        <div className="w-full h-20 rounded-lg bg-white"></div>
                        <div className="w-full h-20 md:col-start-2 rounded-lg bg-white"></div>
                    </div>
                </div>
                <div className="mt-6 mb-3 py-4 md:mt-12 md:mb-6 flex items-center justify-center gap-1 text-mywhite2">
                    <span className="text-md">&copy;</span>
                    <span className="text-xs">Copyright Santamaa</span>
                    <CurrentYear />
                </div>
            </div>
        </div>
    )
}

export default AsWebDev