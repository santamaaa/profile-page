import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import CurrentYear from "../components/CurrentYear"
import webdevProjects from '../assets/webdev-projects'

const AsWebDev = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [selectedData, setSelectedData] = useState(null)

    const openModal = (data) => {
        setModalIsOpen(true)
        setSelectedData(data)
    }

    const closeModal = () => {
        setModalIsOpen(false)
        setSelectedData(null)
    }

    return (
        <div className="w-full min-h-screen flex justify-center bg-myblack3">
            <div className="w-full max-w-[1440px] px-6 md:px-20 lg:px-40">
                <div className="mt-4 md:mt-12 flex items-center justify-between">
                    <h2 className="text-mywhite2 text-xl md:text-2xl font-bold">Santamaa</h2>
                    <a className="pl-8 py-2 flex items-center text-right" href="/profile-page">
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
                    <div className="w-full my-6 md:my-8 grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-end lg:flex-wrap gap-8 md:gap-8">
                        {
                            webdevProjects.sort((a, b) => b.id - a.id).map((data, index) => (
                                <div key={index} onClick={() => openModal(data)} className="w-full lg:max-w-[320px] relative flex flex-col gap-3 md:gap-4 cursor-pointer duration-200 hover:scale-105 group">
                                    <img src={data.img} className="rounded-md grayscale group-hover:grayscale-0" alt={data.title} />
                                    <div className="w-full h-full absolute flex flex-col items-center justify-center gap-4 bg-myblack3/60 text-center group-hover:hidden">
                                        <h3 className="text-base md:text-lg font-semibold text-mywhite2">{data.title}</h3>
                                        <ul className="w-full flex flex-wrap justify-center gap-4 text-xs font-normal text-mywhite2">
                                            {data.tech.map((tech, index) => (
                                                <li key={index} className="text-xs">{tech}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {
                        // Modal
                        modalIsOpen && selectedData && (
                            <div className="w-screen h-screen fixed top-0 left-0 grid place-items-center">
                                <div onClick={closeModal} className="w-full h-full relative z-0 bg-myblack3/90"></div>
                                <div className="w-[80vw] md:w-[480px] p-6 md:p-12 absolute top-50 z-10 flex flex-col items-end border-2 border-mywhite2 rounded-md bg-myblack3 text-right">
                                    <h4 className="text-2xl font-semibold text-mywhite2 md:text-4xl">{selectedData.name}</h4>
                                    <p className="mt-2 mb-6 md:mt-4 md:mb-12 text-xs font-normal text-mywhite2 md:text-sm">{selectedData.desc}</p>
                                    <div className="w-full grid grid-cols-2 gap-6">
                                        <button onClick={closeModal} className="w-full py-2 md:py-3 grid place-items-center border-2 border-mywhite2 rounded-md bg-myblack3 text-sm md:text-base font-semibold text-mywhite2 duration-300 hover:bg-myblack">Close</button>
                                        <a href={selectedData.url} target="_blank" rel="noreferrer" onClick={closeModal} className="w-full py-2 md:py-3 grid place-items-center border-2 border-mywhite2 rounded-md bg-mywhite2 text-sm md:text-base font-semibold text-myblack3 duration-300 hover:bg-mywhite">Visit</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="mt-6 mb-3 py-4 md:mt-12 md:mb-6 flex items-center justify-end gap-1 text-mywhite2">
                    <span className="text-md">&copy;</span>
                    <span className="text-xs">Copyright Santamaa</span>
                    <CurrentYear />
                </div>
            </div>
        </div>
    )
}

export default AsWebDev