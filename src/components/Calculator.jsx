import React, { useState } from 'react'

const Calculator = () => {
    const [result, setResult] = useState('');
    const handleClick = (e) => {
        e.preventDefault();
        setResult(result.concat(e.target.name));
    }
    
    const clear = () => setResult("");
    const backSpace = () => setResult(result.slice(0, result.length - 1));
    const sin = () => setResult((Math.sin(+result)).toString());
    const cos = () => setResult((Math.cos(+result)).toString());
    const tan = () => setResult((Math.tan(+result)).toString());
    const sqrt = () => setResult((Math.sqrt(+result)).toString());
    const powOfTwo = () => setResult((Math.pow(+result, 2)).toString());
    const powOfThree = () => setResult((Math.pow(+result, 3)).toString());
    const pi = () => setResult((result*3.14159265359).toString());

    const fact = () => {
      let fact=1, num, i=1;
      num = result;
      while (i <= num){
        fact *=i;
        i++;
      }
      setResult((fact).toString());
    }
    const calculate = () => setResult(eval(result).toString());

  return (
    <div>
      <h2 className="text-rose-500 text-3xl font-bold text-center pt-6">
        Scientific Calculator
      </h2>
      <div className="flex items-center justify-center md:p-6 p-4">
        <div className="flex flex-col md:p-4 p-2 h-fit text-md bg-gray-100 shadow-xl rounded-xl justify-center">
          <div className="screen mb-6">
            <input
              type="text"
              value={result}
              placeholder='00.00'
              className="w-full h-16 p-2 outline-none font-bold text-2xl text-gray-600 placeholder:text-gray-600 placeholder:font-semibold text-right border border-gray-600 rounded shadow-sm"
              readOnly
            />
          </div>
          <div className="row flex justify-center mb-4 gap-4">
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={sin} name="sin" className="w-full">SIN</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={cos} name="cos" className="w-full">COS</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={tan} name="tan" className="w-full">TAN</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-red-500 text-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={backSpace} id="backspace" className="w-full">DEL</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-red-500 text-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={clear} id="clear" className="w-full">AC</button>
            </div>
          </div>
          <div className="row flex justify-center mb-4 gap-4">
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={powOfThree} name="^3" className="w-full">
                x<sup>3</sup>
              </button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={fact} name="!" className="w-full">x!</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={handleClick} name="(" className="w-full">(</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={handleClick} name=")" className="w-full">)</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={handleClick} name="/" className="w-full">&divide;</button>
            </div>
          </div>
          <div className="row flex justify-center mb-4 gap-4">
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={powOfTwo} name="^2" className="w-full">
                x<sup>2</sup>
              </button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={handleClick} name="7" className="w-full">7</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={handleClick} name="8" className="w-full">8</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={handleClick} name="9" className="w-full">9</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={handleClick} name="*" className="w-full">&times;</button>
            </div>
          </div>
          <div className="row flex justify-center mb-4 gap-4">
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={sqrt} name="√" className="w-full">√x</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={handleClick} name="4" className="w-full">4</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={handleClick} name="5" className="w-full">5</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={handleClick} name="6" className="w-full">6</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={handleClick} name="-" className="w-full">&ndash;</button>
            </div>
          </div>
          <div className="row flex justify-center mb-4 gap-4">
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={pi} name="π" value="π" className="w-full">π</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={handleClick} name="1" value="1" className="w-full">1</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={handleClick} name="2" value="2" className="w-full">2</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={handleClick} name="3" className="w-full">3</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={handleClick} name="+" className="w-full">+</button>
            </div>
          </div>
          <div className="row flex justify-center mb-2 gap-4">
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={handleClick} name="0" className="w-full">0</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={handleClick} name="00" className="w-full">00</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={handleClick} name="000" className="w-full">000</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-white border border-gray-300 hover:shadow-inner shadow-md rounded-md">
              <button onClick={handleClick} name="." className="w-full">.</button>
            </div>
            <div className="btn md:w-16 w-14 py-2 bg-red-500 text-white hover:shadow-inner border border-gray-300 shadow-md rounded-md">
              <button onClick={calculate} className="w-full">=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
