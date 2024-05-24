import About from "../components/ui/HomePage/About";
import Banner from "../components/ui/HomePage/Banner";
import Testimonials from "../components/ui/HomePage/Testimonials";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <About />
      <Testimonials />
    </div>
  );
}
