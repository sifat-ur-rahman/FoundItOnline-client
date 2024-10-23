import Image from "next/image";
import aboutImg from "@/app/assets/img01.png";

function About() {
  return (
    <div className="mt-10 max-w-[1130]  container mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-items-center">
      <div data-aos="fade-right" className="mx-5 lg:mx-0">
        <h4 className="text-3xl font-bold my-5">Purpose and Mission:</h4>
        <p className="text-xl">
          Welcome to Lost & Found, your community-driven platform dedicated to
          reuniting people with their lost belongings. Our mission is to provide
          a seamless and efficient way to report and reclaim lost items.
        </p>
      </div>
      <Image src={aboutImg} alt="about img" width={500} height={400} />
    </div>
  );
}

export default About;
