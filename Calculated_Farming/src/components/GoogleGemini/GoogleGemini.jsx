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
    if (!input.trim()) return; // Prevent empty submissions

    setLoading(true);
    setResponse(null); // Clear previous response

    try {
      const chatSession = model.startChat({ generationConfig, history: [] });
      const result = await chatSession.sendMessage(input);
      setResponse(result.response.text());
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse("An error occurred while fetching the response.");
    } finally {
      setLoading(false);
      setInput(""); // Clear input field
    }
  };

  return (
    <div className="flex flex-col items-center p-4 min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your prompt..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
        />
      </form>

      {loading ? (
        <div className="flex justify-center items-center h-20 w-20 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      ) : (
        response && (
          <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg text-left">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Response</h2>
            <p className="text-gray-700 whitespace-pre-wrap">{response}</p>
          </div>
        )
      )}
    </div>
  );
}

export default GoogleGemini;
