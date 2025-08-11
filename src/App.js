import Roles from './components/Roles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import CurrentYear from './components/CurrentYear'
import CareerCard from './components/CareerCard'
import mySkills from './assets/my-skills'

function App() {
  return (
    <div className="w-full min-h-screen flex justify-center bg-mywhite">
        <div className="w-full max-w-[1500px]">
            <div className="mt-16 md:mt-20 px-10 md:px-40 lg:px-[360px] text-myblack">
                <p className="text-xl md:text-2xl font-semibold">Hello,</p>
                <h1 className="mt-2 md:mt-4 text-3xl md:text-5xl font-bold">I'm <span className="text-myblue">Santamaaa</span></h1>
                <div className="mt-4 md:mt-8 text-right">
                    <p className="text-base md:text-xl">A <Roles /> Enthusiast</p>
                    <p className="mt-0.5 md:mt-1 text-xs md:text-base">Focusing on Parctical Tech-Based Solutions</p>
                </div>
            </div>

            <div className="mt-10 px-10 md:px-40 lg:px-80 flex items-center justify-center gap-10">
                <a className="w-10 aspect-square grid place-items-center border-2 border-myblue rounded-full shadow-md bg-myblue text-mywhite text-xl md:text-2xl ease-in duration-300 hover:bg-mywhite hover:text-myblue hover:scale-125" href="https://instagram.com/santamaaa" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <FontAwesomeIcon icon={ faInstagram } />
                </a>
                <a className="w-10 aspect-square grid place-items-center border-2 border-myblue rounded-full shadow-md bg-myblue text-mywhite text-xl md:text-2xl ease-in duration-300 hover:bg-mywhite hover:text-myblue hover:scale-125" href="https://linkedin.com/in/santamajati" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={ faLinkedinIn } />
                </a>
                <a className="w-10 aspect-square grid place-items-center border-2 border-myblue rounded-full shadow-md bg-myblue text-mywhite text-xl md:text-2xl ease-in duration-300 hover:bg-mywhite hover:text-myblue hover:scale-125" href="https://github.com/santamaaa" target="_blank" rel="noreferrer" aria-label="Github">
                    <FontAwesomeIcon icon={ faGithub } />
                </a>
            </div>
            <div className="mt-10 px-10 md:px-40 lg:px-[360px] flex flex-col-reverse md:flex-row items-center justify-between gap-x-10 gap-y-2">
                <a href="https://santamaaa.github.io/webdev-projects/" rel="noreferrer" className="flex self-start items-center gap-1 md:gap-3 text-myblack text-sm md:text-md font-semibold tracking-wider group">
                    <svg height="36" className="group-hover:-translate-x-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    WebDev Projects
                </a>
                <a href="https://santamaaa.github.io/gis-projects/" rel="noreferrer" className="flex self-end items-center gap-1 md:gap-3 text-myblack text-sm md:text-md font-semibold tracking-wider group">
                    GIS Projects
                    <svg height="36" className="rotate-180 group-hover:translate-x-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
            </div>

            <div className="mt-16 md:mt-20 mx-5 md:mx-12 lg:mx-80 p-7 md:p-10 flex flex-col gap-5 md:gap-7 rounded-lg shadow-md bg-mywhite2">
                <h2 className="text-myblack text-xl md:text-2xl md:text-center font-semibold tracking-wider">Growth Journey</h2>
                <div className="flex flex-col gap-5 md:gap-0">
                    <CareerCard
                        position={ "Internship - IT Supply & Distribution Division" }
                        agency={ "PT Sumber Alfaria Trijaya Tbk" }
                        period={ "September 2024 - August 2025" }
                        jobdesk={
                            <ul className="w-full h-full flex flex-col justify-center gap-2 text-xs text-center list-none">
                                <li>Develop web-based applications</li>
                                <li>Application testing and QA</li>
                                <li>JasperReports developer</li>
                            </ul>
                        }
                    />
                    <CareerCard
                        position={ "Graduated with a Bachelor's Degree in Information Systems" }
                        agency={ "Universitas Kristen Satya Wacana" }
                        period={ "2020 - 2024" }
                    />
                    <CareerCard
                        position={ "Internship - Spatial Planning Division" }
                        agency={ "Dinas Pekerjaan Umum dan Penataan Ruang Kota Salatiga" }
                        period={ "January - April 2024" }
                        jobdesk={
                            <ul className="w-full h-full flex flex-col justify-center gap-2 text-xs text-center list-none">
                                <li>GIS operator for spatial data management</li>
                                <li>Land use surveys and data collection</li>
                            </ul>
                        }
                    />
                    <CareerCard
                        position={ "Internship - General and Personnel Subdivision" }
                        agency={ "Dinas Lingkungan Hidup Kota Salatiga" }
                        period={ "August - November 2023" }
                        jobdesk={
                            <ul className="w-full h-full flex flex-col justify-center gap-2 text-xs text-center list-none">
                                <li>Provided IT support for office operations</li>
                                <li>Processed and managed administrative data using Microsoft Excel</li>
                            </ul>
                        }
                    />
                </div>
            </div>

            <div className="mt-8 md:mt-10 mx-5 md:mx-12 lg:mx-80 p-7 md:p-10 flex flex-col rounded-lg shadow-md bg-mywhite2">
                <h2 className="mb-5 md:mb-7 text-myblack text-xl md:text-2xl md:text-center font-semibold tracking-wider">Tool Proficiency</h2>
                <div className="w-full mb-2 grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] place-items-center gap-5 opacity-60">
                    <div className="w-full h-[1px] bg-myblack" />
                    <h3 className="text-md md:text-lg font-semibold tracking-widest">Web Dev</h3>
                    <div className="w-full h-[1px] hidden md:block bg-myblack" />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
                    {
                        mySkills.filter(c => c.category === "webdev").map((data, index) => (
                            <div key={ index } title={ data.tool } className="w-16 aspect-square grid place-items-center text-myblack text-4xl">
                                { data.icon }
                            </div>
                        ))
                    }
                </div>

                <div className="w-full mt-5 md:mt-7 mb-2 grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] place-items-center gap-5 opacity-60">
                    <div className="w-full h-[1px] bg-myblack"></div>
                    <h3 className="text-md md:text-lg font-semibold tracking-widest">GIS</h3>
                    <div className="w-full h-[1px] hidden md:block bg-myblack"></div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
                    {
                        mySkills.filter(c => c.category === "gis").map((data, index) => (
                            <div key={ index } title={ data.tool } className="w-16 aspect-square grid place-items-center text-myblack text-4xl">
                                { data.icon }
                            </div>
                        ))
                    } 
                </div>
            </div>

            <div className="mt-8 md:mt-10 mx-5 md:mx-12 lg:mx-80 p-7 md:p-10 flex flex-col rounded-lg shadow-md bg-mywhite2">
                <h2 className="mb-5 md:mb-7 text-myblack text-xl md:text-2xl md:text-center font-semibold tracking-wider">Additional Interests</h2>
                <div className="flex flex-wrap items-center md:justify-center gap-3 md:gap-5">
                    {
                        mySkills.filter(c => c.category === "others").map((data, index) => (
                            <p key={ index } className="w-auto md:w-[160px] h-[40px] px-5 grid place-items-center md:justify-center rounded-md bg-mywhite text-myblack text-sm tracking-wider">
                                { data.tool }
                            </p>
                        ))
                    }
                </div>
            </div>

            <div className="mt-16 md:mt-20 mb-3 flex justify-center gap-3 text-myblack3 text-xs md:text-sm">
                <p>+62 8154 8464 042</p>
                <span>|</span>
                <p>santamajati@gmail.com</p>
            </div>

            <div className="mb-8 md:mb-10 flex items-center justify-center gap-1 text-myblack">
                <span className="text-md">&copy;</span>
                <span className="text-xs">Copyright Santamaaa</span>
                <CurrentYear />
            </div>
        </div>
    </div>
  )
}

export default App