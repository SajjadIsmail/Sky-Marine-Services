import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import './ChatWidget.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className="chat-widget">
          <div className="chat-header">
            <span>SKY MARINE SERVICES</span>
            <button onClick={() => setIsOpen(false)} className="chat-close">
              <X size={18} />
            </button>
          </div>
          <div className="chat-body">
            <div className="chat-message">
              <p>Welcome to Sky Marine Services. Let us know how we can help you?</p>
            </div>
          </div>
        </div>
      )}
      
      {!isOpen && (
        <button className="chat-button" onClick={() => setIsOpen(true)}>
          <MessageCircle size={24} />
        </button>
      )}
    </>
  );
};

export default ChatWidget;
