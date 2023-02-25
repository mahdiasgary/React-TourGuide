import Navbar from "../components/navigation/Navbar";
import About from "../sections/About";
import Hero from "../sections/Hero";
const Page = () => {
  console.log(window.screen.height)
  return (
    <div className="h-[1600px] bg-[#1A232E] text-white overflow-hidden">
      <Navbar />
      <Hero/>
      <About/>
    </div>
  );
};

export default Page;
