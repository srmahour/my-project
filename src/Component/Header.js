import Logo from "./Logo";
import Navigation from "./Navigation";

 export default function Header(){
    return (
        <header className="bg-gradient-to-b from-neutral-500 absolute left-0 right-0 top-0 px-3 xl:px-0">
            <div className="container mx-auto flex p-2 items-center  justify-between">
                <Logo/>
                <Navigation/>
            </div>
        </header>
    )
 }