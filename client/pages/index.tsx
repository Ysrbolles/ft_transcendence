import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import HeroSection from "@/components/heroSection/HeroSection";
import OurTeam from "@/containers/ourTeam/OurTeam";

const Home: NextPage = () => {
  // const { data: session } = useSession();
  return (
    <>
      <HeroSection />
      <OurTeam />
    </>
  );
};

export default Home;
