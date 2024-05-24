import Image from "next/image";
import aboutImg from "@/app/assets/img01.png";

function About() {
  return (
    <div className="mt-10  container lg:mx-auto mx-5 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
      <div>
        <h4 className="text-4xl font-bold my-5">Purpose and Mission:</h4>
        <p className="text-xl">
          Welcome to Lost & Found, your community-driven platform dedicated to
          reuniting people with their lost belongings. Our mission is to provide
          a seamless and efficient way to report and reclaim lost items.
        </p>
      </div>
      <Image src={aboutImg} alt="about img" width={400} height={300} />
    </div>
  );
}

export default About;
