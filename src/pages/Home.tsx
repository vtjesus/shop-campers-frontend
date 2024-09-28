import BestSeller from "@/components/home/BestSeller";
import Category from "@/components/home/Category";
import Experience from "@/components/home/Experience";
import Faq from "@/components/home/Faq";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import InstagramShop from "@/components/home/InstagramShop";
import Service from "@/components/home/Service";
import VideoBlogs from "@/components/home/VideoBlogs";
import Container from "@/components/ui/Container";

const Home = () => {
  return (
    <>
      <Hero></Hero>

      <Container>
        <Service />
        <BestSeller />
        <Experience />
        <Category />
        <Features />
        <VideoBlogs />
        <InstagramShop />
        <Faq />
      </Container>
    </>
  );
};

export default Home;
