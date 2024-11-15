import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [info, setInfo] = useState({});
  console.log(url);
  const handleGetInfo = () => {
    console.log("handleGetInfo called");
    setInfo({msg: "Info Received"})
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline text-green-500 text-center bg-gray-100">
        Hello world!
      </h1>
      <br />
      <label>Url</label>
      <br />
      <input type="text" className="border" onChange={(e) => setUrl(e.target.value)}/>
      <button onClick={handleGetInfo} className="border ml-2">Get Info</button>

      {info && <div>
        {JSON.stringify(info)}
        </div>}

    </>
  );
}

export default App;
