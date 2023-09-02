import ExpertiseCircle from "./ExpertiesCircle";

export default function Expertise(){
    return(
        <section className="p-4 bg-neutral-800">
            <div className="container mx-auto md:max-w-4xl">
                <h2 className="text-white text-xl mb-2">Expertise</h2>
                <div className="flex w-full flex-wrap justify-around">
                   <ExpertiseCircle title="Design Conversion" />
                   <ExpertiseCircle title="Theme Development" />
                   <ExpertiseCircle title="Responsive Design" />
                   <ExpertiseCircle title="Speed Optimization" />
                    
                </div>
            </div>
        </section>
    )
}