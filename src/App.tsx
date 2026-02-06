import { useState, useEffect } from 'react'
import iconDice from './assets/images/icon-dice.svg'
import patternDividerMobile from './assets/images/pattern-divider-mobile.svg';
import patternDividerDesktop from './assets/images/pattern-divider-desktop.svg';

interface NoResponse {
  reason: string;
}

function App() {

  const [No, setNo] = useState<NoResponse | null>(null);

  // Note: Advice is cached for 2 seconds. Any repeat-request within 
  // 2 seconds will return the same piece of advice.
 const [wait, setWait] = useState(false);
 

 const fetchNo = async () => {
  try {
    const res = await fetch(
      "https://naas.isalman.dev/no"
    );
    const data: NoResponse = await res.json();
    setNo(data);
  } catch (error) {
    console.error("Error fetching advice:", error);
  }
};


  useEffect(() => {
    fetchNo();
  }, []);

  


 const handleNewNo = () => {
  if (wait) return;

  setWait(true);        
  fetchNo ();

  setTimeout(() => {
    setWait(false);    
  }, 2000);
};

  return (
    <>
    

      <section className='sm:max-h-80 max-w-80 mx-auto p-10 bg-blue-900 px-6 grid place-items-center text-center rounded-md md:min-h-75 min-w-100 gap-6'>
        
        <blockquote className=' font-extrabold'>{No?.reason}</blockquote>
          <picture>
            <source media="(min-width: 768px)" srcSet={patternDividerDesktop} />
            <img src={patternDividerMobile} alt="Flowers" className="w-auto mx-auto bg-blue-900" />
          </picture>
         <button
  onClick={handleNewNo}
  disabled={wait}
  className={`h-10 w-10 rounded-full bg-green grid place-items-center
    transition duration-300
    hover:shadow-2xl hover:shadow-green-500/60
    hover:drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]
    ${wait ? "opacity-50 cursor-not-allowed" : ""}`}
>
  <img className="p-2" src={iconDice} alt="icon dice" />
</button>


      </section>

    </>
  )
}

export default App
