import {
  arrow,
  bigBubble,
  buttons,
  centeredLine,
  nezek,
  polisot,
  pratim,
  SmallBubble,
  tviaa,
  whatsapp,
  whiteArrow,
} from "../../svgs";

function Sidebar() {
  function Item({
    svg,
    text,
    className = "",
  }: {
    svg: React.ReactNode;
    text: string;
    className?: string;
  }) {
    return (
      <div
        className={`flex flex-col sm:flex-row py-4 sm:py-4 sm:w-[86%] sm:border-b ${className}`}
      >
        <span
          className="flex justify-center items-center sm:order-2 sm:px-2"
          aria-hidden="true"
        >
          {svg}
        </span>
        <h2 className="flex justify-center items-center text-center sm:text-right pt-4 sm:pt-0 sm:pl-0 text-[18px] sm:text-[20px] p-2 sm:p-0 ">
          {text}
        </h2>
      </div>
    );
  }

  return (
    <nav
      className="bg-white rounded-md border-1 shadow-2xl text-[#452A7A] flex flex-col text-right sm:w-[203px] sm:h-[472px] w-full"
      aria-label="שירותים מהירים"
    >
      <section className="w-full">
        <div className="flex justify-center items-center sm: pt-4">
          <span className="pt-1 pr-2" aria-hidden="true">
            {arrow}
          </span>
          <h2 className="text-2xl flex justify-center items-center text-center font-bold py-2  sm:text-[22px] ">
            שירותים מהירים
          </h2>
        </div>
        <span aria-hidden="true">{centeredLine}</span>
      </section>
      <div className="flex justify-center items-center sm:text-right mb-4 sm:mb-0">
        <section className="relative grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-2 px-1 py-1 sm:px-0 sm:py-0 sm:flex sm:flex-col w-[80%] sm:w-full ">
          <span className="absolute top-2 bottom-6 left-1/2 -translate-x-1/2 w-px bg-[#452A7A]/15 sm:hidden" />
          <span className="absolute top-1/2 -translate-y-1/2 left-4 right-[calc(50%+20px)] h-px bg-[#452A7A]/15 sm:hidden" />
          <span className="absolute top-1/2 -translate-y-1/2 left-[calc(50%+20px)] right-4 h-px bg-[#452A7A]/15 sm:hidden" />
          <div className="relative col-start-2 row-start-1 sm:order-1 sm:flex sm:justify-center sm:items-start">
            <Item
              svg={polisot}
              text={"הפוליסות שלי"}
              className="relative sm:justify-end "
            />
          </div>
          <div className="relative col-start-1 row-start-1 sm:order-2 sm:flex sm:justify-center sm:items-start">
            <Item
              svg={nezek}
              text={"הגשת בקשה להודעת נזק"}
              className="relative"
            />
          </div>
          <div className="relative col-start-2 row-start-2 sm:order-3 sm:flex sm:justify-center sm:items-start">
            <Item svg={tviaa} text={"בירור סטטוס תביעה"} className="relative" />
          </div>
          <div className="relative col-start-1 row-start-2 sm:order-4 sm:flex sm:justify-center sm:items-start">
            <Item
              svg={pratim}
              text={"עדכון פרטים אישיים"}
              className="relative sm:border-none"
            />
          </div>
        </section>
      </div>
    </nav>
  );
}

function MainSection() {
  return (
    <div className=" text-white text-right pt-6 w-full min-w-[375px] mr-[10vw] sm:mr-[0] sm:pr-[12vw] sm:pt-[12vh]">
      <section
        className="flex flex-col items-end space-y-7 w-full min-w-[375px] pt-4 sm:space-y-4"
        aria-labelledby="hero-heading"
      >
        <img
          src="/images/main/small.png"
          alt="חקלאות"
          className="w-[115.3px] h-[51px]"
        />
        <h1
          id="hero-heading"
          className="text-[38px] w-[329px] h-[87px] font-bold sm:w-full sm:text-[60px] sm:h-[60px]"
        >
          קנט - קרן לביטוח נזקי טבע בחקלאות בע״מ
        </h1>
        <h2 className="text-[30px] font-bold w-[338px] h-[32px] sm:w-[381px] sm:text-[48px] sm:h-[63px]">
          כי לטבע חוקים משלו{" "}
        </h2>
        <h3 className="text-[24px]  h-[24px] sm:w-[405px] sm:text-[30px] sm:h-[39px]">
          הגן על העסק שלך עם ביטוח של קנט
        </h3>
        <button
          type="button"
          aria-label="לפרטים נוספים"
          className="bg-[#0AB285] rounded-sm p-2 my-6 flex sm:my-0"
        >
          <span className="p-1.5" aria-hidden="true">
            {whiteArrow}
          </span>
          <p className="px-2 font-bold">לפרטים נוספים</p>
        </button>
      </section>
      <span className="flex justify-center items-center pt-34 sm:pt-36 sm:pl-56 pr-20 sm:pr-0">
        <span className="sm:hidden" aria-hidden="true">
          {SmallBubble}
        </span>
        <span aria-hidden="true">{buttons}</span>
      </span>
    </div>
  );
}

function Hero() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <MainSection />
      </div>

      <section className="hidden sm:block absolute left-0 top-26 z-20 ">
        <Sidebar />
      </section>
      <section className="hidden sm:flex flex-col justify-center items-end relative -top-16 -space-y-5">
        <span aria-hidden="true">{whatsapp}</span>
        <span aria-hidden="true">{bigBubble}</span>
      </section>
    </div>
  );
}

function HeroComponnent() {
  return (
    <div>
      <section
        className=" relative w-full min-w-[375px] sm:h-[662px] h-[667px] bg-no-repeat bg-[length:480%_210%] bg-[left_79.5%_top_60%] sm:bg-[40%_60%] sm:bg-[length:100%_200%] text-white"
        role="region"
        aria-label="אזור גיבור האתר"
        style={{ backgroundImage: "url('/images/main/main.png')" }}
      >
        <div className="absolute inset-0 bg-black/40 sm:bg-black/30 pointer-events-none" />
        <div className="relative z-10">
          <Hero />
        </div>
      </section>
      <div className="sm:hidden">
        <Sidebar />
      </div>
    </div>
  );
}

export default HeroComponnent;
