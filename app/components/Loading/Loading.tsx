'use client'
import { useState, useEffect } from 'react';
import './styles.css';

interface LoadingProps {
  onComplete?: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onComplete }) => {
  const [cursorPos, setCursorPos] = useState(0);
  const [progress, setProgress] = useState(0);
  const [statusCode, setStatusCode] = useState('INIT');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  
  const fullCommand = "sudo service sigma start";
  const [displayed, setDisplayed] = useState("");
  const totalDuration = 2100; // уменьшено на 30% (было 3000)

  useEffect(() => {
    if (cursorPos < fullCommand.length) {
      const timer = setTimeout(() => {
        setDisplayed(fullCommand.slice(0, cursorPos + 1));
        setCursorPos(cursorPos + 1);
      }, 56); // уменьшено на 30% (было 80)
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
            onComplete?.(); 
          }, 800); // уменьшено для плавного исчезновения
        }, 800); // уменьшено на 30% (было 1200)
      }
    }, 35); // уменьшено на 30% (было 50)

    return () => clearInterval(interval);
  }, [isTypingComplete]);

  const statusMessages = [
    { code: 'INIT', msg: 'Инициализация' },
    { code: 'LOAD', msg: 'Загрузка модулей' },
    { code: 'CONF', msg: 'Настройка среды' },
    { code: 'AUTH', msg: 'Проверка протоколов' },
    { code: 'SYNC', msg: 'Синхронизация' },
    { code: 'REND', msg: 'Подготовка интерфейса' },
    { code: 'OK', msg: 'Система готова' },
  ];

  const currentMessage = statusMessages.find(m => m.code === statusCode) || statusMessages[0];

  const totalBlocks = 20; // уменьшено для компактности
  const filledBlocks = Math.floor((progress / 100) * totalBlocks);
  const emptyBlocks = totalBlocks - filledBlocks;

  if (!isVisible) return null;

  return (
    <div className={`fallout-terminal ${isFadingOut ? 'terminal-off' : ''}`}>
      <div className="terminal-screen">
        <div className="terminal-header">
          <div className="header-line">SIGMA SERVICE v2.4.0</div>
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
              [OK] Готово
            </div>
          )}
        </div>

        {isTypingComplete && (
          <div className="status-section">
            <div className="status-line">
              <span className="status-label">СТАТУС:</span>
              <span className="status-value">{statusCode}</span>
            </div>
            
            <div className="status-line">
              <span className="status-label">ПРОЦЕСС:</span>
              <span className="status-value message">{currentMessage.msg}</span>
            </div>

            <div className="progress-container">
              <div className="progress-frame">
                <span className="progress-bracket">[</span>
                <span className="progress-blocks">
                  <span className="progress-filled">{'█'.repeat(filledBlocks)}</span>
                  <span className="progress-empty">{'░'.repeat(emptyBlocks)}</span>
                </span>
                <span className="progress-bracket">]</span>
                <span className="progress-percent">{Math.floor(progress)}%</span>
              </div>
            </div>
          </div>
        )}

        {progress === 100 && (
          <div className="complete-section">
            <div className="complete-line">
              SigmaService активна
            </div>
            <div className="complete-line small">
              Готово к работе 24/7
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
