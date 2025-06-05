"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function useLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Reset states
    setIsLoading(true);
    setProgress(0);

    // Simulate realistic loading with variable speeds
    const loadingSteps = [
      { delay: 50, progress: 15 },
      { delay: 150, progress: 30 },
      { delay: 300, progress: 45 },
      { delay: 500, progress: 65 },
      { delay: 750, progress: 80 },
      { delay: 1000, progress: 90 },
      { delay: 1200, progress: 95 },
      { delay: 1400, progress: 100 },
    ];

    const timeouts = loadingSteps.map(({ delay, progress: targetProgress }) =>
      setTimeout(() => {
        setProgress(targetProgress);
      }, delay)
    );

    // Complete loading
    const completeTimeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 300);
    }, 1500);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(completeTimeout);
    };
  }, [pathname]);

  // Handle page visibility for better UX
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Pause loading when tab is not visible
        setIsLoading(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return { isLoading, progress };
}
