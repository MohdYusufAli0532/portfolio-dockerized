import { useEffect } from 'react';

interface SplashScreenProps {
  onFinish?: () => void;
}

const SplashScreen = ({ onFinish }: SplashScreenProps) => {
  useEffect(() => {
    const t = setTimeout(() => onFinish?.(), 1400);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div className="splash-overlay">
      <div className="splash-inner">
        <h1 className="hello-title text-3xl md:text-5xl lg:text-6xl">Hello there</h1>
        <p className="hello-subtle mt-3 text-sm md:text-base">
          getting things ready
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
