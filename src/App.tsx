import { useState } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");
  const [info, setInfo] = useState({});
  
  const handleGetInfo = async () => {
    try {
      const resp =  await axios.get('http://192.168.1.14:3000/api/v1');
      setInfo(resp.data)
    } catch (e) {
      console.log(e)
    }
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
