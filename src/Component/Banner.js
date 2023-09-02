import banner from '../banner.png';


export default function Banner(){
    return(
        
        <div className="w-full">
            <img src={banner} alt="banner" className='object-cover w-full h-64 rounded-b-3xl' />
        </div>
    )
}