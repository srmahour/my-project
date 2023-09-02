export default function Footer(){
    return(
    <footer className="p-4 bg-neutral-800">
      <div className="mx-auto mt-5 max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-lg bg-indigo-600 p-6 shadow-lg sm:flex-row sm:justify-between">
          <strong className="text-xl text-white sm:text-xl"> I Am Ready For Hire </strong>
          <a
          className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-indigo-600 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
          href="mailto:sadeepmahour@gmail.com"
          >
            <span className="text-sm font-medium"> Let's Get Started </span>

            <svg
            className="h-5 w-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
            </svg>
          </a>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between md:mt-8">
          <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-right"> Copyright &copy; 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
    )
}