'use client'
import { useState, useEffect } from 'react';
import './styles.css';

const Loading = () => {
  const [cursorPos, setCursorPos] = useState(0);
  const [progress, setProgress] = useState(0);
  const [statusCode, setStatusCode] = useState('INIT');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  
  const fullCommand = "sudo service sigma start";
  const [displayed, setDisplayed] = useState("");
  const totalDuration = 3000;

  useEffect(() => {
    if (cursorPos < fullCommand.length) {
      const timer = setTimeout(() => {
        setDisplayed(fullCommand.slice(0, cursorPos + 1));
        setCursorPos(cursorPos + 1);
      }, 80);
      return () => clearTimeout(timer);
    } else {
      setIsTypingComplete(true);
    }
  }, [cursorPos]);

  useEffect(() => {
    if (!isTypingComplete) return;

    const startTime = Date.now();
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100);
      
      setProgress(newProgress);
      
      if (newProgress < 15) setStatusCode('INIT');
      else if (newProgress < 35) setStatusCode('LOAD');
      else if (newProgress < 55) setStatusCode('CONF');
      else if (newProgress < 75) setStatusCode('AUTH');
      else if (newProgress < 90) setStatusCode('SYNC');
      else if (newProgress < 100) setStatusCode('REND');
      else {
        setStatusCode('OK');
        clearInterval(interval);
        
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setIsVisible(false);
          }, 1000);
        }, 1200);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isTypingComplete]);

  const statusMessages = [
    { code: 'INIT', msg: 'Initializing SigmaService...' },
    { code: 'LOAD', msg: 'Loading kernel modules...' },
    { code: 'CONF', msg: 'Configuring environment...' },
    { code: 'AUTH', msg: 'Authenticating protocols...' },
    { code: 'SYNC', msg: 'Syncing databases...' },
    { code: 'REND', msg: 'Rendering interface...' },
    { code: 'OK', msg: 'SigmaService active' },
  ];

  const currentMessage = statusMessages.find(m => m.code === statusCode) || statusMessages[0];

  const totalBlocks = 25;
  const filledBlocks = Math.floor((progress / 100) * totalBlocks);
  const emptyBlocks = totalBlocks - filledBlocks;

  if (!isVisible) return null;

  return (
    <div className={`fallout-terminal ${isFadingOut ? 'terminal-off' : ''}`}>
      <div className="terminal-screen">
        <div className="terminal-header">
          <div className="header-line">COPYRIGHT 2020-2077</div>
          <div className="header-line">-- Sigma Service v2.4.0 --</div>
        </div>

        <div className="command-section">
          <div className="command-line">
            <span className="prompt">&gt;</span>
            <span className="command-text">
              {displayed}
              {!isTypingComplete && (
                <span className="cursor">█</span>
              )}
            </span>
          </div>
          
          {progress === 100 && (
            <div className="command-result">
              [OK] Command executed successfully
            </div>
          )}
        </div>

        {isTypingComplete && (
          <div className="status-section">
            <div className="status-line">
              <span className="status-label">STATUS:</span>
              <span className="status-value">{statusCode}</span>
            </div>
            
            <div className="status-line">
              <span className="status-label">MESSAGE:</span>
              <span className="status-value message">{currentMessage.msg}</span>
            </div>
            
            <div className="status-line">
              <span className="status-label">PROGRESS:</span>
              <span className="status-value">{Math.floor(progress)}%</span>
            </div>

            <div className="progress-container">
              <div className="progress-frame">
                <span className="progress-bracket">[</span>
                <span className="progress-blocks">
                  <span className="progress-filled">{'█'.repeat(filledBlocks)}</span>
                  <span className="progress-empty">{'░'.repeat(emptyBlocks)}</span>
                </span>
                <span className="progress-bracket">]</span>
              </div>
            </div>
          </div>
        )}

        {progress === 100 && (
          <div className="complete-section">
            <div className="complete-line">
              ========================================
            </div>
            <div className="complete-line">
              SigmaService is now online
            </div>
            <div className="complete-line">
              Serving 24/7 — All systems nominal
            </div>
            <div className="complete-line">
              ========================================
            </div>
          </div>
        )}

        <div className="input-line">
          <span className="prompt">&gt;</span>
          <span className="cursor">█</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;