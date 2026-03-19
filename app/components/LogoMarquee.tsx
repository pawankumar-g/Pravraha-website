// "use client";

// import Image from "next/image";

// const logos = [
//   "/logos/c2s.png",
//   "/logos/tz.png",
// ];

// export default function LogoMarquee() {
//   return (
//     <section className="relative w-full overflow-hidden bg-gray-100 py-8">
//       <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
//         {[...logos, ...logos].map((logo, i) => (
//           <div key={i} className="mx-12 flex items-center">
//             <Image
//               src={logo}
//               alt="Company Logo"
//               width={140}
//               height={50}
//               className="object-contain"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Gradient fade edges */}
//       <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-100 to-transparent" />
//       <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-100 to-transparent" />
//     </section>
//   );
// }