import { Header } from "../UI/Header";
import apbg from "../../assets/apbg.mp4";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={apbg} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
      </div>

    </section>
  );
};