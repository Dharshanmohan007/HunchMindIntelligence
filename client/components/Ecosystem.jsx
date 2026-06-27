import {
  Leaf,
  Store,
  Truck,
  Warehouse,
  ShoppingCart,
  Sprout,
} from "lucide-react";

const items = [
  { icon: Leaf, label: "Farmers" },
  { icon: Store, label: "Traders" },
  { icon: Truck, label: "Transporters" },
  { icon: Warehouse, label: "Wholesalers" },
  { icon: ShoppingCart, label: "Retailers" },
  { icon: Sprout, label: "Agri Businesses" },
];

export default function Ecosystem() {
  return (
    <div
      className="
        relative
        lg:absolute
        left-1/2
        lg:bottom-[-60px]
        z-20
        w-full
        max-w-[1360px]
        -translate-x-1/2
        px-4
        sm:px-6
        lg:px-0
        mt-8
        lg:mt-0
      "
    >
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.12)]">
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-[320px_repeat(6,minmax(0,1fr))]
          "
        >
          {/* Heading */}
          <div
            className="
              col-span-2
            md:col-span-3
            lg:col-span-1
            flex
            items-center
            justify-start
            px-8
            py-6
            border-b
            lg:border-b-0
            lg:border-r
            border-gray-200
            "
          >
            <div>
              <span className="block text-xs sm:text-sm lg:text-[15px] font-semibold text-black">
                We work with the entire
              </span>

              <span className="block text-xs sm:text-sm lg:text-[15px] font-semibold text-green-700">
                supply chain ecosystem
              </span>
            </div>
          </div>

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                flex
                flex-col
                items-center
                justify-center
                gap-2
                px-3
                py-5
                border-b
                lg:border-b-0
                border-gray-200
                lg:border-r
                last:lg:border-r-0
                "
              >
                <Icon
                  className="
                    w-6
                    h-6
                    sm:w-7
                    sm:h-7
                    text-gray-700
                  "
                />

                <span
                  className="
                    text-center
                    text-xs
                    sm:text-sm
                    lg:text-sm
                    font-medium
                    text-gray-800
                  "
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}