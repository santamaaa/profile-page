import Roles from "../components/Roles"
import ViewResumeModal from "../components/ViewResumeModal"
import MessageMeModal from "../components/MessageMeModal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import MyPhoto from '../assets/photo.svg'
import CurrentYear from "../components/CurrentYear"

const Main = () => {
    return (
        <div className="w-full min-h-screen flex justify-center bg-mywhite">
            <div className="w-full max-w-[1440px] px-6 md:px-20">
                <div className="mt-16 md:mt-20 md:px-10 lg:px-60">
                    <h2 className="text-myblack text-xl md:text-3xl font-semibold">Hello</h2>
                    <h1 className="mt-2 md:mt-4 text-myblack text-4xl md:text-6xl font-bold">I'm <span className="text-myblue">Santamaa</span></h1>
                    <div className="mt-4 md:mt-8 md:text-right">
                        <p className="text-myblack text-[13px] md:text-xl">A <Roles /> Enthusiast</p>
                        <p className="mt-0.5 md:mt-1 text-myblack text-[13px] md:text-xl">From Semarang, Indonesia.</p>
                    </div>
                </div>
                <div className="mt-16 md:px-10 lg:px-60 flex justify-between gap-4 md:gap-10 lg:gap-16">
                    <ViewResumeModal />
                    <MessageMeModal />
                </div>
                <div className="mt-10 md:px-10 lg:px-60 flex items-center justify-between">
                    <a className="w-10 md:w-12 h-10 md:h-12 grid place-items-center border-2 border-myblue rounded-full bg-myblue text-mywhite text-xl md:text-2xl ease-in duration-300 hover:bg-mywhite hover:text-myblue hover:scale-125 cursor-pointer animate-toleft" href="/profile-page/as-webdev">
                        <FontAwesomeIcon icon={ faAnglesLeft } />
                    </a>
                    <div className="flex justify-center gap-4 md:gap-8 lg:gap-12">
                        <a className="w-10 md:w-12 h-10 md:h-12 grid place-items-center border-2 border-myblue rounded-full bg-myblue text-mywhite text-xl md:text-2xl ease-in duration-300 hover:bg-mywhite hover:text-myblue hover:scale-125" href="https://instagram.com/santamaaa" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={ faInstagram } />
                        </a>
                        <a className="w-10 md:w-12 h-10 md:h-12 grid place-items-center border-2 border-myblue rounded-full bg-myblue text-mywhite text-xl md:text-2xl ease-in duration-300 hover:bg-mywhite hover:text-myblue hover:scale-125" href="https://linkedin.com/in/santamajati" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={ faLinkedinIn } />
                        </a>
                        <a className="w-10 md:w-12 h-10 md:h-12 grid place-items-center border-2 border-myblue rounded-full bg-myblue text-mywhite text-xl md:text-2xl ease-in duration-300 hover:bg-mywhite hover:text-myblue hover:scale-125" href="https://github.com/santamaa" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={ faGithub } />
                        </a>
                    </div>
                    <a className="w-10 md:w-12 h-10 md:h-12 grid place-items-center border-2 border-myblue rounded-full bg-myblue text-mywhite text-xl md:text-2xl ease-in duration-300 hover:bg-mywhite hover:text-myblue hover:scale-125 cursor-pointer animate-toright" href="/profile-page/as-gis">
                        <FontAwesomeIcon icon={ faAnglesRight } />
                    </a>
                </div>
                <div className="mt-10 px-10 md:mt-20 md:px-20 lg:px-96">
                    <div className="flex justify-center rounded-2xl shadow-myinsetshadow">
                        <img src={ MyPhoto } alt="Santamaa" />
                    </div>
                </div>
                <div className="mt-6 mb-3 py-4 md:mt-12 md:mb-6 flex items-center justify-center gap-1 text-myblack">
                    <span className="text-md">&copy;</span>
                    <span className="text-xs">Copyright Santamaa</span>
                    <CurrentYear />
                </div>
            </div>
        </div>
    )
}

export default Main