import React from 'react';
import { motion } from 'framer-motion';

export function GradientBackground() {
  return (
    <motion.div 
      animate={{
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute inset-0 overflow-hidden pointer-events-none bg-white"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-mesh opacity-60" />
      
      {/* Animated Atmospheric Blobs (UK Dim & Dark Theme) */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/20 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[20%] right-[-5%] w-[50%] h-[50%] rounded-full bg-red-900/10 blur-[100px]"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-slate-400/10 blur-[150px]"
        />
      </div>

      {/* Floating Hexagons for Visual Depth */}
      {[...Array(12)].map((_, i) => {
        const size = 40 + (i % 4) * 60 + (i % 3) * 20;
        const duration = 15 + (i % 5) * 5;
        const delay = i * 0.5;
        const top = (i * 15) % 90;
        const left = (i * 23) % 90;
        const isOutline = i % 2 === 0;
        
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [0, -60, 0],
              x: [0, 30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
            }}
            className="absolute pointer-events-none"
            style={{
              top: `${top}%`,
              left: `${left}%`,
            }}
          >
            <svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill={isOutline ? "none" : "currentColor"}
              stroke="currentColor"
              strokeWidth={isOutline ? 0.5 : 0}
              className="text-brand-500/60"
            >
              <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
            </svg>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
