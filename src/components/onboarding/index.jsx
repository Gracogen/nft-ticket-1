import React, { useState } from "react";
import SplashScreen from "./SplashScreen";
import NftIntro from "./NftIntro";
import AttendeeLogin from "./AttendeeLogin";
import ConnectWallet from "./ConnectWallet";
import OtpVerification from "./OtpVerification";
import Success from "./Success";

export default function OnboardingFlow() {
  const [step, setStep] = useState(0);

  const screens = [
    <SplashScreen onNext={() => setStep(1)} />,
    <NftIntro onNext={() => setStep(2)} />,
    <AttendeeLogin onNext={() => setStep(3)} />,
    <ConnectWallet onNext={() => setStep(4)} />,
    <OtpVerification onNext={() => setStep(5)} />,
    <Success />,
  ];

  return <div className="h-screen w-full">{screens[step]}</div>;
}
