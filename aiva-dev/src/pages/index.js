import { useState } from "react";

export default function Home() {
  const [apiKey, setApiKey] = useState("");
  const API_URL = "https://api.openai.com/v1/chat/completions";

  async function sendRequest(){
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey,
      },
      body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": "Hello!"}]
      }),
    });
    const responseJson = await response.json();
    console.log("responseJson", responseJson);
  }


  
  return <div className="flex flex-col h-screen">
    <nav className="shadow p-2 flex flex-row justify-between items-center">
      <div className="text-xl font-bold">AIva</div>
      <div>
        <input 
        type="password" 
        className="border p-1 rounded"
        onChange={e => setApiKey(e.target.value)}
        value={apiKey} 
        placeholder="Enter Your API key"/>
      </div>
    </nav>
    {/*Massage History */}
    <div className="flex-1 ">
      <div className="w-full max-w-screen-md mx-auto">
      Massage History
      </div>
      </div>
    {/*Massage Input Box */}
    <div>
      <div className="w-full max-w-screen-md mx-auto">
        <textarea className="bborder text-lg rounded-md p-1"/>
        <button className="bg-blue-500 hover:bg-blue-600 border rounded-md">
          Send
        </button>
      </div>
    </div>
  </div>
}
