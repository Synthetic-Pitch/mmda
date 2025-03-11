import Background from "./component/landingPage/XL/background";
import XL from "./component/landingPage/XL/XL";


export default function Home() {
  return (
    <div >
      <section className="hidden lg:block relative h-[100dvh] w-full overflow-hidden">
        <XL />
        <Background/>
      </section>
    </div>
  );
}
