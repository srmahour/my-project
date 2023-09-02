export default function Company({title, jobDescription, company, duration}){
    return(
            <article className=" rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
                <div className="flex items-start sm:gap-8">
                    <div
                    className="animate-pulse hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                    aria-hidden="true"
                    >
                        <div className="flex items-center gap-1">
                            <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                            <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                            <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                            <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                            <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                        </div>
                    </div>

                    <div>
                        <strong
                        className=" animate-pulse sm:animate-none rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-xs font-medium text-white"
                        >
                        {company}
                        </strong>

                        <h3 className="mt-4 text-lg font-medium sm:text-xl">
                            {title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-700">
                            <ul className="list-disc pl-3">
                                {jobDescription.map((item)=>( <li>{ item }</li> ))}
                            </ul>
                        </p>

                        <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                            <div className="flex items-center gap-1 text-gray-500">
                                <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                                </svg>

                                <p className="text-xs font-medium">{duration}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
    )
}