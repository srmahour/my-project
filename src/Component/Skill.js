export default function Skill({title, tools}){
    return(
        <>
        <div className="p-3 shadow-xl border border-solid border-neutral-800  mr-2 my-3 rounded-sm bg-neutral-900">
            <h4 className='text-md mb-2 font-medium text-orange-400'>{title}</h4> 
            {
                tools.map((item)=>( <p className='text-sm text-neutral-500'>{item}</p> ))
            }
        </div>
        
        </>
    )
}