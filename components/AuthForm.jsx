import Link from "next/link";
import CustomInput from "./CustomInput"

const AuthForm = ({title}) => {
  return (
    <div className="flex flex-col justify-center items-center w-screen px-[5%]">
        {title === "Register" ? (
            <>
            <div className="flex flex-col justify-center gap-4 items-center w-[30%]">
            <CustomInput 
            type="text" 
            name="name"
            placeholder="What is your name ?" 
            label="Full Name"
            className="w-80"/>
            <CustomInput 
            type="tel" 
            name="phone" 
            placeholder="Input your phone number" 
            label="Phone Number"
            className="w-80"/>
            <CustomInput 
            type="password" 
            name="password" 
            placeholder="Create a password" 
            label="Password"
            className="w-80"/>
            <CustomInput 
            type="password" 
            name="2ndPassword" 
            placeholder="Re-enter your password" 
            label="Re-Type Password"
            className="w-80"/>
            </div>
            <div className="flex flex-col gap-4 items-center mt-4">
            <p>Already have an account ? <Link href="/login" className="text-blue-500">Login</Link></p>
            <button className="btn text-white bg-gray-700 rounded-2xl h-10 w-24 cursor-pointer drop-shadow-sm hover:bg-black">Register</button>
            </div>
            </>
            
        ) : (
            <>
            <div className="flex flex-col justify-center gap-4 items-center w-[30%]">
            <CustomInput 
            type="tel" 
            name="phone" 
            placeholder="Input your phone number" 
            label="Phone Number"
            className="w-80"/>
            <CustomInput 
            type="password" 
            name="password" 
            placeholder="Create a password" 
            label="Password"
            className="w-80"/>
            </div>
            <div className="flex flex-col gap-4 items-center mt-4">
            <p>Don't have an account ? <Link href="/register" className="text-blue-500">Register</Link></p>
            <button className="btn text-white bg-gray-700 rounded-2xl h-10 w-24 cursor-pointer drop-shadow-sm hover:bg-black">Login</button>
            </div>
            </>
        )}
        
    </div>
  )
}

export default AuthForm