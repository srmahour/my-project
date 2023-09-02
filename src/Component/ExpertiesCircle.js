export default function ExpertiseCircle({title}){
    return(
        <div className="text-center aspect-square my-2 mx-1 w-40 md:w-48 sm:w-36 text-white flex justify-center items-center rounded-full  overflow-hidden relative">
            <h4 className="text-md z-10 font-bold">{title}</h4>
            <div className="absolute h-full w-full top-0 bottom-0 left-0 right-0 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] hover:animate-spin"></div>
        </div>
    )
}