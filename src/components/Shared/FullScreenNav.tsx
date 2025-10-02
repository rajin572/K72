import { useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const FullScreenNav = ({ children }: { children: React.ReactNode }) => {
  const currentLocation = useLocation().pathname;

  console.log(currentLocation);
  const stairParentRef = useRef(null);
  const childRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(stairParentRef.current, {
      display: "block",
    });

    tl.from(".stairing", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(".stairing", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(stairParentRef.current, {
      display: "none",
    });

    tl.to(".stairing", {
      y: "0%",
    });

    gsap.from("#child", {
      opacity: 0,
      delay: 1.2,
    });
  }, [currentLocation]);

  return (
    <div>
      <div
        ref={stairParentRef}
        className="h-screen w-full fixed overflow-hidden z-20 "
      >
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div id="child">{children}</div>
    </div>
  );
};

export default FullScreenNav;
