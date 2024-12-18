import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import logo from "@/app/assets/navLogo.png";
import Image from "next/image";

function Footer() {
  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com", icon: <FaFacebook /> },
    { name: "Twitter", url: "https://twitter.com", icon: <FaTwitter /> },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      icon: <FaInstagram />,
    },
  ];

  return (
    <footer className="text-slate-500 max-w-[1280] container mx-auto bg font-medium relative px-2">
      <div className="shadow-t sm:shadow-md py-8">
        <div className="container mx-auto">
          <section className="mb-10 flex lg:flex-row flex-col items-center self-center justify-between px-8 py-1 border-2">
            <div className="flex items-center lg:my-0 my-3">
              <Image src={logo} alt="logo" width={200} height={20} />
            </div>
            <div className="lg:flex flex-none items-center text-center">
              <div className="flex items-center">
                <BsFillTelephoneFill className="text-red mr-1" />
                <p className="normalText">987-0980-9809</p>
              </div>
              <div className="flex items-center lg:my-0 my-2 lg:mx-8">
                <CgMail className="text-red mr-1" />
                <p className="normalText">Info@youemail.com</p>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-red mr-1" />
                <p className="normalText">4768 Boundary Street, USA</p>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center lg:text-left">
              <h4 className="text-blue-600 text-2xl font-bold">About Us</h4>
              <p className="mt-4 text-textBlack">
                Provide detailed descriptions including unique identifiers.
                Mention the exact date and location.
              </p>
              <div className="mt-4 flex items-center justify-center">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-orange-400 text-white bg-slate-500 p-2 rounded-md mr-4 transition-colors duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl text-blue-600 font-bold mb-4">
                Our Services
              </h3>
              <ul>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-slate-400 hover:ml-4 cursor-pointer">
                  Tech Solutions
                </li>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-slate-400 hover:ml-4 cursor-pointer">
                  Report Lost Item
                </li>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-slate-400 hover:ml-4 cursor-pointer">
                  Report Found Item
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-blue-600 text-2xl font-bold mb-4">
                Useful Links
              </h3>
              <ul>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-slate-400 hover:ml-4 cursor-pointer">
                  What We Do
                </li>

                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-slate-400 hover:ml-4 cursor-pointer">
                  Faq Ask
                </li>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-slate-400 hover:ml-4 cursor-pointer">
                  Contact Us
                </li>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-slate-400 hover:ml-4 cursor-pointer">
                  Privacy & Terms
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className=" text-center lg:flex flex-none items-center justify-between ">
            <p className="text-textBlack hover:text-gray-600 mt-3">
              © FoundIt Online 2024 | All Rights Reserved
            </p>
            <div className="flex mt-3 ">
              <p className="hover:text-gray-600">Trams & Condition</p>
              <p className="mx-4 hover:text-gray-600">Privacy Policy</p>
              <p className="hover:text-gray-600">Contact Us</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
