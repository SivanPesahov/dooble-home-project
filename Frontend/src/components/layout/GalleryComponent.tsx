import { useMobile } from "../../context/MobileContext";
import { whiteArrow } from "../../svgs";

function TextSection() {
  const { isMobile } = useMobile();
  return (
    <section
      className="flex flex-col items-end text-right sm:w-[425px] sm:h-[298px]"
      aria-labelledby="gallery-heading"
    >
      <h1
        id="gallery-heading"
        className="text-[36px] w-full h-[54px] font-bold text-[#452A7A] px-8 sm:px-0 my-4 sm:text-[54px]"
      >
        הגלרייה החקלאית
      </h1>
      <div className="text-[20px] w-full h-[172px] pr-8 pl-6 sm:px-0 sm:py-4 text-[#333333] sm:text-[23px]">
        {isMobile ? (
          <p>
            {" "}
            תחרות ״הגלריה החקלאית״ של קנט חושפת
            <br className="sm:hidden" /> לציבור הרחב את תרומתה הגדולה של
            <br className="sm:hidden" /> החקלאות לפיתוחה של המדינה ואת
            <br className="sm:hidden" /> יופיים המרהיב של החקלאות
            <br className="hidden sm:block" />, הטבע{" "}
            <br className="sm:hidden" /> .והנוף בישראל
          </p>
        ) : (
          <p>
            תחרות ״הגלריה החקלאית״ של קנט חושפת לציבור <br /> הרחב את תרומתה
            הגדולה של החקלאות לפיתוחה <br /> ,של המדינה ואת יופיים המרהיב של
            החקלאות <br /> .הטבע והנוף בישראל
          </p>
        )}
      </div>
      <button
        type="button"
        aria-label="לצפייה בגלריה"
        className="bg-[#0AB285] rounded-sm p-2 flex sm:my-0 text-white mx-8 sm:mx-0 sm:h-[50px] sm:w-[197px] sm:justify-center sm:items-center "
      >
        <span className="p-1.5 sm:pt-2" aria-hidden="true">
          {whiteArrow}
        </span>
        <p className=" px-2 font-bold sm:text-[22px]">לצפייה בגלריה</p>
      </button>
    </section>
  );
}

type props = {
  src: string;
  alt: string;
  text: string;
  className?: string;
};

function Photo({ src, alt, text, className }: props) {
  return (
    <div
      role="figure"
      aria-labelledby={`${alt}-caption`}
      className={`relative inline-block bg-white p-2 sm:p-4 pb-4 sm:pb-8 shadow-2xl ${className}`}
    >
      <div className="overflow-hidden">
        <img
          src={src}
          alt={alt}
          role="img"
          className="block min-w-[132.7px] sm:w-[343px] h-[135.11px] sm:h-full sm:max-h-[282.01px] object-cover"
        />
      </div>
      <p
        id={`${alt}-caption`}
        className="hidden sm:block absolute bottom-1 inset-x-5 text-right text-[#333333] text-[20px]"
      >
        {text}{" "}
      </p>
    </div>
  );
}

function PhotosSection() {
  return (
    <section
      className="flex justify-center items-center gap-6 sm:gap-10 mb-10"
      aria-label="תמונות מהגלריה החקלאית"
    >
      <Photo
        src={"/images/gallery/plants.png"}
        alt="plants"
        text="צילום: אשר גולן"
      />
      <Photo
        src={"/images/gallery/trees.jpg"}
        alt="trees"
        text="צילום: בינה כהן"
        className="mt-16 sm:mt-26"
      />
    </section>
  );
}

function GalleryComponent() {
  return (
    <section
      role="region"
      aria-label="גלריה חקלאית"
      className="relative w-full h-[999px] sm:h-[600px] flex flex-col sm:flex-row justify-between bg-gradient-to-b from-[#FFFFFF] via-[#F9F8FB] to-[#F1EFF4]"
      style={{
        backgroundImage: "none",
      }}
    >
      <div
        className="absolute inset-0 top-[86px] sm:top-[250px] bg-[url('/images/gallery/clover.png')] bg-no-repeat bg-[length:32%] sm:bg-[length:18%] bg-[right_-40px_top] sm:bg-[right_-66px_top] opacity-15"
        aria-hidden="true"
      ></div>{" "}
      <section className="sm:order-3 sm:mr-[12vw] sm:mt-[6vh]">
        <TextSection />
      </section>
      <section className="sm:order-2 sm:z-20 sm:-translate-x-18 transition-transform duration-300 sm:pt-10">
        <PhotosSection />
      </section>
      <section className="sm:order-1 sm:flex sm:justify-center sm:items-end  ">
        <img
          src="/images/gallery/camera.png"
          alt="מצלמה חקלאית"
          role="img"
          className="w-full sm:w-[727px] h-[334px] sm:h-[545px] block object-cover object-[35%_40%] fade-right"
        />
      </section>
    </section>
  );
}

export default GalleryComponent;
