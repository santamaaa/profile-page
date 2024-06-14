import { useState } from "react"
import MyPhoto from '../assets/photo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const ViewResumeModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        document.getElementById("msgForm").reset()
        setModalIsOpen(false)
    }

    const modalContentStyle = modalIsOpen ? { display: "flex" } : { display: "none" }

    return (
        <div className="relative w-full">
            <button className="w-full py-2.5 md:py-3.5 border-2 border-myblue rounded-lg bg-mywhite text-myblue text-xs md:text-sm font-semibold ease-in duration-300 hover:bg-myblue hover:text-mywhite" onClick={ openModal }>View Resume</button>
            <div className="w-screen h-screen fixed top-0 left-0 z-50 flex justify-center items-center" style={ modalContentStyle }>
                <div className="relative w-full h-full bg-myblack/60" onClick={ closeModal }></div>
                <div className="w-5/6 lg:w-4/6 h-4/6 lg:h-5/6 py-6 px-8 md:p-10 lg:p-8 absolute z-10 flex flex-col justify-between rounded-2xl bg-mywhite">
                    <div className="h-full overflow-y-auto">
                        <div className="w-full min-h-full flex">
                            <div className="w-2/4 p-4 md:p-8 bg-myblack2 rounded-l-md">
                                <div className="w-full aspect-square rounded-full bg-mygray overflow-hidden">
                                    <img className="mt-5 ml-0.5 md:mt-12 lg:mt-20 lg:ml-1.5 scale-150" src={ MyPhoto } alt="Santamaa" />
                                </div>
                                <h4 className="mt-3 md:mt-6 lg:mt-10 text-white text-[10px] md:text-xl lg:text-3xl font-bold md:tracking-widest">SANTAMAJATI</h4>
                                <h5 className="mt-1 lg:mt-2 text-white text-[9px] md:text-lg lg:text-xl tracking-wide md:tracking-widest lg:tracking-[4px]">STUDENT</h5>
                                <p className="mt-2 lg:mt-4 text-white text-[6px] md:text-xs md:tracking-wide lg:tracking-widest">An information systems student who has the ability and interest in web development and geographic information systems</p>
                                <h5 className="mt-6 md:mt-12 mb-1 md:mb-3 text-white text-[9px] md:text-lg lg:text-xl tracking-wide md:tracking-widest lg:tracking-[4px]">SOCIAL MEDIA</h5>
                                <div className="flex">
                                    <div className="w-4 md:w-7 flex">
                                        <FontAwesomeIcon className="text-white text-[10px] md:text-lg lg:text-xl" icon={ faInstagram } />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-white text-[6px] md:text-xs lg:text-sm font-semibold tracking-[1px]">INSTAGRAM</p>
                                        <p className="text-white text-[4px] md:text-[8px] lg:text-[10px]">instagram.com/santamaaa</p>
                                    </div>
                                </div>
                                <div className="mt-2 md:mt-4 mb-2 md:mb-4 flex">
                                    <div className="w-4 md:w-7 flex">
                                        <FontAwesomeIcon className="text-white text-[10px] md:text-lg lg:text-xl" icon={ faLinkedinIn } />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-white text-[6px] md:text-xs lg:text-sm font-semibold tracking-[1px]">LINKEDIN</p>
                                        <p className="text-white text-[4px] md:text-[8px] lg:text-[10px]">linkedin.com/in/santamajati</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="w-4 md:w-7 flex">
                                        <FontAwesomeIcon className="text-white text-[10px] md:text-lg lg:text-xl" icon={ faGithub } />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-white text-[6px] md:text-xs lg:text-sm font-semibold tracking-[1px]">GITHUB</p>
                                        <p className="text-white text-[4px] md:text-[8px] lg:text-[10px]">github.com/santamaa</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-3/5 p-4 md:p-8 bg-white rounded-r-md">
                                <h5 className="text-black text-[9px] md:text-lg lg:text-xl tracking-wide md:tracking-widest lg:tracking-[4px]">EDUCATION</h5>
                                <div className="mt-2 text-black">
                                    <h6 className="md:mb-1 text-[7px] md:text-xs lg:text-sm font-semibold">SATYA WACANA CHRISTIAN UNIVERSITY</h6>
                                    <p className="mt-1 text-[5px] md:text-[10px] lg:text-xs">Bachelor of Information Systems</p>
                                    <p className="mt-1 text-[5px] md:text-[10px] lg:text-xs">2020 - Present</p>
                                </div>
                                <div className="mt-2 md:mt-4 text-black">
                                    <h3 className="md:mb-1 text-[7px] md:text-xs lg:text-sm font-semibold">SMA NEGERI 3 SALATIGA</h3>
                                    <p className="mt-1 text-[5px] md:text-[10px] lg:text-xs">Math and Science</p>
                                    <p className="mt-1 text-[5px] md:text-[10px] lg:text-xs">2017 - 2020</p>
                                </div>
                                <h5 className="mt-6 md:mt-12 text-black text-[9px] md:text-lg lg:text-xl tracking-wide md:tracking-widest lg:tracking-[4px]">CERTIFICATES</h5>
                                <div className="mt-2 text-black">
                                    <h3 className="md:mb-1 text-[7px] md:text-xs lg:text-sm font-semibold">ORACLE ACADEMY</h3>
                                    <p className="mt-1 text-[5px] md:text-[10px] lg:text-xs">Database Design and Programming with SQL (April 2022)</p>
                                    <p className="mt-1 text-[5px] md:text-[10px] lg:text-xs">Database Programming with PL/SQL (July 2022)</p>
                                </div>
                                <h5 className="mt-6 md:mt-12 text-black text-[9px] md:text-lg lg:text-xl tracking-wide md:tracking-widest lg:tracking-[4px]">SKILLS</h5>
                                <div className="mt-2 text-black">
                                    <h3 className="md:mb-1 text-[7px] md:text-xs lg:text-sm font-semibold">WEB DEVELOPMENT</h3>
                                    <p className="mt-1 text-[5px] md:text-[10px] lg:text-xs">Figma</p>
                                    <p className="mt-1 text-[5px] md:text-[10px] lg:text-xs">HTML</p>
                                    <p className="mt-1 text-[5px] md:text-[10px] lg:text-xs">CSS - Tailwind CSS</p>
                                    <p className="mt-1 text-[5px] md:text-[10px] lg:text-xs">JavaScript - React</p>
                                    <p className="mt-1 text-[5px] md:text-[10px] lg:text-xs">Python - Flask</p>
                                    <p className="mt-1 text-[5px] md:text-[10px] lg:text-xs">SQL - NoSQL</p>
                                </div>
                                <div className="mt-2 md:mt-4 text-black">
                                    <h3 className="md:mb-1 text-[7px] md:text-xs lg:text-sm font-semibold">GEOGRAPHIC INFORMATION SYSTEM</h3>
                                    <p className="mt-1 text-[5px] md:text-[10px] lg:text-xs">QGIS</p>
                                    <p className="mt-1 text-[5px] md:text-[10px] lg:text-xs">ArcGIS</p>
                                    <p className="mt-1 text-[5px] md:text-[10px] lg:text-xs">Google Earth Engine</p>
                                </div>
                                <div className="mt-2 md:mt-4 text-black">
                                    <h3 className="md:mb-1 text-[7px] md:text-xs lg:text-sm font-semibold">OTHERS</h3>
                                    <p className="mt-1 text-[5px] md:text-[10px] lg:text-xs">Microsoft Office</p>
                                    <p className="mt-1 text-[5px] md:text-[10px] lg:text-xs">Communication</p>
                                    <p className="mt-1 text-[5px] md:text-[10px] lg:text-xs">Problem Solving</p>
                                    <p className="mt-1 text-[5px] md:text-[10px] lg:text-xs">Honesty</p>
                                    <p className="mt-1 text-[5px] md:text-[10px] lg:text-xs">Responsibility</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-6">
                        <button className="w-full py-2 border-2 border-myblue rounded-md bg-myblue text-white text-xs md:text-base font-semibold ease-in duration-300 hover:bg-white hover:text-myblue" onClick={ closeModal }>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewResumeModal