import Container from "@/components/ui/Container";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import successAnimation from "../assets/animation/success.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const Success = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <div className="border-t-4"></div>
      <Container>
        <div className="relative flex flex-col justify-center items-center h-screen text-center overflow-hidden">
          {/* Confetti with fixed positioning */}
          <Confetti
            width={width}
            height={height}
            className="fixed top-0 left-0 w-full h-full"
          />
          <div className="w-full z-10">
            <Lottie
              className="max-w-full h-80"
              animationData={successAnimation}
              loop={true}
            />
            <div>
              <h2>Order Successful</h2>
              <p>Thank you for your order!</p>
              <Link to="/">
                <button className="btn bg-green-500 mt-2">Go Home</button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Success;
