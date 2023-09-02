import Company from "./Company";

export default function WorkExperience(){
    return(
        <section className="py-4">
            <div className="container mx-auto p-4 md:max-w-4xl md:px-0">
                <h2 className='text-white text-xl mb-3'>Experience</h2>
                <Company title="Web Designer" jobDescription={[
                    "Conceptualized and designed visually compelling website layouts using Photoshop.",
                    "Ensured alignment with brand standards and the company's aesthetic vision.",
                    "Enhanced, retouched, and manipulated digital images to meet specific requirements.",
                    "Maintained the highest quality and consistency in all visual content.",
                    "Modified and designed HTML templates, integrating them with CSS.",
                    "Adhered to best practices for web design and ensured cross-browser compatibility.",
                    "Developed and refined responsive email templates using HTML and CSS."
                ]} company="ICS Technologies" duration="2014 - 2015" />
                <div className="h-36 w-1 bg-neutral-700 relative mx-auto my-1 flex items-center"> <span className="animate-bounce h-5 w-3 bg-lime-500 block"></span> </div>
                <Company title="Web Designer" jobDescription={[
                    "Crafted visually captivating website layouts aligning with the brand’s vision using Adobe Photoshop.",
                    "Converted Photoshop mock-ups into pixel-perfect, fully responsive websites to ensure compatibility across all devices and screen resolutions.",
                    "Prioritized an optimal user experience in every design, considering various device specifications.",
                    "Incorporated dynamic animations using CSS and jQuery to enhance user engagement.",
                    "Created and implemented custom web UI components such as Accordions, Modals, Sliders, and Mobile Menus.",
                    "Leveraged jQuery to develop seamless and intuitive user interfaces, improving overall usability.",
                ]} company="Nettechnocrats" duration="2015 - 2016" />
                <div className="h-36 w-1 bg-neutral-700 relative mx-auto my-1 flex items-center"> <span className="animate-bounce h-5 w-3 bg-lime-500 block"></span> </div>
                <Company title="Front-end Developer" jobDescription={[
                    "Designed website layouts using Adobe Photoshop and utilized various WordPress page builders for site optimization.",
                    "Translated designs into responsive platforms using Bootstrap, ensuring compatibility across a range of devices.",
                    "Enhanced websites with dynamic animations using tools such as CSS, jQuery, Wow.Js, and Scroll Animation.",
                    "Prioritized speed optimization and implemented SEO best practices to improve site ranking and user experience.",
                    "Customized WordPress themes using PHP and seamlessly integrated specific plugins to enhance website functionality.",
                    "Developed user-centric hybrid mobile applications using the Ionic framework in conjunction with Angular.js."
                ]} company="Codeflies" duration="2016 - 2018" />
<div className="h-36 w-1 bg-neutral-700 relative mx-auto my-1 flex items-center"> <span className="animate-bounce h-5 w-3 bg-lime-500 block"></span> </div>
                <Company title="Sr Front-End Developer & Team Lead" jobDescription={[
                    "Specialized in designing custom WordPress themes using PHP and crafting Shopify themes utilizing Liquid programming and Shopify APIs.",
                    "Transformed designs from platforms like Photoshop and Figma into pixel-perfect, responsive websites using Bootstrap and Tailwind CSS frameworks.",
                    "Animated web elements to enhance user engagement using technologies such as CSS, Wow.Js, and GreenSock.",
                    "Modernized traditional HTML websites by transitioning them to React and Next.js frameworks, integrating with headless CMS like Strapi.",
                    "Prioritized speed optimization strategies to improve website performance and enhance SEO rankings.",
                    "Managed team operations, mentored new members, and ensured adherence to project timelines.",
                    "Worked in unison with backend, design, and testing teams to deliver superior-quality products to clients.",
                    "Actively sought and integrated emerging technologies and tools to enhance team efficiency and end products."
                ]} company="OgreLogic" duration="2018 - 2022" />
                <div className="h-36 w-1 bg-neutral-700 relative mx-auto my-1 flex items-center"> <span className="animate-bounce h-5 w-3 bg-lime-500 block"></span> </div>
                <Company title="Senior Executive" jobDescription={[
                    "Transformed Zeplin designs into pixel-perfect Vue.js components ensuring fidelity and functional accuracy.",
                    "Employed CSS preprocessors with a focus on Sass to style and optimize Vue.js components.",
                    "Managed and executed tasks efficiently using Jira, aligning development with specified user stories.",
                    "Managed and maintained Git/GitHub repositories, ensuring consistent version tracking and code management.",
                    "Upheld codebase standards through PR code reviews and actively engaged in peer code evaluations.",
                    "Collaborated with development teams to ensure seamless project progression and consistent development practices."
                ]} company="Samsung SDS" duration="2022 - 2023" />
            </div>
        </section>
        
    )
}