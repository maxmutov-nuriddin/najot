import { Metadata } from "next";
import Image from "next/image";
import NajotLogo from "@/assets/najot-logo.png";

export const metadata: Metadata = {
  title: "Najot e-commerce | About",
  description:
    "E-commerce website forever flksdjflad flkfjadslkf adslfjadsl fjlafkjsd",
};

const About = () => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <Image src={NajotLogo} alt="Najot logo" width={400} />
      <Image
        src="https://uploads-ssl.webflow.com/62361b0ee9fbf8a744598959/62be9351137b5e0541861308_Najot-logo-1.jpg"
        alt="Najot talim"
        width={400}
        height={500}
      />
    </div>
  );
};

export default About;
