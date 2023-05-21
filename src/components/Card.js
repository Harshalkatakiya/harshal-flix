import './Card.css'
const Card = ({ movies }) => {
    return (
        <>
            {movies.map((curr, i) => {
                const { id, photo, title, size, url } = curr;
                return (
                    <>
                        <div className="opacity-0 animate-[card-grow_300ms_ease_0s_1_normal_forwards] mx-auto w-0 bg-red-100 ring-2 ring-red-300 ring-offset-2  !shadow-red-300  rounded-xl overflow-hidden flex flex-col transition-all
                        hover:shadow-[0.9em_0.9em_0em] active:!shadow-red-400" key={id}
                            style={{ animationDelay: `${Math.min(i * 200, 1500)}ms` }}>
                            <img src={photo} alt={title + " image"} loading="lazy" className="h-72 w-full object-cover select-none cursor-pointer" />
                            <div className='flex-grow flex flex-col mx-3 mt-3  '>
                                <h6 className="relative cursor-default text-2xl md:text-xl lg:text-lg ">{title}</h6>
                                <span className="relative mb-3 mt-auto cursor-default lg:text-sm text">Size : {size}</span>
                                <a href={url} rel="noreferrer" target="_blank" class="select-none cursor-pointer mt-auto  text-center  text-red-600 transition-all w-fit m-auto my-5 relative px-6 py-3 font-bold  group
                                     active:text-red-900 active:translate-x-1 active:translate-y-1">
                                    <span class=" absolute inset-0 w-full h-full rounded-xl transition duration-300 ease-out transform  bg-red-300 -translate-x-2 translate-y-2 
                                     group-hover:translate-x-2 group-hover:translate-y-2  group-active:translate-x-0 group-active:translate-y-0"></span>
                                    <span class="absolute inset-0 w-full h-full rounded-xl border-[3px] border-red-800"></span>
                                    <span class="relative ">Download</span>
                                </a>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Card;