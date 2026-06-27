import Image from "next/image";

const companies = [
  {
    name: "Vedanta",
    logo: "/trusted/vedanta.png",
  },
  {
    name: "TVS",
    logo: "/trusted/tvs.png",
  },
  {
    name: "Reliance Retail",
    logo: "/trusted/reliance.png",
  },
  {
    name: "Coromandel",
    logo: "/trusted/coromandel.png",
  },
  {
    name: "Sankar",
    logo: "/trusted/sankar.png",
  },
  {
    name: "Koch",
    logo: "/trusted/koch.png",
  },
  {
    name: "IDH",
    logo: "/trusted/idh.png",
  },
];

export default function TrustedBy() {
  return (
    <section
      className="
        py-12
        sm:py-14
        lg:py-16
        xl:py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
        "
      >
        <div
          className="
            rounded-2xl
            px-2
            sm:px-4
            lg:px-8
            py-6
            sm:py-8
          "
        >
          <p
            className="
              mb-8
              text-center
              text-sm
              sm:text-base
              font-medium
              text-gray-500
            "
          >
            Trusted by forward-thinking businesses
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-6
              gap-y-6
              sm:gap-x-8
              md:gap-x-10
              lg:gap-x-12
              xl:gap-x-14
            "
          >
            {companies.map((company) => (
              <div
                key={company.name}
                className="
                  relative
                  h-10
                  w-24
                  sm:h-12
                  sm:w-28
                  md:h-12
                  md:w-32
                  lg:h-14
                  lg:w-36
                  flex-shrink-0
                  grayscale
                  transition
                  duration-300
                  hover:grayscale-0
                  hover:scale-105
                "
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  sizes="(max-width:640px) 96px,
                         (max-width:768px) 112px,
                         (max-width:1024px) 128px,
                         144px"
                  className="object-contain"
                />
              </div>
            ))}

            <span
              className="
                text-sm
                sm:text-base
                font-medium
                text-gray-500
              "
            >
              and more...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}