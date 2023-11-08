import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase.js'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice.js'
import { useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import {BsApple} from 'react-icons/bs'

const OAuth = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)

            const result = await signInWithPopup(auth, provider)

            const res = await fetch('/api/auth/google', {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: result.user.displayName, email: result.user.email, photo: result.user.photoURL})
            })

            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate('/')
        } catch (error) {
            console.log("Could not sign in with google", error);
        }
    }

    return (
        <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center mx-auto'>
            <button
                onClick={handleGoogleClick}
                type='button'
                className='mb-2 md:mr-1 lg:mr-1 md:mb-0 lg:mb-0 flex items-center justify-center border-2 border-slate-400 bg-red-100 text-black p-3 md:w-60 lg:w-60 rounded-full hover:opacity-80'
            >
                <FcGoogle className='flex m-1' size={30}/> Google
            </button>
            <button
                disabled
                onClick={handleGoogleClick}
                type='button'
                className='ml-0 md:ml-1 lg:ml-1 flex items-center justify-center border-2 border-slate-400 bg-red-100 text-black p-3 md:w-60 lg:w-60 rounded-full hover:opacity-80'
            >
                <BsApple className='flex flex-col m-1' size={30}/> Apple
            </button>
        </div>
    );


}

export default OAuth







//   return (
//     <div className='flex justify-between text-center mx-auto'>
//     <button onClick={handleGoogleClick} type='button' className=' mx-auto mr-1 flex items-center justify-center border-2 border-slate-400 bg-red-100 text-black p-3 w-60 rounded-full  hover:opacity-80' > <FcGoogle className='flex m-1' size={30}/> Google</button>
//     <button disabled onClick={handleGoogleClick} type='button' className=' mx-auto ml-1 flex items-center justify-center border-2 border-slate-400 bg-red-100 text-black p-3 w-60 rounded-full  hover:opacity-80' > <BsApple className='flex flex-col m-1' size={30}/>Apple</button>
//     </div>
//   )



// return (
//     <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center mx-auto'>
//         <button
//             onClick={handleGoogleClick}
//             type='button'
//             className='mb-2 md:mr-1 lg:mr-1 md:mb-0 lg:mb-0 flex items-center justify-center border-2 border-slate-400 bg-red-100 text-black p-3 w-full md:w-60 lg:w-60 rounded-full hover:opacity-80'
//         >
//             <FcGoogle className='flex m-1' size={30}/> Google
//         </button>
//         <button
//             disabled
//             onClick={handleGoogleClick}
//             type='button'
//             className='ml-0 md:ml-1 lg:ml-1 flex items-center justify-center border-2 border-slate-400 bg-red-100 text-black p-3 w-full md:w-60 lg:w-60 rounded-full hover:opacity-80'
//         >
//             <BsApple className='flex flex-col m-1' size={30}/> Apple
//         </button>
//     </div>
// );

// return (
//     <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center mx-auto'>
//         <button
//             onClick={handleGoogleClick}
//             type='button'
//             className='mb-2 md:mr-1 lg:mr-1 md:mb-0 lg:mb-0 flex items-center justify-center border-2 border-slate-400 bg-red-100 text-black p-3 w-60 md:w-60 lg:w-60 rounded-full hover:opacity-80'
//         >
//             <FcGoogle className='flex m-1' size={30}/> Google
//         </button>
//         <button
//             disabled
//             onClick={handleGoogleClick}
//             type='button'
//             className='ml-0 md:ml-1 lg:ml-1 flex items-center justify-center border-2 border-slate-400 bg-red-100 text-black p-3 w-60 md:w-60 lg:w-60 rounded-full hover:opacity-80'
//         >
//             <BsApple className='flex flex-col m-1' size={30}/> Apple
//         </button>
//     </div>
// );