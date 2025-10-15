import { useState } from "react";
import Button from "./Button";

function App() {
  const buttons = [
    { value: "AC", bg: "bg-indigo-100", text: "text-zinc-700" },
    { value: "DE", bg: "bg-indigo-100", text: "text-zinc-700" },
    { value: ".", bg: "bg-indigo-100", text: "text-zinc-700" },
    { value: "÷", bg: "bg-main", text: "text-white" },

    { value: "7", bg: "bg-indigo-100", text: "text-zinc-700" },
    { value: "8", bg: "bg-indigo-100", text: "text-zinc-700" },
    { value: "9", bg: "bg-indigo-100", text: "text-zinc-700" },
    { value: "×", bg: "bg-main", text: "text-white" },

    { value: "4", bg: "bg-indigo-100", text: "text-zinc-700" },
    { value: "5", bg: "bg-indigo-100", text: "text-zinc-700" },
    { value: "6", bg: "bg-indigo-100", text: "text-zinc-700" },
    { value: "-", bg: "bg-main", text: "text-white" },

    { value: "1", bg: "bg-indigo-100", text: "text-zinc-700" },
    { value: "2", bg: "bg-indigo-100", text: "text-zinc-700" },
    { value: "3", bg: "bg-indigo-100", text: "text-zinc-700" },
    { value: "+", bg: "bg-main", text: "text-white" },

    { value: "00", bg: "bg-indigo-100", text: "text-zinc-700" },
    { value: "0", bg: "bg-indigo-100", text: "text-zinc-700" },
    { value: "=", bg: "bg-main", text: "text-white w-46 text-3xl" },
  ];

  const[value, setValue] = useState("");
  const handleClick = (val) => {
    if(val === "AC") {
      setValue("");
    } else if(val === "DE") {
      setValue(value.slice(0, -1));
    } else if(val === "=") {
      try {
        const result = eval(value.replace("×", "*").replace("÷", "/"));
        setValue(result.toString());
      } catch {
        setValue("Error");
      }
    } else {
      setValue(value + val);
    }
  }

  return (
    <>
      <div className="w-screen h-screen bg-main flex flex-col justify-center items-center">

        <h1 className="text-4xl text-indigo-50 font-bold">Calculator</h1>

        <div className="bg-indigo-50 h-150 w-110 p-8 rounded-3xl">
          <form onSubmit={(e) => {
            e.preventDefault();
            handleButtonClick("=");
            }}>

            <div>
              <input readOnly type="text" value={value} className="h-45 w-full p-4 outline-none bg-indigo-100 rounded-xl text-right text-5xl text-main font-bold" />
            </div>

            <div className="pt-5 grid grid-cols-4 gap-2">
              {buttons.map((button, index) => (
                <Button 
                  key={index}
                  value={button.value}
                  bg={button.bg}
                  text={button.text}
                  onClick={() => handleClick(button.value)}
                  ></Button>
              ))}
            </div>

          </form>
        </div>
        <footer className="mt-4 text-center text-sm text-gray-500">
              <p>© Tjaša 2025 - RPO Vaja 1 </p>
        </footer>
      </div>
    </>
  )
}

export default App
