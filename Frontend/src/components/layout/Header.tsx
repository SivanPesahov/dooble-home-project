import { useState } from "react";

function BigLeft({
  setPressed,
}: {
  pressed: boolean;
  setPressed: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className="sm:hidden w-full flex justify-between font-Assistant">
        <div className="flex py-8 px-6 space-x-6">
          <span aria-hidden="true">{hamburgerSvg}</span>
          <span aria-hidden="true">{sunSvg}</span>

          <span aria-hidden="true">{glassSvg}</span>
        </div>
        <div className="p-2">
          <img
            src={"/images/header/kanat.png"}
            alt="לוגו קנט"
            className="w-[103px] h-[60px]"
          />
        </div>
      </div>

      <div className="hidden sm:flex gap-10">
        <div className="bg-[#0AB285] w-[284px] h-full flex justify-center items-center">
          <h2 className=" text-white text-xl font-bold flex justify-center items-center">
            כניסה לאיזור האישי <span aria-hidden="true">{manSvg}</span>
          </h2>
        </div>
        <div className="flex py-10 space-x-8">
          <span aria-hidden="true">{sunSvg}</span>
          <button
            type="button"
            onClick={() => setPressed((prev) => !prev)}
            aria-label="חיפוש"
          >
            {glassSvg}
          </button>

          <h2 className="text-[#452A7A] text-xl font-bold flex gap-2">
            English{" "}
            <div className="items-center flex justify-center">
              <span aria-hidden="true">{arrowSvg}</span>
            </div>
          </h2>
        </div>
      </div>
    </>
  );
}

function BigRight() {
  return (
    <>
      <div className="hidden sm:flex p-4">
        <div className="py-4 px-10">
          <div
            className="text-[#452A7A] text-xl font-bold flex space-x-10 py-2"
            role="navigation"
            aria-label="ניווט ראשי"
          >
            <h2>שירות לקוחות</h2>
            <h2>?מה חדש</h2>
            <h2>אודות</h2>
            <h2>ענפי ביטוח</h2>
          </div>
        </div>
        <img
          src={"/images/header/kanat.png"}
          alt="לוגו קנט"
          className="w-[122px] h-[71px]"
        />
      </div>
      <div className="sm:hidden"></div>
    </>
  );
}
import React from "react";
import {
  arrowSvg,
  glassSvg,
  greenGlass,
  hamburgerSvg,
  lineSvg,
  manSvg,
  pauseSvg,
  purpleX,
  sunSvg,
} from "../../svgs";

type SearchBarProps = {
  onClose: () => void;
};

function SearchBar({ onClose }: SearchBarProps) {
  return (
    <div className="w-full p-4">
      <form
        className="w-full px-6 py-4"
        dir="rtl"
        aria-label="חיפוש באתר"
        role="search"
      >
        <div className="flex items-center gap-4">
          <button
            type="submit"
            aria-label="בצע חיפוש"
            className="shrink-0 p-1 hover:opacity-80"
          >
            <span aria-hidden="true">{greenGlass}</span>
          </button>

          <input
            type="text"
            placeholder="מה ברצונכם לחפש?"
            aria-label="שדה חיפוש"
            className="flex-1 text-right text-[#452A7A] placeholder-[#452A7A] outline-none border-none bg-transparent"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="סגירת החיפוש"
            className="shrink-0 p-1 hover:opacity-80"
          >
            <span aria-hidden="true">{purpleX}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

function Line() {
  return (
    <div
      className="bg-[#452A7A] sm:bg-gradient-to-l from-[#452A7A] to-white/40 text-white sm:animate-none"
      role="region"
      aria-label="פס חדשות"
      aria-live="polite"
    >
      <div className="flex justify-end py-2 px-10 animate-marquee whitespace-nowrap sm:animate-none">
        <span className="px-2">
          <h3>
            כדי להמנע מהמתנה ממושכת במענה הטלפוני שלנו, אנחנו מזמינים אתכם לפנות
            אלינו בדיגיטל
          </h3>
        </span>
        <span
          className="px-2 items-center align-middle flex"
          aria-hidden="true"
        >
          {pauseSvg}
        </span>

        <span className="px-2">
          <h3>חדשות ועדכונים</h3>
        </span>
        <span className="px-2" aria-hidden="true">
          {lineSvg}
        </span>
      </div>
    </div>
  );
}

function Header() {
  const [pressed, setPressed] = useState(false);

  return (
    <header role="banner">
      {pressed ? (
        <SearchBar onClose={() => setPressed(false)} />
      ) : (
        <div>
          <div className="flex justify-between">
            <BigLeft setPressed={setPressed} pressed={pressed} />
            <BigRight />
          </div>
          <Line />
        </div>
      )}
    </header>
  );
}

export default Header;
