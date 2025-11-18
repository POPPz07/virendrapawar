import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / totalHeight) * 100;
      setProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-border/20 z-[60]">
      <div
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
