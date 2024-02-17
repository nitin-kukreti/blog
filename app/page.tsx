import Image from "next/image";
import { HomeConstants } from "./HomeConstants";
import { inter, poppins400, poppins600 } from "./layout";

export default function Home() {
  return ( 
    <main className="flex min-h-screen flex-col items-center  justify-between gap-10 py-20 overscroll-x-none">
     <div className="flex flex-col-reverse items-center md:items-start  lg:flex-row justify-center gap-2">
      <div className="flex flex-col p-2 min-w-[365px] max-w-[600px]">
        <h1 className={poppins600.className+ " text-[40px] leading-[60px] md:text-[86px] md:leading-[100px]  "}>{HomeConstants.HeroSection.H11}</h1>
          <h1 className={poppins600.className+ " text-[40px] leading-[60px] md:text-[86px] md:leading-[100px]"}>{HomeConstants.HeroSection.H12} </h1>
          <h2 className={poppins600.className+ " text-[20px] leading-[30px] md:leading-[70px]    md:text-[48px] md:leading-tight-[60px]"}>{HomeConstants.HeroSection.h21}</h2>
          <p className={"text-[20px] leading-[40px]   "+poppins400.className}>{HomeConstants.HeroSection.p1}</p>
      </div>
      <Image alt="Hero Image"  src={'/nitinKukretiHeroImage.png'} className="rotate-[-29.546deg] rounded-full shrink-0" height={350.929} width={350.909}/>
     </div>
     <div className={"flex text-center "+ inter.className}>
      {HomeConstants.HeroSection.p2}
     </div>
    </main>
  );
}
