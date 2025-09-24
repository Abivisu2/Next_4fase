
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sidebar } from "lucide-react";


export default function Home() {
  return (
    <div className="bg-neutral-700 h-screen w-screen font-mono flex items-center justify-center">

      
      <h1>Home</h1>
      
      <Sidebar/>

    </div>
  )
}
