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
        <div className="absolute left-1/2 bottom-[-60px] z-20 w-[100%] max-w-7xl -translate-x-1/2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-7">
                {/* Heading */}
                <div className="relative p-6 flex items-center">
                    <div className="absolute right-0 top-6 bottom-6 w-px bg-gray-200" />

                    <div className="flex flex-col">
                        <span className="text-black text-sm md:text-base font-semibold whitespace-nowrap">
                        We work with the entire
                        </span>

                        <span className="text-green-700 text-sm md:text-base font-semibold whitespace-nowrap">
                        supply chain ecosystem
                        </span>
                    </div>
                </div>

                {items.map((item, index) => {
                    const Icon = item.icon;

                    return (
                    <div
                        key={index}
                        className="relative flex flex-col items-center justify-center gap-3 p-6"
                    >
                        {index !== items.length - 1 && (
                            <div className="absolute right-0 top-6 bottom-6 w-px bg-gray-200" />
                        )}
                        <Icon className="w-6 h-6 text-gray-700" />
                        <span className="text-sm font-medium text-gray-800 text-center">
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