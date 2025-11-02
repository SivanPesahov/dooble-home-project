import { arrow } from "../../svgs";
import { useMobile } from "../../context/MobileContext";

type ItemProps = {
  src: string;
  alt: string;
  number: string;
  text: string;
};

function Item({ number, text, src, alt }: ItemProps) {
  return (
    <section
      className="w-[375px] sm:w-full sm:h-full h-[486px] flex flex-col justify-between items-end my-8 sm:my-0 sm:py-0 bg-[#F0EEF4] sm:gap-20"
      aria-labelledby={`item-title-${number}`}
    >
      <div className=" h-[103px] flex flex-col justify-end items-end border-r-1 border-[#452A7A]/20 mx-4 sm:mx-0 px-4 sm:px-18">
        <h1 className="text-start w-[47px] h-[72px] text-[48px] font-bold text-[#452A7A] opacity-30">
          {number}
        </h1>
        <h2 id={`item-title-${number}`} className="flex">
          <span className="p-4.5 sm:hidden" aria-hidden="true">
            {arrow}
          </span>
          <p className="text-[#452A7A] text-right h-[39px] text-[30px] font-bold ">
            {text}
          </p>
        </h2>
      </div>
      <div>
        <img
          src={src}
          alt={alt}
          role="img"
          className="w-full h-[305px] sm:w-full sm:h-full object-cover"
        />
      </div>
    </section>
  );
}

function EnsuredComponnent() {
  const { isMobile } = useMobile();

  return (
    <div className="bg-[#F0EEF4]" role="region" aria-label="ענפים מבוטחים">
      <section
        className="flex justify-center items-center text-[36px] font-bold text-[#452A7A] w-full sm:pt-4 sm:pb-20"
        aria-labelledby="ensured-heading"
      >
        <p id="ensured-heading" className="mt-16 sm:mt-10 w-[218px] h-[70px]">
          ענפים מבוטחים
        </p>
      </section>
      <section>
        <ul className="sm:flex" aria-label="רשימת הענפים המבוטחים">
          <li className="sm:order-3">
            <Item
              number={"01"}
              text="ענפי הצומח"
              src={`/images/ensured/oranges${isMobile ? "-mobile" : ""}.png`}
              alt="ענפי הצומח"
            />
          </li>
          <li className="sm:order-2">
            <Item
              number={"02"}
              text="ענפי החי"
              src={`/images/ensured/cow${isMobile ? "-mobile" : ""}.png`}
              alt="ענפי החי"
            />
          </li>
          <li className="sm:order-1">
            <Item
              number={"03"}
              text="ענפים כלליים"
              src={`/images/ensured/plants${isMobile ? "-mobile" : ""}.png`}
              alt="ענפים כלליים"
            />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default EnsuredComponnent;
