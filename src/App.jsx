function App() {

  return (
    <>
      <div className="w-screen h-screen bg-main flex flex-col justify-center items-center">
        <h1 className="text-4xl text-indigo-50 font-bold">Calculator</h1>

        <div className="bg-indigo-50 h-150 w-110 p-8 rounded-3xl">
          <form>
            <div>
              <input type="text" className="h-45 w-full outline-none bg-indigo-100 rounded-xl" />
            </div>
            <div className="pt-5 grid grid-cols-4 gap-2">
              <input className="h-15 bg-indigo-100 rounded-xl" type="button" value="AC"></input>
              <input className="h-15 bg-indigo-100 rounded-xl" type="button" value="DE"></input>
              <input className="h-15 bg-indigo-100 rounded-xl" type="button" value="."></input>
              <input className="h-15 bg-main rounded-xl" type="button" value="÷"></input>

              <input className="h-15 bg-indigo-100 rounded-xl" type="button" value="7"></input>
              <input className="h-15 bg-indigo-100 rounded-xl" type="button" value="8"></input>
              <input className="h-15 bg-indigo-100 rounded-xl" type="button" value="9"></input>
              <input className="h-15 bg-main rounded-xl" type="button" value="×"></input>

              <input className="h-15 bg-indigo-100 rounded-xl" type="button" value="4"></input>
              <input className="h-15 bg-indigo-100 rounded-xl" type="button" value="5"></input>
              <input className="h-15 bg-indigo-100 rounded-xl" type="button" value="6"></input>
              <input className="h-15 bg-main rounded-xl" type="button" value="-"></input>

              <input className="h-15 bg-indigo-100 rounded-xl" type="button" value="1"></input>
              <input className="h-15 bg-indigo-100 rounded-xl" type="button" value="2"></input>
              <input className="h-15 bg-indigo-100 rounded-xl" type="button" value="3"></input>
              <input className="h-15 bg-main rounded-xl" type="button" value="+"></input>

              <input className="h-15 bg-indigo-100 rounded-xl" type="button" value="00"></input>
              <input className="h-15 bg-indigo-100 rounded-xl" type="button" value="0"></input>
              <input className="h-15 w-46 bg-main rounded-xl" type="button" value="="></input>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default App
