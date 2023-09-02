export default function Skill({title, tools}){
    return(
        <>
        <div className="p-3 border-solid border-slate-800 border mr-2 my-3 rounded-sm">
            <h4 className='text-md font-medium text-orange-400'>{title}</h4> 
            {
                tools.map((item)=>( <p className='text-sm text-neutral-500'>{item}</p> ))
            }
        </div>
        
        </>
    )
}