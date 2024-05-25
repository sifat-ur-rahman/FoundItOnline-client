import About from "../components/ui/HomePage/About";
import Banner from "../components/ui/HomePage/Banner";
import LostItem from "../components/ui/HomePage/LostItem";
import Testimonials from "../components/ui/HomePage/Testimonials";
import Tips from "../components/ui/HomePage/Tips";
import FoundItem from "../components/ui/HomePage/foundItem";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <About />
      <LostItem />
      <FoundItem />
      <Testimonials />
      <Tips />
    </div>
  );
}
