import { BellDot, LogOut, Search, User2 } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import { logout } from '@/apiCalls/auth'
import { toast } from 'sonner'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset <= 100 ? false : true)
        return () => (window.onscroll = null)
    }

    const handleLogout = async () => {
        await logout();
        toast.success("User Logged out!")
        setTimeout(() => {window.location.reload()}, 1000)
    }

    return (
        <div className={`fixed z-[49] p-2 px-4 w-full bg-gradient-to-b from-black/80 to-transparent ${isScrolled && "bg-black"}`}>
            <div className="">
                <div className="flex items-center justify-between">
                    <div className='flex items-center gap-10'>
                        <Link to={"/"} className='text-3xl font-bold text-red-600'>MoviX</Link>

                        <div className='flex items-center gap-4'>
                            <Link to={"/movies"} className="link">
                                <span>Movies</span>
                            </Link>
                            <Link to={"/series"} className="link">
                                <span>Series</span>
                            </Link>
                            <span>My list</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <Search className='icon' />
                        <BellDot className='icon' />
                        <div className='flex items-center gap-2'>
                            <User2 className='icon' />
                            {JSON.parse(localStorage.getItem("user")!).username}
                        </div>
                        <div className='text-red-600 bg-red-200 flex items-center gap-1 p-1.5 px-2 rounded-full text-sm cursor-pointer' onClick={handleLogout}>
                            <LogOut className='w-5 h-5'/>
                            Logout
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar