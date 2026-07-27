import React from "react";

export function LoaderThree() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-[#0D1117] overflow-hidden">
      <style>
        {`
          @keyframes drawBolt {
            0% {
              stroke-dasharray: 100;
              stroke-dashoffset: 100;
              fill: transparent;
              transform: scale(0.8);
            }
            25% {
              stroke-dasharray: 100;
              stroke-dashoffset: 0;
              fill: transparent;
              transform: scale(1.2);
            }
            50% {
              stroke-dasharray: 100;
              stroke-dashoffset: 0;
              fill: url(#splitBolt);
              filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.8));
              transform: scale(1) rotate(-8deg);
            }
            75% {
              stroke-dasharray: 100;
              stroke-dashoffset: 0;
              fill: url(#splitBolt);
              filter: drop-shadow(0 0 35px rgba(255, 215, 0, 1));
              transform: scale(1.15) rotate(8deg);
            }
            100% {
              stroke-dasharray: 100;
              stroke-dashoffset: 100;
              fill: transparent;
              filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.3));
              transform: scale(0.8) rotate(0deg);
            }
          }
          
          @keyframes shockwave {
            0% {
              transform: scale(0.5);
              opacity: 1;
              border-width: 4px;
            }
            100% {
              transform: scale(3.5);
              opacity: 0;
              border-width: 0px;
            }
          }

          .animate-draw {
            animation: drawBolt 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            transform-origin: center;
          }
          
          .animate-shockwave {
            animation: shockwave 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            border-color: rgba(255, 255, 255, 0.6);
            border-style: solid;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 80px;
            height: 80px;
            margin-top: -40px;
            margin-left: -40px;
          }
          
          .animate-shockwave-delayed {
            animation: shockwave 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            animation-delay: 0.2s;
            border-color: rgba(255, 215, 0, 0.4);
            border-style: solid;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 80px;
            height: 80px;
            margin-top: -40px;
            margin-left: -40px;
          }
        `}
      </style>
      <div className="relative flex items-center justify-center">
        {/* Shockwaves behind the bolt */}
        <div className="animate-shockwave"></div>
        <div className="animate-shockwave-delayed"></div>
        
        {/* The Bolt */}
        <svg 
          width="120" 
          height="120" 
          viewBox="0 0 24 24" 
          stroke="white" 
          strokeWidth="1"
          className="relative z-10"
        >
          <defs>
            <linearGradient id="splitBolt" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="#8B5A2B" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path 
            className="animate-draw"
            d="M13 2 L3 14 L12 14 L11 22 L21 10 L12 10 Z" 
          />
        </svg>
      </div>
    </div>
  );
}
