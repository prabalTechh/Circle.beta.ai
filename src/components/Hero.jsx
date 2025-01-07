import React, { useContext, useState } from "react";
import { FaRegQuestionCircle, FaMicrophone, FaRegImages } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import { IoSettings } from "react-icons/io5";
import Card from "./Card";
import { context } from "./Context";
import { IoSend } from "react-icons/io5";
import img from "../assets/menu.png";
import add from "../assets/add.png";
import profile from "../assets/profile.png";

const Hero = () => {
  const [chat, setChat] = useState(false);
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(context);

  const newArr = [
    "Customer Support: AI can assist in handling customer inquiries, providing quick responses, and automating frequently asked questions (FAQs).",
    "Content Generation: AI can help generate articles, blog posts, and even social media content based on given topics or keywords.",
    "Data Analysis and Insights: AI can analyze large datasets and provide actionable insights, helping businesses make informed decisions faster.",
    "Personal Assistants: AI can serve as virtual assistants, helping with scheduling, reminders, and managing emails or messages.",
  ];
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-[150px] bg-gray-100 flex flex-col justify-between py-8 px-4 border-r">
        <div className="flex flex-col items-center gap-8">
          <button
            onClick={() => setChat((prev) => !prev)}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            <img src={img} alt="Menu" className="w-8 h-8" />
          </button>

          {chat && (
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-full text-gray-100 hover:bg-gray-600  transition-colors">
              <img src={add} alt="Add" className="w-6 h-6" />
              <span className="text-xs whitespace-nowrap">
                What is react...
              </span>
            </div>
          )}

          <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <img src={add} alt="Add new" className="w-8 h-8" />
          </button>
        </div>

        <div className="flex flex-col gap-6 items-center text-gray-600">
          <FaRegQuestionCircle className="w-6 h-6 hover:text-gray-800 cursor-pointer" />
          <LuAlarmClock className="w-6 h-6 hover:text-gray-800 cursor-pointer" />
          <IoSettings className="w-6 h-6 hover:text-gray-800 cursor-pointer" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center px-8 py-4 border-b">
          <h1 className="text-xl font-semibold">CIRCLE</h1>
          <img
            src={profile}
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-gray-200"
          />
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto ">
          {!showResult ? (
            <div className="max-w-4xl mx-auto  px-8 py-12">
              <h1 className="text-4xl font-light mb-2">Hello, Rose.</h1>
              <h2 className="text-5xl font-semibold mb-12">
                How may I help you?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                {newArr.map((i) => (
                  <Card para={i} />
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto px-8 py-12">
              <h2 className="text-xl font-medium mb-6">{recentPrompt}</h2>
              {loading ? (
                <div className="text-center py-8">Loading...</div>
              ) : (
                <div>
                  <h3 className="text-lg font-medium mb-4">Your Result</h3>
                  <div
                    dangerouslySetInnerHTML={{ __html: resultData }}
                    className="prose max-w-none"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t p-6">
          <div className="max-w-3xl mx-auto flex items-center gap-4">
            <input
              type="text"
              placeholder="Enter your prompt here"
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-full focus:border-gray-400 focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={onSent}
              className="p-3 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <IoSend className="w-6 h-6" />
            </button>
            <button className="p-3 text-gray-600 hover:text-gray-800 transition-colors">
              <FaMicrophone className="w-6 h-6" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
