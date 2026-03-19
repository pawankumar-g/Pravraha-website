// import Image from "next/image";
// import Link from "next/link";
// import {
//   Linkedin,
//   Twitter,
//   Instagram,
//   Youtube,
//   Mail,
//   MapPin
// } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-50 mt-12">

//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

//         {/* Company Info */}
//         <div className="lg:col-span-2">
//           <Image
//             src="/logo.avif"
//             alt="PravRaha"
//             width={150}
//             height={40}
//             className="mb-4"
//           />

//           <p className="text-gray-600 max-w-md leading-relaxed mb-6">
//             High Quality by Definition, Excellence by Execution.
//             We help companies accelerate growth through data-driven
//             marketing and technology solutions.
//           </p>

//           {/* Social Icons */}
//           <div className="flex gap-4 text-gray-600">
//             <Linkedin className="cursor-pointer hover:text-orange-500 transition" />
//             <Twitter className="cursor-pointer hover:text-orange-500 transition" />
//             <Instagram className="cursor-pointer hover:text-orange-500 transition" />
//             <Youtube className="cursor-pointer hover:text-orange-500 transition" />
//           </div>
//         </div>

//         {/* Products */}
//         <div>
//           <h3 className="font-semibold text-lg mb-4 text-gray-900">Products</h3>

//           <ul className="space-y-3 text-gray-600">
//             <li>
//               <Link href="#" className="hover:text-orange-500 transition">
//                 Go-to-Market Platform
//               </Link>
//             </li>
//             <li>
//               <Link href="#" className="hover:text-orange-500 transition">
//                 Lead Enrichment
//               </Link>
//             </li>
//             <li>
//               <Link href="#" className="hover:text-orange-500 transition">
//                 Multi-Channel Outreach
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="font-semibold text-lg mb-4 text-gray-900">Contact</h3>

//           <div className="space-y-4 text-gray-600">

//             <div className="flex items-center gap-3">
//               <Mail size={18} />
//               <p>support@pravraha.com</p>
//             </div>

//             <div className="flex items-start gap-3">
//               <MapPin size={18} className="text-yellow-400 mt-1" />
//               <p>
//                 <span className="font-medium text-gray-800">
//                   Headquarter:
//                 </span>{" "}
//                 Arizona, USA
//                 <br />
//                 <span className="font-medium text-gray-800">
//                   Delivery Center:
//                 </span>{" "}
//                  Ranchi, Jharkhand
//               </p>
//             </div>

//           </div>
//         </div>

//         {/* Global Presence */}
//         <div>
//           <h3 className="font-semibold text-lg mb-4 text-gray-900">
//             Global Presence
//           </h3>

//           <div className="space-y-4 text-gray-600">

//             <div className="flex items-start gap-3">
//               <MapPin size={18} className="text-yellow-400 mt-1" />
//               <div>
//                 <p className="font-medium text-gray-800"> Headquarter</p>
//                 <p className="text-sm text-gray-500">
//                   Arizona, USA<br />
//                   +971 50 716 4929
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3">
//               <MapPin size={18} className="text-yellow-400 mt-1" />
//               <div>
//                 <p className="font-medium text-gray-800">Ranchi(Jharkhand),India</p>
//                 <p className="text-sm text-gray-500">
//                   HEC Colony, Sector 3, Dhurwa, Ranchi, Jharkhand  <br />
//                   +91 900 001 2536
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>

//       </div>

//       {/* Newsletter */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
//         <p className="text-gray-600">
//           Subscribe to our newsletter for updates and insights.
//         </p>

//         <div className="flex w-full md:w-auto">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none w-full md:w-64 text-gray-900 placeholder:text-gray-500"
//           />

//           <button className="bg-orange-500 text-white px-6 rounded-r-lg hover:bg-orange-600 transition">
//             Subscribe
//           </button>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="border-t border-gray-200">
//         <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
//           <p>© 2026 PravRaha. All Rights Reserved.</p>

//           <div className="flex gap-6 mt-3 md:mt-0">
//             <Link href="#" className="hover:text-orange-500 transition">
//               Privacy Policy
//             </Link>
//             <Link href="#" className="hover:text-orange-500 transition">
//               Terms
//             </Link>
//             <Link href="#" className="hover:text-orange-500 transition">
//               Cookies
//             </Link>
//           </div>
//         </div>
//       </div>

//     </footer>
//   );
// }


// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

        {/* Company Info */}
        <div className="lg:col-span-2">
          <Image
            src="/logo.avif"
            alt="PravRaha"
            width={150}
            height={40}
            className="mb-4"
          />

          <p className="text-gray-600 max-w-md leading-relaxed mb-6">
            High Quality by Definition, Excellence by Execution.
            We help companies accelerate growth through data-driven
            marketing and technology solutions.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-600">
            <Linkedin className="cursor-pointer hover:text-orange-500 transition" />
            <Twitter className="cursor-pointer hover:text-orange-500 transition" />
            <Instagram className="cursor-pointer hover:text-orange-500 transition" />
            <Youtube className="cursor-pointer hover:text-orange-500 transition" />
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-900">Products</h3>

          <ul className="space-y-3 text-gray-600">
            <li>
              <Link href="#" className="hover:text-orange-500 transition">
                Go-to-Market Platform
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-orange-500 transition">
                Lead Enrichment
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-orange-500 transition">
                Multi-Channel Outreach
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-900">Contact</h3>

          <div className="space-y-4 text-gray-600">

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <p>support@pravraha.com</p>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-yellow-400 mt-1" />
              <p>
                <span className="font-medium text-gray-800">
                  Headquarter:
                </span>{" "}
                Arizona, USA
                <br />
                <span className="font-medium text-gray-800">
                  Delivery Center:
                </span>{" "}
                Ranchi, Jharkhand
              </p>
            </div>

          </div>
        </div>

        {/* Global Presence */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-900">
            Global Presence
          </h3>

          <div className="space-y-4 text-gray-600">

            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-yellow-400 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Headquarter</p>
                <p className="text-sm text-gray-500">
                  Arizona, USA<br />
                  +971 50 716 4929
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-yellow-400 mt-1" />
              <div>
                <p className="font-medium text-gray-800">
                  Ranchi (Jharkhand), India
                </p>
                <p className="text-sm text-gray-500">
                  HEC Colony, Sector 3, Dhurwa, Ranchi, Jharkhand<br />
                  +91 900 001 2536
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-200">
        <p className="text-gray-600">
          Subscribe to our newsletter for updates and insights.
        </p>

        <div className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none w-full md:w-64 text-gray-900 placeholder:text-gray-500"
          />

          <button className="bg-orange-500 text-white px-6 rounded-r-lg hover:bg-orange-600 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2026 PravRaha. All Rights Reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <Link href="#" className="hover:text-orange-500 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-orange-500 transition">
              Terms
            </Link>
            <Link href="#" className="hover:text-orange-500 transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}



