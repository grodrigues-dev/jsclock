import { useEffect } from 'react';
import './App.scss'


function App() {
  const hours = Array.from(new Array(12).keys());
  const sizeConst = window.screen.width >= 600 ? 250 : 100;

  useEffect(()=> {
    const interval = setInterval(()=> {
      const dataHour = new Date().toLocaleTimeString([], { hour: "2-digit",  hour12: true}).replace(/\D/g,'');
      const dataMinutes = new Date().getMinutes();
      const dataSeconds = new Date().getSeconds();
      document.querySelector("#minutos").style.transform = `rotate(${dataMinutes * 6 + 270}deg)`;
      document.querySelector("#hora").style.transform = `rotate(${dataHour * 30 + (dataMinutes / 2) + 270}deg)`;
      document.querySelector("#second").style.transform = `rotate(${dataSeconds * 6 + 270}deg)`;
    }, 1000);
    return () => clearInterval(interval);
  },[]);

  return (
    <>
      <div className="container">
        <div className='border'>
          <div className='frame'>
            <div className='clock'>
              <div className='hour' id="hora"></div>
              <div id="minutos" className="minute"></div>
              <div id="second"></div>
              <div className='pine'></div>
              {hours.map((item) => {
                let coordX = (Math.cos((item * 30 ) * Math.PI / 180) * sizeConst) + sizeConst;
                  let coordY = Math.sin((item * 30) * Math.PI / 180) * sizeConst + sizeConst ;
                  return (
                    <section style={{top: coordY, left: coordX}}>{item === 0 ? '12' : item }</section>
                    )}
                  )}
              </div>
          </div>
        </div>
        </div>
    </>
  );
}

export default App;
