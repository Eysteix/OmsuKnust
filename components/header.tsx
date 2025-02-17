"use client";
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Sun,Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
const link = [
  {
    name:"Home",
    route:"/"
  }
  ,
  {
    name:"Community",
    route:"/community"
  }
  ,
  {
    name:"About",
    route:"/about"
  }
  ,
  {
    name:"Gallery",
    route:"/gallery"
  }
  ,



]
const Header = () => {
  const [mobileToggle,setMobileToggle]= useState(false);
  const {theme,setTheme} = useTheme();
  const route = usePathname();
  return (
    <header className="w-full h-full  bg-accent  flex flex-col items-center  bg-opacity-30 transition-all ease-linear">
    <div className="top-section flex  justify-around w-full p-4 items-center">
    <div className="logo flex items-center">
        <Image src="/mawuliLogo.png" alt="logo" width={60} height={30} />
        <h3 className="font-bold hidden md:flex"><span className="text-primary">OMSU</span> KNUST</h3>
      </div>
      <nav>
        <ul className=" items-center gap-4 hidden lg:flex">
          {
            link.map((item)=>(
              <li key={item.name} className={`group transition-all ease-linear ${route == item.route ? "text-primary ":""}`} >
            <Link href={item.route} >{item.name}</Link>
            <hr className="ease-linear transition-all border w-0 group-hover:w-full group-hover:border-1 group-hover:border-primary" />
          </li>
            ))
          }
        </ul>

        
      </nav>
      <div className="buttons flex gap-2">
        <Button onClick={()=>( theme == "dark"? setTheme("light"):setTheme("dark"))}>
          {
            theme == "dark" ? (<Moon/>):(<Sun/>)
          }
        </Button>
        <Button onClick={()=> (mobileToggle == false ? (setMobileToggle(true)):(setMobileToggle(false))) }>
        {
            mobileToggle == false ? (<Menu/>):(<X className="text-red-500" size={40}/>)
          }
        </Button>
      </div>
    </div>
    <div className="bottom-section w-full">
    <nav className="mobile text-left  w-full ">
      <ul className={`${mobileToggle ? " flex  w-full h-full flex-col p-3  bg-accent " : "hidden" } flex gap-2 `}>
          {
            link.map((item)=>(
              <li key={item.name} className={`group transition-all ease-linear w-full p-3 rounded-lg hover:bg-card  ${route == item.route ? "text-primary ":""}`} >
            <Link href={item.route} >{item.name}</Link>
          </li>
            ))
          }
        </ul>
      </nav>
    </div>

    </header>
  )
}

export default Header