import logo from '../logo6.gif';

export default function AboutBrif(){
    return(
        <div className="mx-auto container md:p-5 md:max-w-4xl md:bg-white md:rounded-lg z-10 -mt-20 relative flex flex-col md:items-center md:flex-row md:justify-center">
            <img src={logo} alt="banner" className='rounded-full h-40 w-40 mx-auto relative z-10' />
            <div className="text-center p-4 md:p-0 md:pl-5 md:text-left">
                <h1 className="font-bold text-3xl text-white md:text-black">Sandeep Mahaur</h1>
                <h5 className="text-md mb-2 text-slate-300 md:text-slate-800 md:text-lg">Sr Frontend Developer</h5>
                <p className="mb-2 md:mb-6 text-slate-300 text-sm md:text-slate-700 md:text-md md:hidden">As a Senior Front-End Developer with 8+ years of experience, I've excelled in creating responsive web designs for the FinTech, EdTech, and MedTech sectors. </p>
                <p className="mb-1 text-slate-300 text-sm md:text-slate-700 md:text-md hidden md:block">As a Senior Front-End Developer with 8+ years of experience, including a year as a Team Lead, I've excelled in creating responsive web designs for the FinTech, EdTech, and MedTech sectors. My proficiency spans HTML, CSS, core JavaScript, and frameworks like React and Vue. A key achievement includes boosting a website's conversion rate through refined code and design.</p>
                <ul className='mb-3 flex items-center text-center text-white justify-center md:text-slate-800 md:justify-start md:text-sm'>
                    <li><a href='tel:8826199934'>8826199934</a></li>
                    <li className='mx-1'>|</li>
                    <li><a href='mailto:designerfullstack@gmail.com'>designerfullstack@gmail.com</a></li>
                </ul>
                <div className='flex items-center justify-center md:justify-start'>
                    <a href='https://github.com/srmahour' className='mr-3 hover:animate-pulse' target='_blank'>
                        <svg  className='fill-green-400 md:fill-slate-800 md:w-5 md:h-5 w-8 h-8 octicon octicon-mark-github v-align-middle color-fg-default' aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                        </svg>
                    </a>
                    <a href='https://www.linkedin.com/in/sandeepmahour/' className='mr-3 hover:animate-pulse' target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="fill-green-400 md:fill-slate-800 md:w-5 md:h-5 w-8 h-8 mercado-match "  focusable="false">
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                        </svg>
                    </a>
                    <a href='https://in.pinterest.com/fullstackdesigner/' className='mr-3 hover:animate-pulse' target='_blank'>
                        <svg class="gUZ GjR U9O kVc" className='fill-green-400 md:fill-slate-800 md:w-5 md:h-5 w-8 h-8'  viewBox="0 0 24 24" aria-label="Pinterest" role="img"><path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"></path></svg></a>
                    
                    <a href='https://codepen.io/sandymahaur' className='hover:animate-pulse' target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-green-400 md:fill-slate-800 md:w-5 md:h-5 w-8 h-8' fill="#000000" viewBox="0 0 32 32"><path d="M 16 2.84375 L 15.4375 3.21875 L 3.4375 11.25 L 3 11.53125 L 3 20.46875 L 3.4375 20.75 L 15.4375 28.78125 L 16 29.15625 L 16.5625 28.78125 L 28.5625 20.75 L 29 20.46875 L 29 11.53125 L 28.5625 11.25 L 16.5625 3.21875 Z M 15 5.90625 L 15 11.34375 L 9.84375 14.8125 L 5.8125 12.09375 Z M 17 5.90625 L 26.1875 12.09375 L 22.15625 14.8125 L 17 11.34375 Z M 16 13.09375 L 20.34375 16 L 16 18.90625 L 11.65625 16 Z M 5 13.9375 L 8.0625 16 L 5 18.0625 Z M 27 13.9375 L 27 18.0625 L 23.9375 16 Z M 9.875 17.1875 L 15 20.65625 L 15 26.09375 L 5.8125 19.90625 Z M 22.125 17.1875 L 26.1875 19.90625 L 17 26.09375 L 17 20.65625 Z"/></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}