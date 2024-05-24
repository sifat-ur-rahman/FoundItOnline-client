import About from "../components/ui/HomePage/About";
import Banner from "../components/ui/HomePage/Banner";
import Testimonials from "../components/ui/HomePage/Testimonials";
import Tips from "../components/ui/HomePage/Tips";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <About />
      <Testimonials />
      <Tips />
    </div>
  );
}
