import React, { useEffect } from "react";

export default function SplashScreen({ onNext }) {
  useEffect(() => {
    const timer = setTimeout(onNext, 2000); // auto move after 2s
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="h-screen flex items-center justify-center bg-[#7148E5]">
      <h1 className="text-white text-4xl font-bold">H</h1>
    </div>
  );
}
