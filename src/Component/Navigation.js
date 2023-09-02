import React, {useState} from "react"



export default function Navigation(){

    const [drawer, setDrawer] = useState(false);
    
    
    return (
        <>
            <button type="button" className=" h-8 w-8 relative order-3" onClick={()=> { setDrawer(!drawer)}} >
                <span className="h-3.5 w-3.5 border-2 border-white border-solid rounded-full rounded-bl-none block absolute top-0 right-0"></span>
                <span className="h-3.5 w-3.5 border-2 border-white border-solid rounded-full rounded-tl-none block absolute bottom-0 right-0"></span>
                <span className="h-3.5 w-3.5 border-2 border-white border-solid rounded-full rounded-br-none block absolute top-0 left-0"></span>
                <span className="h-3.5 w-3.5 border-2 border-white border-solid rounded-full rounded-tr-none block absolute bottom-0 left-0"></span>
            </button>
            <nav className={`fixed top-0 z-20 h-full transition-all w-64 ${drawer ? 'left-0': '-left-full' }`}>
                <ul className="text-3xl text-center bg-white p-3 h-full">
                    <li className="my-10"><a href="#">About</a></li>
                    <li className="my-10"><a href="#">Skils</a></li>
                    <li className="my-10"><a href="#">Experience</a></li>
                    <li className="my-10"><a href="#">Portfolio</a></li>
                    <li className="my-10"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </>
        
    )
}