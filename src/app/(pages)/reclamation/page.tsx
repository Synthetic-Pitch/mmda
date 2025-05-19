import Link from "next/link"
import Image from "next/image"
import img1 from '../../../../public/assets/icons/mmda-icon.png'
import img2 from '../../../../public/assets/icons/reclamation-2.png'
import img3 from '../../../../public/assets/icons/reclamation-1.png'
import Menu from "@/app/component/reclamation/xl/menu"


const WebcamComponent = () => {
  
  return (
    <div className='h-screen w-full bg-[#94A6FF]'>
      <section className='hidden lg:flex flex-col justify-center min-h-screen'>
        <header className="absolute top-[2%] right-[1%] h-[6vh] w-[5vw] ">
          <Menu/>
        </header>

        <main className="relative z-20 h-[90vh] w-[50vw] ml-[6vw] bg-[rgb(174,188,255)] flex flex-col shadow-[0px_2vh_2vw_rgb(0,0,0,.6)]" >

          <header className="h-[20%] w-full flex items-center gap-[4%] px-[6%] select-none">
            <Image src={img1} alt="" className="h-[8vw] w-[8vw]" draggable={false}/>
            <Image src={img2} alt="" className="h-[8vw] w-[8vw]" draggable={false}/>
            <Image src={img3} alt="" className="h-[8vw] w-[8vw]" draggable={false}/>
          </header>
          <h1 className="text-[2.5vw] font-poppins font-bold px-[2vw] select-none" draggable={false}>
            REQUIREMENTS TO PROCESS VEHICLE RECLAMATION
          </h1>

          <section className="flex flex-col px-[2vw] font-poppins gap-[2vw] mt-[4%] select-none">
            <span className="text-[1.2vw]">valid government ID</span>
            <span className="text-[1.2vw]">Proof of Vehicle Ownership (CR & OR)</span>
            <span className="text-[1.2vw]">Towing Receipt or Violation Ticket</span>
            <span className="text-[1.2vw]">valid Driver&apos;s License</span>
          </section>

          <footer className="flex-grow p-[2vw] flex flex-col items-end justify-end gap-[10%] ">
            <h2 className="text-[1.5vw] font-poppins font-bold">Atty. Chm. Romando &quot;Don&quot; S. Artes</h2>
            <Link href={'/reclamation/1'} className="bg-[#D9D9D9] font-poly px-[1.6vw] py-[.6vw] text-[1.2vw] rounded-[20vw]">start submisssion</Link>
          </footer>
        </main>
        <figure className="absolute top-[20%] h-[20vh] w-full bg-[#D9D9D9]"/>
      </section>
    </div>
  )
}

export default WebcamComponent