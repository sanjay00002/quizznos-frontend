import { Link } from 'react-router-dom';
import { useState } from 'react'; // Import useState
import { useSelector } from 'react-redux';
import logoImage from '../assets/quizzo_logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // You'll need to import menu icons

const Header = () => {
    const { currentUser } = useSelector((state) => state.user);

    const [menuOpen, setMenuOpen] = useState(false); // Initialize a state for the menu

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menu state
    }

    return (
        <>
        <header className='bg-slate-200 shadow-md'>
            <div className='max-w-6xl mx-auto p-3'>
                <div className='flex justify-between items-center'>
                    <Link to='/'>
                        <img src={logoImage} alt="Quizzo" className='h-10 w-100 object-cover cursor-pointer self-center mt-2' />
                    </Link>
                    {menuOpen ? ( // Show the menu if menuOpen is true
                        <div className='block sm:hidden'>
                            <button onClick={toggleMenu} className='text-slate-700 hover:underline'>
                                <FaTimes /> {/* Close icon */}
                            </button>
                            <ul className='flex flex-col gap-y-4'>
                                <Link to='/'>
                                    <li className='text-slate-700 hover:underline'>Home</li>
                                </Link>
                                <Link to='/about-us'>
                                    <li className='text-slate-700 hover:underline'>About us</li>
                                </Link>
                                <Link to='/subscriptions'>
                                    <li className='text-slate-700 hover:underline'>Subscriptions</li>
                                </Link>
                                <Link to='/privacy-policy'>
                                    <li className='text-slate-700 hover:underline'>Privacy Policy</li>
                                </Link>
                                <Link to='/terms-conditions'>
                                    <li className='text-slate-700 hover:underline'>Terms & Conditions</li>
                                </Link>
                                <Link to='/profile'>
                                    {currentUser ? (
                                        <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />
                                    ) : (
                                        <li className='text-slate-700 hover:underline'>Sign in</li>
                                    )}
                                </Link>
                            </ul>
                        </div>
                    ) : (
                        <div className='sm:hidden'>
                            <button onClick={toggleMenu} className='text-slate-700 hover:underline'>
                                <FaBars /> {/* Menu icon */}
                            </button>
                        </div>
                    )}
                    <div className='hidden sm:flex gap-x-4'>
                        <Link to='/'>
                            <li className='text-slate-700 hover:underline list-none'>Home</li>
                        </Link>
                        <Link to='/about-us'>
                            <li className='text-slate-700 hover:underline list-none'>About us</li>
                        </Link>
                        <Link to='/subscriptions'>
                            <li className='text-slate-700 hover:underline list-none'>Subscriptions</li>
                        </Link>
                        <Link to='/privacy-policy'>
                            <li className='text-slate-700 hover:underline list-none'>Privacy Policy</li>
                        </Link>
                        <Link to='/terms-conditions'>
                            <li className='text-slate-700 hover:underline list-none'>Terms & Conditions</li>
                        </Link>
                        <Link to='/profile'>
                            {currentUser ? (
                                <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />
                            ) : (
                                <li className='text-slate-700 hover:underline list-none'>Sign in</li>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;



// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import logoImage from '../assets/quizzo_logo.png';
// import { FaBars } from 'react-icons/fa'; // You'll need to import a menu icon

// const Header = () => {
//     const { currentUser } = useSelector((state) => state.user);

//     const toggleMenu = () => {
//         // Add code to handle the menu toggle (e.g., show/hide the menu)
//     }

//     return (
//         <>
//         <header className='bg-slate-200 shadow-md'>
//             <div className='max-w-6xl mx-auto p-3'>
//                 <div className='flex justify-between items-center'>
//                     <Link to='/'>
//                         <img src={logoImage} alt="Quizzo" className='h-10 w-100 object-cover cursor-pointer self-center mt-2' />
//                     </Link>
//                     <div className='hidden sm:flex gap-x-4'>
//                         <Link to='/'>
//                             <li className='text-slate-700 hover:underline'>Home</li>
//                         </Link>
//                         <Link to='/about-us'>
//                             <li className='text-slate-700 hover:underline'>About us</li>
//                         </Link>
//                         <Link to='/subscriptions'>
//                             <li className='text-slate-700 hover:underline'>Subscriptions</li>
//                         </Link>
//                         <Link to='/privacy-policy'>
//                             <li className='text-slate-700 hover:underline'>Privacy Policy</li>
//                         </Link>
//                         <Link to='/terms-conditions'>
//                             <li className='text-slate-700 hover:underline'>Terms & Conditions</li>
//                         </Link>
//                         <Link to='/profile'>
//                             {currentUser ? (
//                                 <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />
//                             ) : (
//                                 <li className='text-slate-700 hover:underline'>Sign in</li>
//                             )}
//                         </Link>
//                     </div>
//                     <div className='sm:hidden'>
//                         <button onClick={toggleMenu} className='text-slate-700 hover:underline'>
//                             <FaBars /> {/* Menu icon */}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </header>
//         </>
//     );
// }

// export default Header;


// import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import logoImage from '../assets/quizzo_logo.png'


// const Header = () => {

//     const { currentUser } = useSelector((state) => state.user)
    
//   return (
//     <>
//     <header className='bg-slate-200 shadow-md'>
//         <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
//             <Link to='/'>
//                 <img src={logoImage} alt="Quizzo" className=' h-10 w-100 object-cover cursor-pointer self-center mt-2'  />
//             </Link>
//         <ul className=' flex gap-x-4'>
//             <Link to='/'>
//                 <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
//             </Link>
//             <Link to='/about-us'>
//                 <li className='hidden sm:inline text-slate-700 hover:underline'>About us</li>
//             </Link>
//             <Link to='/subscriptions'>
//                 <li className='hidden sm:inline text-slate-700 hover:underline'>Subscriptions</li>
//             </Link>
//             <Link to='/privacy-policy'>
//                 <li className='hidden sm:inline text-slate-700 hover:underline'>Privacy Policy </li>
//             </Link>
//             <Link to='/terms-conditions'>
//                 <li className='hidden sm:inline text-slate-700 hover:underline'>Terms & Conditions</li>
//             </Link>
//             <Link to='/profile'>
//             {currentUser ? (
//                 <img className=' rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />
//             ) : (
//                 <li className='text-slate-700 hover:underline'>Sign in</li>
//             )}   
//             </Link>
//         </ul>
//         </div>
//     </header>
//     </>
//   )
// }

// export default Header