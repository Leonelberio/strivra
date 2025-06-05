"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "@/hooks/use-loading";

export default function LoadingBar() {
  const { isLoading, progress } = useLoading();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[9999]"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Main Loading Bar Container */}
          <div className="relative h-1 overflow-hidden">
            {/* Background Track */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200/50 to-gray-300/50" />

            {/* Main Progress Bar */}
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-blue-600 to-orange-500"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            />

            {/* Glow Effect */}
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 via-blue-500 to-orange-400 blur-[2px] opacity-70"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            />

            {/* Shimmer Effect */}
            <motion.div
              className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              style={{ left: `${Math.max(0, progress - 15)}%` }}
              animate={{
                opacity: progress > 5 ? [0.3, 0.8, 0.3] : 0,
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Pulse Effect at Progress End */}
            {progress > 10 && (
              <motion.div
                className="absolute top-0 h-full w-2 bg-white/80"
                style={{ left: `${progress}%` }}
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scaleY: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </div>

          {/* Secondary Accent Line */}
          <motion.div
            className="h-0.5 bg-gradient-to-r from-orange-400/60 to-blue-400/60"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(progress + 5, 100)}%` }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.1,
            }}
          />

          {/* Loading Percentage (Optional - appears only when slow) */}
          {progress > 0 && progress < 100 && (
            <motion.div
              className="absolute top-2 right-4 text-xs font-medium text-gray-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              {Math.round(progress)}%
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
