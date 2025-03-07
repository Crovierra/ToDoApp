import Image from "next/image"
import Link from "next/link";

const Nav = () => {
    const loggedIn = false;

  return (
    <nav className="mb-2 w-full">
        <div className="flex flex-row justify-between items-center px-5 mt-5">
        <div>
            <Link href="/">
            <Image
            src="/image/to-do-list.png"
            alt="To Do List Logo"
            width={50}
            height={50}
            />
            </Link>
        </div>
        <div>
            { loggedIn ? (
                <button
                className="btn bg-green-300 rounded-2xl h-10 w-24 cursor-pointer drop-shadow-sm hover:bg-green-500"
                href="/"
                >Sign Out</button>
                ) : (
                <div className="flex flex-row gap-3">
                <button 
                className="btn bg-green-300 rounded-2xl h-10 w-24 cursor-pointer drop-shadow-sm hover:bg-green-500"
                href="/login"
                >
                <Link href="/login">Login</Link>
                </button>
                <button 
                className="btn text-white bg-gray-700 rounded-2xl h-10 w-24 cursor-pointer drop-shadow-sm hover:bg-black"
                href="/login"
                >
                <Link href="/register">Register</Link>
                </button>
                </div>
                )}
            
        </div>
        </div>
    </nav>
  )
}

export default Nav