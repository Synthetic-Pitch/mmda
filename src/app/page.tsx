import Header from "./component/landingPage/md/header";
import Background from "./component/landingPage/XL/background";
import XL from "./component/landingPage/XL/XL";
import Backgrounds from "./component/landingPage/md/background"
import Header2 from "./component/landingPage/sm/header"
import Background2 from "./component/landingPage/sm/background";
export default function Home() {
    return (
        <div suppressHydrationWarning className="flex justify-center">
            <section className="hidden lg:block h-[100dvh] max-h-[1200px] w-full max-w-[1400px] relative">
                <XL/>
            </section>
            <Background/>
            <section className="hidden sm:block lg:hidden min-h-screen w-full">
                <Header/>
                <Backgrounds/>
            </section>
            <section className="sm:hidden min-h-[100dvh] w-full">
                <Header2/>
                <Background2/>
            </section>
        </div>
    );
}