const CareerCard = ({ position, agency, period, jobdesk }) => {
    return (
        <div className="w-full flex even:flex-row-reverse gap-[20px] relative text-myblack md:even:text-right group cursor-default">
            <div className="w-full md:w-[calc(50%-20px)] rounded-lg bg-mywhite group-hover:shadow-md">
                <h4 className="pt-5 px-5 text-sm font-semibold">{ position }</h4>
                <h4 className="mt-3 pb-0 md:pb-5 px-5 text-xs font-semibold md:italic">{ agency }</h4>
                <p className="mt-2 pb-5 px-5 md:hidden text-xs italic">{ period }</p>
            </div>

            { jobdesk &&
                <div className="w-full md:w-[calc(50%-40px)] h-full px-3 items-center opacity-0 absolute z-50 border-b-2 border-transparent rounded-lg text-mywhite bg-myblack2 group-hover:opacity-100">
                    { jobdesk }
                </div>
            }

            <div className="w-[40px] hidden md:flex justify-center relative top-0 left-0">
                <div className="w-1 h-full relative z-0 bg-myblack2" />
                <div className="w-[20px] aspect-square absolute top-[50%] left-[50%] z-1 -translate-x-[50%] -translate-y-[50%] rounded-full bg-myblack2 group-hover:bg-myblue" />
            </div>

            <div className="w-[calc(50%-20px)] hidden md:flex items-center">
                <p className="w-full text-sm font-semibold group-hover:text-myblue">{ period }</p>
            </div>
        </div>
    )
}

export default CareerCard