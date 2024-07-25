import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-gradient-to-r from-blue-100 to-cyan-100'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/Home'>
          <h1 className='font-bold text-sm mr-4 sm:text-xl flex flex-wrap'>
            <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>EstateEase</span>
          </h1>
        </Link>            

        <form 
        className='bg-slate-100 p-3 rounded-lg flex gap-3 items-center'
        >
            <input
          type='text'
          placeholder='Search...'
          className='bg-transparent focus:outline-none w-24 sm:w-64'
         />
            <button>
             <FaSearch className='text-slate-600' />
            </button>
        </form>

        <ul className='flex gap-5 items-center'>
          <Link to='/Home'>
            <li className='font-bold text-sm sm:text-lg  hidden sm:inline bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>
              Home
            </li>
          </Link>

          <Link to='/About'>
            <li className='font-bold text-sm sm:text-lg  hidden sm:inline bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent  '>
              About
            </li>
          </Link>

          <Link to='/Signin'>
          <li className='font-bold text-sm sm:text-lg   bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent hidden sm:inline  '>
          Sign in</li>
          </Link>
            
          
      
      </ul>
      </div>  
    </header>
  )
}
