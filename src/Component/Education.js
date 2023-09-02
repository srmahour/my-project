export default function Education(){
    return(
        <section className="py-5 bg-neutral-800 mt-5 px-4 md:mt-16">
            <div className="container text-white mx-auto flex flex-col md:flex-row md:max-w-4xl">
                <div className="w-full md:w-1/2 md:pr-3">
                    <h2 className="text-xl mb-3">Academic Qualification</h2>
                    <div className="p-3 bg-slate-200 text-black rounded-md flex flex-col mb-3">
                        <span className="text-xs text-orange-600 w-20">2023-2026</span>
                        <div className="">
                            <h5 className="font-bold">Bachelor of Computer Application</h5>
                            <p className="text-sm text-neutral-700">University Of Mysore</p>
                        </div>
                    </div>
                    <div className="p-3 bg-slate-200 text-black rounded-md flex flex-col mb-3">
                        <span className="text-xs text-orange-600 w-20">2011-2012</span>
                        <div className="">
                            <h5 className="font-bold">Intermediate Examination</h5>
                            <p className="text-sm text-neutral-700">Uttar Pradesh Board</p>
                        </div>
                    </div>
                    <div className="p-3 bg-slate-200 text-black rounded-md flex flex-col mb-3">
                        <span className="text-xs text-orange-600 w-20">2008-2009</span>
                        <div className="">
                            <h5 className="font-bold">High School</h5>
                            <p className="text-sm text-neutral-700">Uttar Pradesh Board</p>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-5 md:w-1/2 md:pl-3 md:mt-0">
                    <h2 className="text-xl mb-3">Professional Certificates</h2>
                    <div className="p-3 bg-slate-200 text-black rounded-md flex flex-col mb-3">
                        <span className="text-xs text-orange-600 w-20">2013</span>
                        <div className="">
                            <h5 className="font-bold">Certification in Web Master</h5>
                            <p className="text-sm text-neutral-700">ICS Institute of Computer Studies</p>
                        </div>
                    </div>
                    <div className="p-3 bg-slate-200 text-black rounded-md flex flex-col mb-3">
                        <span className="text-xs text-orange-600 w-20">2023</span>
                        <div className="">
                            <h5 className="font-bold">Diploma in Computer Application</h5>
                            <p className="text-sm text-neutral-700">Rama Electronic Institute</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}