import Background from "./component/landingPage/XL/background";
import XL from "./component/landingPage/XL/XL";


export default function Home() {
    return (
        <div suppressHydrationWarning className="flex justify-center">
            <section className="hidden lg:block h-[100dvh] max-h-[1200px] w-full max-w-[1400px] relative">
                <XL/>
            </section>
            <Background/>
        </div>
    );
}
