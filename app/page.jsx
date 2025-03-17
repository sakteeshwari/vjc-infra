"use client";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Home from "./components/Home/Home"; // Your main page component

export default function Page() {
  return (
    <LoadingScreen>
      <Home />
      
    </LoadingScreen>
  );
}
