import { Link } from 'react-router-dom'
import Quuizimage from '../assets/Ikbal 5.png'
import Quuizimage2 from '../assets/Other 11.png'
import Quuizimage3 from '../assets/Badrun 5.png'
import Quuizimage4 from '../assets/Other 08.png'
import Quuizimage5 from '../assets/Marni 3.png'
import Quuizimage6 from '../assets/Other 15.png'
const Quiz=()=>{
  return (
    <div className="flex flex-col p-3 m-4 gap-4">
      <div className="flex flex-row m-4">
        <div className="flex">
          <div>
            <img src={Quuizimage} alt="stock-quiz" className="w-60 h-60" />
          </div>
          <div>
            <div style={{ marginRight: '500px' }}>
              <img src={Quuizimage2} alt="stock-quiz" className="w-60 h-60" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <h1>Filler text for joining quiz</h1>
          <Link to="/Fantasyquiz">
            <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
              Join Quiz
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-row m-4">
        <div className="flex">
          <div>
            <img src={Quuizimage4} alt="stock-quiz" className="w-60 h-60" />
          </div>
          <div>
            <div style={{ marginRight: '500px' }}>
              <img src={Quuizimage3} alt="stock-quiz" className="w-60 h-60" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center">
          <h1>Filler text for joining quiz</h1>
          <Link to="/Fantasyquiz1">
            <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
              Join Quiz
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-row m-4">
        <div className="flex">
          <div>
            <img src={Quuizimage5} alt="stock-quiz" className="w-60 h-60" />
          </div>
          <div>
            <div style={{ marginRight: '500px'}}>
              <img src={Quuizimage6} alt="stock-quiz" className="w-60 h-60" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center">
          <h1>Filler text for joining quiz</h1>
          <Link to="/Fantasyquiz2">
            <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
              Join Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
