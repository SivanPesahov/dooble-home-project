import { whiteArrow } from "../../svgs";
import { useMobile } from "../../context/MobileContext";

type ItemProps = {
  src: string;
  alt: string;
  isMobile: boolean;
};

function Item({ src, alt, isMobile }: ItemProps) {
  return (
    <section className="flex justify-end items-end text-right " role="article">
      <div className="flex flex-col justify-end sm:justify-start items-end sm:pb-7 sm:space-y-1 ">
        <p className=" text-[16px] text-right text-[#452A7A] font-bold opacity-50 ">
          22.08.20
        </p>
        <h3 className=" text-[18px] w-[141px] sm:w-[305px] sm:h-[30px] sm:text-[24px] h-[35px] font-bold text-[#452A7A] text-right leading-6  sm:py-0">
          {isMobile
            ? "נוסטי קלובר בריקנה סטום לפריק"
            : "קונדימנטום קורוס בליקרה נונסטי"}
        </h3>
        <p className=" w-[173px] h-[41px] text-[16px] text-right leading-5 sm:leading-6 py-3 sm:w-[344px] sm:h-[60px] sm:text-[20px] sm:py-0 text-[#444444]">
          {isMobile
            ? "לורם איפסום דולור סיט אמט קונקטור אדיפיסינג מיחוצים"
            : "לורם איפסום דולור סיט אמט קונקטור אדיפיסינג מיחוצים קלאצי סחטיר בלובק תצטנפל בלינדו"}
        </p>
        <p className=" text-[16px] text-right text-[#0AB285] font-bold py-3 sm:py-0">
          קרא עוד
        </p>
      </div>
      <div className="flex flex-col justify-start items-start px-4 pb-10 sm:py-8">
        <img
          src={src}
          alt={alt}
          role="img"
          className="min-w-[147px] h-[100.88px] sm:w-[204px] sm:h-[140px] rounded-sm"
        />
      </div>
    </section>
  );
}

function MainItem({ src, alt, isMobile }: ItemProps) {
  return (
    <section
      className="min-w-[334.97px] h-[221.18px] sm:w-full sm:max-w-[839px] sm:h-[554px]"
      aria-label="כתבת חדשות מרכזית"
    >
      <div className="relative rounded-md sm:rounded-none overflow-hidden">
        <img src={src} alt={alt} role="img" />
        <div className="absolute inset-0 bg-black/26 flex flex-col justify-center items-end px-3 pt-12 sm:pr-16 sm:pt-86 text-white text-right sm:w-full">
          <p className="text-[16px] sm:text-[18px] font-bold opacity-70 sm:mb-2">
            22.08.20
          </p>
          <h3 className=" text-[22px] font-bold w-[226px] h-[48px] leading-6 sm:text-[36px] sm:w-[551px] sm:h-[30px]">
            {isMobile
              ? "דולור סיט אמט קונסקטורר לורם איפסום"
              : "לורם איפסום דולור סיט אמט קונסקטורר"}
          </h3>

          <p className=" text-[18px] w-[302px] h-[40px] leading-6 pt-2 sm:text-[20px] sm:w-[552px] sm:h-[30px]  sm:pt-4">
            {isMobile
              ? " קונסקטורר אדיפיסינג אלית מיחוצים קלאצי לורם איפסום דולור סיט אמט "
              : "לורם איפסום דולור סיט אמט קונסקטורר אדיפיסינג אלית מיחוצים קלאצי"}
          </p>

          <p className="text-[16px] sm:text-[20px] font-bold text-white cursor-pointer pt-6 sm:pt-4">
            קרא עוד
          </p>
        </div>
      </div>
    </section>
  );
}

function NewsComponent() {
  const { isMobile } = useMobile();

  const button = (
    <button
      type="button"
      aria-label="לכל החדשות"
      className="bg-[#452A7A] rounded-sm py-3 px-5 my-4 flex"
    >
      <span className={`pt-${isMobile ? "2.5" : "2"} pr-1`} aria-hidden="true">
        {whiteArrow}
      </span>
      <p className="px-2 font-bold text-white"> לכל החדשות</p>
    </button>
  );

  return (
    <section
      className="bg-white sm:px-[12vw] my-6 sm:my-0"
      role="region"
      aria-labelledby="news-heading"
    >
      <section className="flex justify-end sm:justify-between items-center pb-6 px-6 sm:px-0 py-6">
        <div className="hidden sm:block pt-8">{button}</div>
        <h1
          id="news-heading"
          className="text-right text-[#452A7A] font-bold w-[221px] h-[37px] text-[36px]"
        >
          ?מה חדש בקנט
        </h1>
      </section>
      <section className="sm:flex sm:justify-between sm:items-center">
        <div className="flex justify-center items-center py-4 sm:order-2">
          <MainItem
            src="images/news/main.png"
            alt="/images/footer/kanat.png"
            isMobile={isMobile}
          />
        </div>
        <div className="py-2 space-y-4 sm:space-y-0 " aria-label="כתבות נוספות">
          <Item
            src="images/news/video.png"
            alt="/images/footer/kanat.png"
            isMobile={isMobile}
          />
          <Item
            src="images/news/bananas.png"
            alt="/images/footer/kanat.png"
            isMobile={isMobile}
          />
          <Item
            src="images/news/cows.png"
            alt="/images/footer/kanat.png"
            isMobile={isMobile}
          />
        </div>
        <div className="flex justify-center items-center text-[18px] sm:hidden">
          {button}
        </div>
      </section>
    </section>
  );
}

export default NewsComponent;
