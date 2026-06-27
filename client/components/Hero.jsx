import { PlayCircle, ArrowRight } from "lucide-react";

const languages = [
  { native: "ಕನ್ನಡ", english: "Kannada" },
  { native: "தமிழ்", english: "Tamil" },
  { native: "తెలుగు", english: "Telugu" },
  { native: "മലയാളം", english: "Malayalam" },
  { native: "English", english: "English" },
];

function TempleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="
        w-4 h-4
        sm:w-4 sm:h-4
        lg:w-5 lg:h-5
        flex-shrink-0
        "
    >
      <polygon points="12,2 10.5,5 13.5,5" fill="#374151" opacity="0.65" />
      <rect x="9.5" y="5" width="5" height="2.5" rx="0.3" fill="#374151" opacity="0.72" />
      <rect x="8" y="7.5" width="8" height="2.5" rx="0.3" fill="#374151" opacity="0.80" />
      <rect x="6.5" y="10" width="11" height="2.5" rx="0.3" fill="#374151" opacity="0.87" />
      <rect x="5" y="12.5" width="14" height="2.5" rx="0.3" fill="#374151" opacity="0.93" />
      <rect x="6" y="15" width="12" height="7" rx="0.3" fill="#374151" />
      <rect x="10" y="18" width="4" height="4" rx="0.5" fill="white" opacity="0.35" />
    </svg>
  );
}

function LanguageItem({ native, english }) {
  return (
    <div
      className="
        group
        flex
        items-center
        justify-between
        rounded-md
        border-b
        border-gray-100
        px-1.5
        py-2
        transition-colors
        hover:bg-gray-50
        last:border-b-0
        cursor-pointer
        "
    >
      <div
        className="
          flex
          items-center
          gap-2
          sm:gap-3
          min-w-0
        "
      >
        <TempleIcon />

        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-baseline
            gap-0
            sm:gap-2
            min-w-0
          "
        >
          <span
            className="
              text-xs
              sm:text-sm
              font-bold
              text-[#111827]
              truncate
            "
          >
            {native}
          </span>

          <span
            className="
              text-[9px]
              sm:text-[10px]
              text-gray-400
              font-normal
              truncate
            "
          >
            {english}
          </span>
        </div>
      </div>

      <ArrowRight
        className="
          h-3.5
          w-3.5
          flex-shrink-0
          text-gray-300
          transition-colors
          group-hover:text-[#0C8A45]
        "
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#F5F4EF] min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-80px)]"
    >
      {/* Background Image */}
      <div
        className="
          absolute
          inset-0
          left-0
          sm:left-[15%]
          md:left-[25%]
          lg:left-[34%]
          xl:left-[36%]
          2xl:left-[38%]
        "
      >
        <img
          src="/hero.png"
          alt="South India Market"
          className="w-full h-full object-cover object-center saturate-125 contrast-110 brightness-105"
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #F5F4EF 0%, #F5F4EF 22%, rgba(245,244,239,.88) 34%, rgba(245,244,239,.42) 48%, rgba(245,244,239,0) 63%)",
        }}
      />

      {/* Main Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1900px]
          px-5
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-16
          2xl:px-20
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.1fr_.9fr]
            items-center
            gap-12
            lg:gap-16
            min-h-[calc(100vh-64px)]
            lg:min-h-[calc(100vh-80px)]
          "
        >
          {/* LEFT */}
          <div
            className="
              py-12
              sm:py-16
              lg:py-20
              text-center
              lg:text-left
            "
          >
            <p
              className="
                uppercase
                font-bold
                text-[#0C8A45]
                tracking-[0.18em]
                mb-5
                text-[10px]
                sm:text-[11px]
                md:text-xs
              "
            >
              Intelligence That Drives Movement
            </p>

            <h1
              className="
                font-bold
                leading-tight
                text-[#081225]
                mb-6
                text-[38px]
                sm:text-[46px]
                md:text-[54px]
                lg:text-[60px]
                xl:text-[68px]
                2xl:text-[76px]
              "
              style={{
                fontFamily:
                  "'Georgia','Palatino Linotype','Book Antiqua',serif",
              }}
            >
              Intelligence for
              <br />
              Smarter <span className="text-[#0C8A45]">Supply</span>
              <br />
              <span className="text-[#0C8A45]">Chains.</span>
            </h1>

            <p
              className="
                mx-auto
                lg:mx-0
                max-w-xl
                text-gray-600
                leading-7
                text-sm
                sm:text-[15px]
                lg:text-base
              "
            >
              We transform fragmented data into actionable insights
              to help businesses move smarter, reduce waste and
              maximize profitability across South India.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-12
                flex
                flex-col
                sm:flex-row
                justify-center
                lg:justify-start
                gap-5
              "
            >
              <button
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#0C8A45]
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  transition
                  hover:bg-[#09703a]
                "
              >
                Explore Our Vision
                <ArrowRight size={16} />
              </button>

              <button
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-[#081225]
                  shadow-sm
                  transition
                  hover:bg-gray-50
                "
              >
                Watch Video
                <PlayCircle
                  size={20}
                  className="text-[#0C8A45]"
                />
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className=" 
              flex
              justify-center
              lg:justify-end
              items-start
              lg:-mt-16
              xl:-mt-20
              pb-10
              lg:pb-0
            "
          >
            <div
              className="
                w-[240px]
                max-w-[240px]
                lg:max-w-[250px]
                rounded-xl
                bg-white
                p-4
                shadow-[0_20px_50px_rgba(0,0,0,0.12)]
              "
            >
              <h3 className="mb-3 text-base font-bold text-[#111827]">
                We speak your language
              </h3>

              {languages.map((lang) => (
                <LanguageItem
                  key={lang.english}
                  native={lang.native}
                  english={lang.english}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}