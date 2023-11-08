import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=" border-t-2 border-neutral-400 px-4 md:px-8 pt-3 pb-8 mx-auto max-w-screen-xl">

      <div className="md:flex">
        <div className="md:w-1/2">
          <h6 className="m-3 font-bold text-4xl">Feedback</h6>
          <p>Got questions? <br/> Reach us at quizzo@email.com</p>
        </div>

        <div className="md:flex md:w-1/4">
          <div>
            <h6 className="font-bold text-xl">Menu</h6>
            <div>
              <Link to={"/"} className="flex">
                <span>Home</span>
              </Link>
              <Link to={"/about-us"} className="flex">
                <span>About us</span>
              </Link>
              <Link to={"/contact-us"} className="flex">
                <span>Contact Us</span>
              </Link>
              <Link to={"/faq"} className="flex">
                <span>FAQs</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="md:flex md:w-1/4">
          <div>
            <h6 className="font-bold text-xl">Social</h6>
            <div>
              <Link to={"/"} className="flex">
                <span>Twitter</span>
              </Link>
              <Link to={"/about-us"} className="flex">
                <span>Instagram</span>
              </Link>
              <Link to={"/contact-us"} className="flex">
                <span>Facebook</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="md:flex md:w-1/4">
          <div>
            <h6 className="font-bold text-xl">Legal</h6>
            <div>
              <Link to={"/"} className="flex">
                <span>Terms of Use</span>
              </Link>
              <Link to={"/about-us"} className="flex">
                <span>Privacy Policy</span>
              </Link>
              <Link to={"/contact-us"} className="flex">
                <span>Legal Notice</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;















// import {Link} from 'react-router-dom'


// const Footer = () => {
//   return (
//     <div className="flex flex-row bg-slate-200 border-t-2 border-neutral-400 px-8 pt-3 pb-8 mx-auto mw-auto" style={{ height: 'auto' }}>

//       <div className='basis-1/2'>
//         <h6 className="m-3 font-bold text-4xl">Feedback</h6>
//         <p className="">Got questions? <br/> Reach us at quizzo@email.com</p>
//       </div>

//       <div className='flex flex-col basis-1/4'>
//         <h6 className="font-bold text-xl">Menu</h6>
//         <div >
//         <Link to={"/"} >
//           <span className='flex' >Home</span>
//         </Link>
//         <Link to={"/about-us"} >
//           <span className='flex' >About us</span>
//         </Link>
//         <Link to={"/contact-us"} >
//           <span className='flex' >Contact Us</span>
//         </Link>
//         <Link to={"/faq"} >
//           <span className='flex' >FAQs</span>
//         </Link>
//         </div>
//       </div>

//       <div className='flex flex-col basis-1/4'>
//         <h6 className="font-bold text-xl">Social</h6>
//         <div >
//         <Link to={"/"} >
//           <span className='flex' >Twitter</span>
//         </Link>
//         <Link to={"/about-us"} >
//           <span className='flex' >Instagram</span>
//         </Link>
//         <Link to={"/contact-us"} >
//           <span className='flex' >Facebook</span>
//         </Link>
//         </div>
//       </div>
      
//       <div className='flex flex-col basis-1/4'>
//         <h6 className=" font-bold text-xl">Legal</h6>
//         <div >
//         <Link to={"/"} >
//           <span className='flex' >Terms of Use</span>
//         </Link>
//         <Link to={"/about-us"} >
//           <span className='flex' >Privace Policy</span>
//         </Link>
//         <Link to={"/contact-us"} >
//           <span className='flex' >Legal Notice</span>
//         </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer