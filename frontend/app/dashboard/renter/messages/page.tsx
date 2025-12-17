"use client";

import { Search, CheckCircle, Send } from "lucide-react";
import { useState } from "react";

export default function MessagesPage() {
  const [activeChat] = useState(1);

  return (
    <div className="p-4 md:p-6 h-[calc(100vh-70px)] flex flex-col md:flex-row gap-4">
      {/* LEFT: Conversations List */}
      <div className="w-full md:w-1/3 bg-white border rounded-xl shadow-sm flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
            <Search className="h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search messages..."
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        {/* Chats */}
        <div className="flex-1 overflow-y-auto">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                activeChat === i ? "bg-green-50" : ""
              }`}
            >
              <div className="flex gap-3">
                <div className="h-12 w-12 bg-gray-300 rounded-full" />
                <div>
                  <p className="font-semibold">Owner {i}</p>
                  <p className="text-sm text-gray-600">Hello, is the tool available?</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: Chat Window */}
      <div className="flex-1 bg-white border rounded-xl shadow-sm flex flex-col">
        {/* Header */}
        <div className="p-4 border-b flex items-center gap-3">
          <div className="h-10 w-10 bg-gray-300 rounded-full" />
          <div>
            <p className="font-semibold">John, Tractor Owner</p>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <CheckCircle className="h-3 w-3" /> Verified
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          <div className="self-start bg-gray-200 px-4 py-2 rounded-lg max-w-xs">
            Hello! Is the tractor available?
          </div>
          <div className="self-end bg-green-600 text-white px-4 py-2 rounded-lg max-w-xs">
            Yes, it's available from 12–18 Dec.
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t flex gap-3">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border rounded-lg px-4 py-2 outline-none"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Send className="h-4 w-4" /> Send
          </button>
        </div>
      </div>
    </div>
  );
}
