import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
        bg-[#F8F7F3]
        mt-16
        sm:mt-20
        lg:mt-24
      "
    >
      {/* ================= CTA ================= */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            bg-[#F3F1EA]
            rounded-2xl
            lg:rounded-3xl

            p-6
            sm:p-8
            lg:p-10
            xl:p-12

            flex
            flex-col
            xl:flex-row

            items-center
            justify-between

            gap-8
            xl:gap-10
          "
        >
          {/* Left Illustration */}

          <div className="flex justify-center">
            <img
              src="/images/footer-left.png"
              alt="South India"
              className="
                w-32
                sm:w-40
                md:w-48
                lg:w-52
                xl:w-60
              "
            />
          </div>

          {/* Center */}

          <div className="flex-1 text-center xl:text-left">
            <h2
              className="
                font-bold
                text-green-800
                leading-tight

                text-3xl
                sm:text-4xl
                lg:text-5xl
                xl:text-6xl
              "
            >
              Let's Build the Future
              <br />
              of South India Together
            </h2>

            <p
              className="
                text-gray-600
                mt-4
                text-sm
                sm:text-base
                lg:text-lg
              "
            >
              Join our network and get the latest insights and updates.
            </p>
          </div>

          {/* Email */}

          <div
            className="
              w-full
              sm:w-auto

              flex
              flex-col
              sm:flex-row

              bg-white
              rounded-xl
              overflow-hidden
              shadow-sm
            "
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="
                px-5
                py-4
                outline-none

                w-full
                sm:w-72
                lg:w-80
                xl:w-96
              "
            />

            <button
              className="
                bg-green-700
                hover:bg-green-800
                text-white

                px-6
                py-4

                whitespace-nowrap
                transition
              "
            >
              Let's Connect →
            </button>
          </div>

          {/* Right Illustration */}

          <div className="flex justify-center">
            <img
              src="/images/footer-right.png"
              alt="Bharatanatyam"
              className="
                w-24
                sm:w-32
                md:w-36
                lg:w-40
                xl:w-48
              "
            />
          </div>
        </div>
      </section>

      {/* ================= MAIN FOOTER ================= */}

      <section
        className="
          max-w-7xl
          mx-auto

          px-4
          sm:px-6
          lg:px-8

          py-12
          lg:py-16
          xl:py-20
        "
      >
        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5

            gap-10
            lg:gap-12
          "
        >
          {/* Logo */}

          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/logo_bg.png"
              alt="HunchMind"
              className="
                h-16
                sm:h-20
                lg:h-24
                w-auto
              "
            />

            <p
              className="
                text-gray-600
                leading-7
                mt-4
                text-sm
                sm:text-base
              "
            >
              Intelligence and insight supply chains forward.
              Smarter decisions.
              Stronger networks.
              Sustainable impact.
            </p>

            <div
              className="
                flex
                flex-wrap
                gap-4
                mt-6
                text-sm
                sm:text-base
              "
            >
              <a href="#">LinkedIn</a>
              <a href="#">X</a>
              <a href="#">YouTube</a>
              <a href="#">Instagram</a>
            </div>
          </div>

          {/* Company */}

          <div>
            <h4 className="font-semibold mb-5 text-lg">
              Company
            </h4>

            <div className="space-y-3 text-gray-600">
              <Link href="/about">About Us</Link>

              <div>
                <Link href="/vision">Our Vision</Link>
              </div>

              <div>
                <Link href="/careers">Careers</Link>
              </div>

              <div>
                <Link href="/contact">Contact Us</Link>
              </div>
            </div>
          </div>

          {/* Solutions */}

          <div>
            <h4 className="font-semibold mb-5 text-lg">
              Solutions
            </h4>

            <div className="space-y-3 text-gray-600">
              <p>Supply Intelligence</p>

              <p>Logistics Intelligence</p>

              <p>Infrastructure Intelligence</p>

              <p>Decision Intelligence</p>
            </div>
          </div>

          {/* Resources */}

          <div>
            <h4 className="font-semibold mb-5 text-lg">
              Resources
            </h4>

            <div className="space-y-3 text-gray-600">
              <p>Insights</p>

              <p>Reports</p>

              <p>Blog</p>

              <p>Case Studies</p>
            </div>
          </div>

          {/* Stay Connected */}

          <div>
            <h4 className="font-semibold mb-5 text-lg">
              Stay Connected
            </h4>

            <p className="text-gray-600 mb-5">
              Join our network and get the latest insights and updates.
            </p>

            <div
              className="
                flex
                border
                rounded-xl
                overflow-hidden
              "
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  px-4
                  py-3
                  flex-1
                  outline-none
                  min-w-0
                "
              />

              <button className="px-5">
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COPYRIGHT ================= */}

      <section className="border-t">
        <div
          className="
            max-w-7xl
            mx-auto

            px-4
            sm:px-6
            lg:px-8

            py-6

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-4
          "
        >
          <p
            className="
              text-sm
              text-gray-500
              text-center
              md:text-left
            "
          >
            © 2026 HunchMind Intelligence Pvt. Ltd. All rights reserved.
          </p>

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-6

              text-sm
              text-gray-500
            "
          >
            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms of Use
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}