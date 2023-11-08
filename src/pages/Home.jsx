import { useState } from 'react';
import About from './About.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import OurValues from './OurValues.jsx';
import Quiz from './Quiz.jsx';
import stockimage from '../assets/Stock_Market.png';

const Home = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleShowSignIn = () => {
    setShowSignIn(true);
  };

  const handleShowSignUp = () => {
    setShowSignIn(false);
  };

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <div className="flex flex-col md:flex-row lg:flex-row">
        <div className="w-full md:w-1/2 lg:w-1/2 md:mr-4 lg:mr-4 mb-4 md:mb-0 lg:mb-0">
          <div className="flex justify-center gap-4">
            <button type="button" className={`flex items-center justify-center border-2 border-slate-400 bg-red-100 text-black p-3 w-60 rounded-full opacity-100 hover:opacity-80 ${showSignIn ? 'bg-red-100 opacity-100' : ''}`} onClick={handleShowSignIn} >Login</button>
            <button type="button" className={`flex items-center justify-center border-2 border-slate-400 bg-red-100 text-black p-3 w-60 rounded-full opacity-100 hover:opacity-90 ${!showSignIn ? 'bg-red-100 opacity-100' : ''}`} onClick={handleShowSignUp} >Register</button>
          </div>
          <div>{showSignIn ? <SignIn /> : <SignUp />}</div>
        </div>
        <div className="md:w-1/2 lg:w-1/2">
          <img src={stockimage} alt="stock-quiz" className="w-full h-auto" />
        </div>
      </div>
      <About />
      <OurValues />
      <Quiz />
    </div>
  );
};

export default Home;




// import About from "./About.jsx"
// import SignIn from "./SignIn.jsx"
// import OurValues from './OurValues.jsx'
// import Quiz from "./Quiz.jsx"
// import stockimage from '../assets/Stock_Market.png'

// const Home = () => {
//   return (
//     <div>
//       <div className="flex">
//         <div className=" mx-auto  w-auto">
//         <SignIn/>
//         </div>
//         <div>
//           <img src={stockimage} alt="stock-quiz"  />
//         </div>
//       </div>
//         <About/>
//         <OurValues />
//         <Quiz/>
//     </div>
//   )
// }

// export default Home



// import About from "./About.jsx";
// import SignIn from "./SignIn.jsx";
// import SignUp from './SignUp.jsx'
// import OurValues from './OurValues.jsx';
// import Quiz from "./Quiz.jsx";
// import stockimage from '../assets/Stock_Market.png';



// const Home = () => {
//   return (
//     <div className="p-4 md:p-8 lg:p-12">
//       <div className="flex flex-col md:flex-row lg:flex-row">
//         <div className="w-full md:w-1/2 lg:w-1/2 md:mr-4 lg:mr-4 mb-4 md:mb-0 lg:mb-0">
//         <div className="flex justify-center gap-4">
//             <button disabled  type='button' className='ml-0 md:ml-1 lg:ml-1 flex items-center justify-center border-2 border-slate-400 bg-red-100 text-black p-3 md:w-60 lg:w-60 rounded-full hover:opacity-80'>Login</button>
//             <button disabled  type='button' className='ml-0 md:ml-1 lg:ml-1 flex items-center justify-center border-2 border-slate-400 bg-red-100 text-black p-3 md:w-60 lg:w-60 rounded-full hover:opacity-80'>Register</button>
//           </div>
//           <div>
//           <SignIn />
//           </div>
//           <div>
//           <SignUp />
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 lg:w-1/2">
//           <img src={stockimage} alt="stock-quiz" className="w-full h-auto" />
//         </div>
//       </div>
//       <About />
//       <OurValues />
//       <Quiz />
//     </div>
//   );
// };

// export default Home;

// import About from "./About.jsx";
// import SignIn from "./SignIn.jsx";
// import SignUp from './SignUp.jsx';
// import OurValues from './OurValues.jsx';
// import Quiz from "./Quiz.jsx";
// import stockimage from '../assets/Stock_Market.png';

// const Home = () => {
//   return (
//     <div className="p-4 md:p-8 lg:p-12">
//       <div className="flex flex-col md:flex-row lg:flex-row">
//         <div className="w-full md:w-1/2 lg:w-1/2 md:mr-4 lg:mr-4 mb-4 md:mb-0 lg:mb-0">
//           <div className="flex justify-center gap-4">
//             <button disabled type='button' className='flex items-center justify-center border-2 border-slate-400 bg-red-100 text-black p-3 w-60 rounded-full hover:opacity-80'>Login</button>
//             <button disabled type='button' className='flex items-center justify-center border-2 border-slate-400 bg-red-100 text-black p-3 w-60 rounded-full hover:opacity-80'>Register</button>
//           </div>
//           <div>
//             <SignIn />
//           </div>
//           <div>
//             <SignUp />
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 lg:w-1/2">
//           <img src={stockimage} alt="stock-quiz" className="w-full h-auto" />
//         </div>
//       </div>
//       <About />
//       <OurValues />
//       <Quiz />
//     </div>
//   );
// };

// export default Home;