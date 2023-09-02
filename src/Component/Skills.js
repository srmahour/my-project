import knowledge from '../knowledge.svg'
import Skill from './Skill'

export default function Skills(){
    return(
        <section>
            <div className="container mx-auto p-4 md:max-w-4xl md:px-0">
                <h2 className='text-white text-xl mb-2'>Skills</h2>
                <div className='flex justify-between'>
                    <div className='h-full w-1/2 aspect-square overflow-y-scroll'>
                        <Skill title="Language" tools={["HTML", "CSS/CSS3", "JavaScript", "TypeScript"]} />

                        <Skill title="Libraries" tools={["React", "jQuery", "Fabric.js", "D3.js"]} />

                        <Skill title="JS Frameworks" tools={["Vue", "Angular"]} />
                       
                        <Skill title="CSS Frameworks" tools={["Bootstrap 3/4/5", "Tailwind CSS", "SCSS"]} />

                        <Skill title="Static Site Generator" tools={["Next"]} />

                        <Skill title="CMS" tools={["WordPress", "Shopfiy"]} />

                        <Skill title="Other tools" tools={["Photoshop", "Zeplin", "Figma", "Jira", "Git"]} />  
                       
                    </div>
                    <img src={knowledge} alt="" className="w-1/2 mx-auto aspect-square" />
                </div>
            </div>
        </section>
    )
}