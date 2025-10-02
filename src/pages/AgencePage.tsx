import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const AgencePage = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/Lawrence_480x640…h=640&fit=crop&s=0a878205586092164001a9afe0ef4007",
    "https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 25%",
        end: "top -125%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 2, // smooth scrubbing with 1s easing
        anticipatePin: 2,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          console.log("imageIndex", elem.progress);
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          // Null check for imageRef
          if (imageRef.current) {
            imageRef.current.src = imageArray[imageIndex];
          }
        },
      },
    });
  });

  return (
    <div>
      <div id="page1" className=" relative py-0.5">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl w-[15vw] top-60  left-[30vw] "
        >
          <img
            ref={imageRef}
            className="h-full object-cover w-full "
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
        <div className="relative w-[90%] mx-auto">
          <div className="relative font-[font2] ">
            <div className="lg:mt-[58vh] mt-[35vh]">
              <h1 className="text-[19vw] text-center uppercase leading-[16vw] tracking-wide">
                SEVEN7Y
                <br />
                TWO
              </h1>
            </div>
            <div className="lg:pl-[40%] lg:mt-20 mt-4 p-3">
              <p className="lg:text-5xl text-xl leading-tight">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Notre curiosité nourrit notre créativité. On reste humbles et on
                dit non aux gros egos, même le vôtre. Une marque est vivante.
                Elle a des valeurs, une personnalité, une histoire. Si on oublie
                ça, on peut faire de bons chiffres à court terme, mais on la tue
                à long terme. C’est pour ça qu’on s’engage à donner de la
                perspective, pour bâtir des marques influentes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="page2" className=" h-screen"></div>
    </div>
  );
};

export default AgencePage;
