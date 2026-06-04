// import { PlayCircle, ArrowRight } from "lucide-react";

// export default function Hero() {
//     return (
//         <section className="py-10 overflow-hidden">
//         <div className="max-w-6xl mx-auto px-6">
//             <div className="grid lg:grid-cols-2 gap-12 items-center ">
//             {/* LEFT SIDE */}
//             <div className="flex items-center relative z-20">
//                 <div>
//                 <p className="uppercase tracking-widest text-[#0C8A45] font-semibold text-sm mb-8">
//                     Intelligence That Drives Movement
//                 </p>
//                 <h1 className="font-[var(--font-playfair)] text-6xl xl:text-7xl leading-[1.05] font-bold text-[#081225]">
//                     Intelligence for
//                     <br />
//                     Smarter{" "}
//                     <span className="text-[#0C8A45]">
//                     Supply
//                     </span>
//                     <br />
//                     <span className="text-[#0C8A45]">
//                     Chains.
//                     </span>
//                 </h1>
//                 <p className="mt-10 text-[#4B5563] text-xl leading-10 max-w-xl">
//                     We transform fragmented data into actionable insights
//                     to help businesses move smarter, reduce waste and
//                     maximize profitability across South India.
//                 </p>
//                 <div className="flex items-center gap-6 mt-12">
//                     <button className="bg-[#0C8A45] text-white px-10 py-5 rounded-2xl text-lg font-medium flex items-center gap-2">
//                     Explore Our Vision
//                     <ArrowRight size={18} />
//                     </button>
//                     <button className="border border-gray-300 bg-white px-10 py-5 rounded-2xl text-lg font-medium flex items-center gap-3">
//                     Watch Video
//                     <PlayCircle
//                         size={22}
//                         className="text-[#0C8A45]"
//                     />
//                     </button>
//                 </div>
//                 </div>
//             </div>
//             {/* RIGHT IMAGE */}
//             <div className="relative h-[650px]">
//                 <img
//                 src="/hero_bg.png"
//                 alt="South India Market"
//                 className="absolute inset-0 w-full h-full object-cover rounded-3xl"
//                 />
//                 {/* Fade Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F3] via-[#F8F7F3]/40 to-transparent" />
//                 {/* Language Card */}
//                 <div className="absolute top-10 right-6 bg-white rounded-2xl shadow-xl p-6 w-72">
//                 <h3 className="text-3xl font-semibold text-[#111827] mb-8">
//                     We speak your language
//                 </h3>
//                 <LanguageItem native="ಕನ್ನಡ" english="Kannada" />
//                 <LanguageItem native="தமிழ்" english="Tamil" />
//                 <LanguageItem native="తెలుగు" english="Telugu" />
//                 <LanguageItem native="മലയാളം" english="Malayalam" />
//                 <LanguageItem native="English" english="English" />
//                 </div>
//             </div>
//             </div>
//         </div>
//         </section>
//     );
//     }

//     function LanguageItem({ native, english }) {
//     return (
//         <div className="flex justify-between items-center py-5 border-b border-gray-200">
//         <div>
//             <h4 className="text-lg font-semibold text-[#111827]">
//             {native}
//             </h4>
//             <p className="text-sm text-gray-500">
//             {english}
//             </p>
//         </div>
//         <span className="text-xl">
//             →
//         </span>
//         </div>
//     );
// }


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
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0 group cursor-pointer hover:bg-gray-50 px-1 rounded-lg transition-colors">
      <div className="flex items-center gap-3">
        <TempleIcon />
        <div className="flex items-baseline gap-2">
          <span className="text-[15px] font-bold text-[#111827]">{native}</span>
          <span className="text-xs text-gray-400 font-normal">{english}</span>
        </div>
      </div>
      <ArrowRight
        size={14}
        className="text-gray-300 group-hover:text-[#0C8A45] transition-colors flex-shrink-0"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#F5F4EF", minHeight: "calc(100vh - 72px)" }}
    >
      {/* Full-bleed image starting from ~38% left */}
      <div className="absolute inset-0" style={{ left: "38%" }}>
        <img
          src="/hero.png"
          alt="South India Market"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />
      </div>

      {/* Left-to-right fade overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #F5F4EF 0%, #F5F4EF 26%, rgba(245,244,239,0.88) 36%, rgba(245,244,239,0.45) 48%, rgba(245,244,239,0.0) 64%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-14">
        <div
          className="grid lg:grid-cols-2 items-center"
          style={{ minHeight: "calc(100vh - 72px)" }}
        >
          {/* LEFT */}
          <div className="py-16 lg:py-20">
            <p
              className="uppercase font-bold text-[#0C8A45] mb-6 tracking-[0.18em]"
              style={{ fontSize: "11px" }}
            >
              Intelligence That Drives Movement
            </p>

            <h1
              className="font-bold text-[#081225] leading-[1.05] mb-7"
              style={{
                fontFamily: "'Georgia', 'Palatino Linotype', 'Book Antiqua', serif",
                fontSize: "clamp(44px, 4.8vw, 72px)",
              }}
            >
              Intelligence for
              <br />
              Smarter{" "}
              <span className="text-[#0C8A45]">Supply</span>
              <br />
              <span className="text-[#0C8A45]">Chains.</span>
            </h1>

            <p
              className="text-[#4B5563] leading-7 max-w-[420px]"
              style={{ fontSize: "15px" }}
            >
              We transform fragmented data into actionable insights
              to help businesses move smarter, reduce waste and
              maximize profitability across South India.
            </p>

            <div className="flex items-center gap-4 mt-10">
              <button
                className="bg-[#0C8A45] hover:bg-[#09703a] text-white font-semibold flex items-center gap-2 transition-colors"
                style={{
                  padding: "14px 28px",
                  borderRadius: "14px",
                  fontSize: "15px",
                  boxShadow: "0 8px 24px rgba(12,138,69,0.28)",
                }}
              >
                Explore Our Vision
                <ArrowRight size={16} />
              </button>

              <button
                className="bg-white border border-gray-200 hover:bg-gray-50 text-[#081225] font-semibold flex items-center gap-2 transition-colors"
                style={{
                  padding: "14px 28px",
                  borderRadius: "14px",
                  fontSize: "15px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                }}
              >
                Watch Video
                <PlayCircle size={20} className="text-[#0C8A45]" />
              </button>
            </div>
          </div>

          {/* RIGHT — Language card */}
          <div className="relative flex justify-end items-start pt-16">
            <div
              className="bg-white rounded-2xl p-5"
              style={{
                width: "272px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.08)",
              }}
            >
              <h3
                className="font-bold text-[#111827] mb-3"
                style={{ fontSize: "18px" }}
              >
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



// import { PlayCircle, ArrowRight } from "lucide-react";

// const languages = [
//   { native: "ಕನ್ನಡ", english: "Kannada" },
//   { native: "தமிழ்", english: "Tamil" },
//   { native: "తెలుగు", english: "Telugu" },
//   { native: "മലയാളം", english: "Malayalam" },
//   { native: "English", english: "English" },
// ];

// function TempleIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <polygon points="12,2 10.5,5 13.5,5" fill="#6B7280" opacity="0.7" />
//       <rect x="9.5" y="5"   width="5"  height="2.2" rx="0.3" fill="#6B7280" opacity="0.75" />
//       <rect x="8"   y="7.2" width="8"  height="2.2" rx="0.3" fill="#6B7280" opacity="0.80" />
//       <rect x="6.5" y="9.4" width="11" height="2.2" rx="0.3" fill="#6B7280" opacity="0.88" />
//       <rect x="5"   y="11.6" width="14" height="2.2" rx="0.3" fill="#6B7280" opacity="0.94" />
//       <rect x="6"   y="13.8" width="12" height="8"   rx="0.3" fill="#6B7280" />
//       <rect x="10"  y="17.5" width="4"  height="4.3" rx="0.4" fill="white" opacity="0.3" />
//     </svg>
//   );
// }

// function LanguageItem({ native, english }) {
//   return (
//     <div className="flex justify-between items-center py-[11px] border-b border-gray-100 last:border-b-0 group cursor-pointer hover:bg-gray-50 px-1 rounded-md transition-colors">
//       <div className="flex items-center gap-3">
//         <TempleIcon />
//         <div className="flex items-baseline gap-[6px]">
//           <span style={{ fontSize: "14px", fontWeight: "700", color: "#111827" }}>{native}</span>
//           <span style={{ fontSize: "12px", color: "#9CA3AF", fontWeight: "400" }}>{english}</span>
//         </div>
//       </div>
//       <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-gray-300 group-hover:text-[#0C8A45] transition-colors flex-shrink-0">
//         <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     </div>
//   );
// }

// export default function Hero() {
//   return (
//     <section
//       className="relative w-full flex overflow-hidden"
//       style={{ minHeight: "calc(100vh - 72px)", background: "#F5F4EF" }}
//     >
//       {/* ══════════════════════════════════════════
//           LEFT PANEL — pure cream background, text content
//       ══════════════════════════════════════════ */}
//       <div
//         className="relative z-10 flex items-center flex-shrink-0"
//         style={{
//           width: "46%",
//           background: "#F5F4EF",
//           padding: "72px 48px 72px 64px",
//         }}
//       >
//         <div style={{ maxWidth: "480px" }}>
//           {/* Eyebrow */}
//           <p
//             className="uppercase font-bold text-[#0C8A45] mb-5"
//             style={{ fontSize: "10.5px", letterSpacing: "0.2em" }}
//           >
//             Intelligence That Drives Movement
//           </p>

//           {/* Headline */}
//           <h1
//             className="font-bold text-[#081225] leading-[1.06] mb-6"
//             style={{
//               fontFamily: "'Georgia', 'Palatino Linotype', 'Book Antiqua', serif",
//               fontSize: "clamp(40px, 4.2vw, 66px)",
//             }}
//           >
//             Intelligence for
//             <br />
//             Smarter{" "}
//             <span style={{ color: "#0C8A45" }}>Supply</span>
//             <br />
//             <span style={{ color: "#0C8A45" }}>Chains.</span>
//           </h1>

//           {/* Body */}
//           <p
//             className="text-[#4B5563] leading-[1.75]"
//             style={{ fontSize: "14.5px", maxWidth: "390px" }}
//           >
//             We transform fragmented data into actionable insights
//             to help businesses move smarter, reduce waste and
//             maximize profitability across South India.
//           </p>

//           {/* CTAs */}
//           <div className="flex items-center gap-4 mt-9">
//             <button
//               className="bg-[#0C8A45] hover:bg-[#09703a] text-white font-semibold flex items-center gap-2 transition-colors"
//               style={{
//                 padding: "13px 26px",
//                 borderRadius: "12px",
//                 fontSize: "14px",
//                 boxShadow: "0 6px 20px rgba(12,138,69,0.30)",
//               }}
//             >
//               Explore Our Vision
//               <ArrowRight size={15} />
//             </button>

//             <button
//               className="bg-white border border-gray-200 hover:bg-gray-50 text-[#081225] font-semibold flex items-center gap-2 transition-colors"
//               style={{
//                 padding: "13px 26px",
//                 borderRadius: "12px",
//                 fontSize: "14px",
//                 boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
//               }}
//             >
//               Watch Video
//               <PlayCircle size={18} className="text-[#0C8A45]" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ══════════════════════════════════════════
//           RIGHT PANEL — full image, language card floats on top
//       ══════════════════════════════════════════ */}
//       <div className="relative flex-1 overflow-hidden">
//         {/* Hero image fills entire right panel */}
//         <img
//           src="/hero_bg.png"
//           alt="South India Market"
//           className="absolute inset-0 w-full h-full object-cover"
//           style={{ objectPosition: "center center" }}
//         />

//         {/* Subtle left-edge blend so left panel meets image smoothly */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background:
//               "linear-gradient(to right, rgba(245,244,239,0.55) 0%, rgba(245,244,239,0.15) 12%, transparent 28%)",
//           }}
//         />

//         {/* Language card — top right, floating over image */}
//         <div
//           className="absolute bg-white rounded-2xl"
//           style={{
//             top: "40px",
//             right: "28px",
//             width: "265px",
//             padding: "18px 18px 10px 18px",
//             boxShadow: "0 16px 48px rgba(0,0,0,0.16), 0 4px 14px rgba(0,0,0,0.09)",
//           }}
//         >
//           <h3
//             className="font-bold text-[#111827] mb-2"
//             style={{ fontSize: "17px" }}
//           >
//             We speak your language
//           </h3>
//           {languages.map((lang) => (
//             <LanguageItem key={lang.english} native={lang.native} english={lang.english} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }