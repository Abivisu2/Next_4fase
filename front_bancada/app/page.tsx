
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Login() {
  return (
    <div className="bg-neutral-700 h-screen w-screen font-mono flex items-center justify-center">

      <div className="bg-gray-600 w-[30rem] h-[20rem] flex flex-col rounded-xl justify-center p-5 gap-5">
        <h1 className="text-center">Login</h1>
        <Input className="border border-black-600 rounded-lg p-1"  
        type="email" 
        placeholder="email"/>  

        <Input className="border border-black-600 rounded-lg p-1"  
        type="password" 
        placeholder="passward"/>     
        
        <Button>
        <Link className="borde- w-44 h-10 self-center border-gray-400" href="home">Logar</Link>
        </Button>
          
      </div>

    </div>
  )
}
