import Link from "next/link"

const WebcamComponent = () => {
  
  return (
    <div className='h-screen w-full'>
      <section className='hidden lg:flex flex-col min-h-screen'>
        <Link href={`/reclamation/1`}>START</Link>
      </section>
    </div>
  )
}

export default WebcamComponent