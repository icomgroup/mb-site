import Hero from "@/features/root/home/Hero";
import Features from "@/features/root/home/Features";
import Principles from "@/features/root/home/Principles";
import Testimonials from "@/features/root/home/Testimonials";
import ContactUs from "@/features/root/home/ContactUs";
import Vendors from "@/features/root/home/Vendors";
import Promoting from "@/features/root/home/Promoting";

const Home = () => {
  return (
    <>
      <Hero />
      <Principles />
      <Features />
      <Promoting />
      <Testimonials />
      <ContactUs />
      <Vendors />
    </>
  );
};

export default Home;
