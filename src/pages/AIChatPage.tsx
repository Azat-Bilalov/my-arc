import { useState, useRef, useEffect } from "react";
import { Zap, MessageCircle, Send } from "lucide-react";

import { Header } from "./components/Header";

import { Button } from "@/components/ui/Button";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const AIChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your Winter Arc AI Coach. I'm here to support your transformation journey. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputValue),
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (
      input.includes("progress") ||
      input.includes("how") ||
      input.includes("doing")
    ) {
      return "You're doing great! You've completed 1 out of 1 goals and have 2 active streaks. Keep up the momentum! What aspect of your progress would you like to discuss?";
    } else if (
      input.includes("motivation") ||
      input.includes("help") ||
      input.includes("stuck")
    ) {
      return "Remember why you started your Winter Arc journey. Every small step counts towards your transformation. Focus on one habit at a time, and celebrate your wins. What specific challenge are you facing?";
    } else if (input.includes("focus") || input.includes("should")) {
      return "Based on your current progress, I recommend focusing on consistency with your daily habits. Morning workouts and daily reading are building great streaks. Have you considered adding an evening reflection practice?";
    } else if (input.includes("habit") || input.includes("routine")) {
      return "Building strong habits is key to transformation. Start small, stay consistent, and track your progress. Which habit would you like to work on today?";
    } else {
      return "That's a great question! I'm here to help you stay accountable and motivated throughout your Winter Arc. Feel free to share your thoughts, challenges, or ask for guidance on any aspect of your journey.";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickPrompts = [
    "How's my progress?",
    "I need motivation",
    "What should I focus on?",
    "Help me with habits",
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)]">
      <Header
        description="Your daily check-in partner"
        icon={<Zap className="text-blue-500" size={36} />}
        title="AI Coach"
      />

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 1 && (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-10 h-10 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Start Your Daily Check-in
            </h3>
            <p className="text-sm text-gray-600 px-4 mb-6">
              Share your progress, challenges, or ask for motivation. Your AI
              coach is here to support your Winter Arc journey.
            </p>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-xl p-3 text-sm ${
                message.sender === "user"
                  ? "bg-blue-400 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts */}
      {messages.length <= 2 && (
        <div className="px-4 pb-3">
          <div className="flex gap-2 flex-wrap">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm transition-colors"
                onClick={() => {
                  setInputValue(prompt);
                  setTimeout(handleSend, 100);
                }}
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            className="flex-1 px-4 py-3 bg-gray-100 rounded-xl text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Share your progress..."
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button
            isIconOnly
            className="rounded-full bg-blue-400 hover:bg-blue-500"
            onPress={handleSend}
          >
            <Send className="text-white" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIChatPage;
