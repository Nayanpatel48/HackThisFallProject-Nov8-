import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

function GoogleGemini() {
  const apiKey = "AIzaSyCuCOrZRNOjq5606nD2J7U9bboCiTtVfjE";
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);

    try {
      const chatSession = model.startChat({ generationConfig, history: [] });
      const result = await chatSession.sendMessage(input);
      setResponse(result.response.text());
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse("An error occurred while fetching the response.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 drop-shadow-lg">Google Gemini AI</h1>
      
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mb-8">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
          className="w-full p-4 text-lg border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-400"
        />
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Generate Response
        </button>
      </form>

      {loading ? (
        <div className="flex justify-center items-center mt-8">
          <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
        </div>
      ) : (
        response && (
          <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-2xl text-left transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">AI Response</h2>
            <p className="text-gray-700 whitespace-pre-wrap">{response}</p>
          </div>
        )
      )}
    </div>
  );
}

export default GoogleGemini;
