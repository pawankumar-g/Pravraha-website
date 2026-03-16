"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  Filter as FilterIcon,
  Building2,
  MoreHorizontal,
  ArrowUpDown,
  X,
} from "lucide-react";

export default function LeadsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const leads = [
    {
      name: "Eric Hixson",
      company: "Google",
      title: "VP Data Science & Methodology",
    },
    {
      name: "John J Korsah",
      company: "Microsoft",
      title: "Vice President, Finance Head",
    },
    {
      name: "Andy Deshong",
      company: "Amazon",
      title: "Group Senior Vice President",
    },
    {
      name: "Will B.",
      company: "IBM",
      title: "Director of Information Technology",
    },
    {
      name: "Andy Jelagin",
      company: "Oracle",
      title: "IT Director",
    },
  ];

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col lg:flex-row flex-1 bg-gray-50 min-h-screen relative">

      {/* Mobile/Tablet overlay backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* FILTER SIDEBAR */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-30
          w-72 sm:w-80 lg:w-80
          bg-white border-b lg:border-r shadow-sm p-6 space-y-5
          transform transition-transform duration-300 ease-in-out
          overflow-y-auto h-full
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#0F2A3A] font-semibold">
            <FilterIcon size={18} />
            Filters
          </div>
          {/* Close button — mobile/tablet only */}
          <button
            className="lg:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          <Filter label="First Name" />
          <Filter label="Last Name" />
          <Filter label="Title" />
          <Filter label="Department" />
          <Filter label="Seniority" />
          <Filter label="Company Name" />
          <Filter label="City" />
          <Filter label="State" />
          <Filter label="Country" />
          <Filter label="LinkedIn" />
          <Filter label="Website" />
          <Filter label="Tags" />
        </div>

        <div className="pt-4 space-y-3">
          <button
            onClick={() => setSidebarOpen(false)}
            className="w-full bg-gradient-to-r from-[#4F6F73] to-[#2F5E66] text-white py-2.5 rounded-lg font-medium shadow-md hover:from-[#3f5d61] hover:to-[#274f55] transition-all duration-300"
          >
            Apply Filters
          </button>

          <button className="w-full border border-gray-300 text-gray-600 py-2.5 rounded-lg hover:bg-[#eef3f3] hover:border-[#4F6F73] hover:text-[#2F5E66] transition-all duration-300">
            Clear Filters
          </button>

          <button className="w-full border border-gray-300 text-gray-600 py-2.5 rounded-lg hover:bg-[#eef3f3] hover:border-[#4F6F73] hover:text-[#2F5E66] transition-all duration-300">
            Save Filter
          </button>
        </div>
      </aside>

      {/* MAIN SECTION */}
      <section className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0">

        <div className="mb-4 flex flex-wrap gap-2">
          <Link
            href="/dashboard/leads"
            className="px-3 py-1 rounded-md bg-gradient-to-r from-[#4F6F73] to-[#2F5E66] text-white hover:bg-blue-700"
          >
            Leads
          </Link>
          <Link
            href="/dashboard/companies"
            className="px-3 py-1 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200"
          >
            Companies
          </Link>
        </div>

        {/* TOP BAR */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 mb-8">

          {/* SEARCH + mobile filter toggle */}
          <div className="flex items-center gap-2 w-full xl:max-w-md">
            {/* Filter toggle — mobile/tablet only */}
            <button
              className="lg:hidden shrink-0 flex items-center gap-2 px-3 py-2.5 border border-gray-300 rounded-full bg-white text-gray-700 text-sm hover:bg-[#eef3f3] hover:border-[#4F6F73] transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <FilterIcon size={16} />
              <span className="hidden sm:inline">Filters</span>
            </button>

            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for leads by name, company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-[#4F6F73] focus:border-[#4F6F73] outline-none transition-shadow shadow-sm hover:shadow-md"
              />
            </div>
          </div>

          {/* CONTACT COUNT */}
          <div className="text-sm text-gray-500 text-center xl:text-left">
            Total Contacts
            <span className="ml-2 font-semibold text-[#0F2A3A]">1,000</span>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-[#eef3f3] hover:border-[#4F6F73] text-gray-700 hover:text-[#2F5E66] text-sm font-medium transition-colors"
              onClick={() => setSidebarOpen((v) => !v)}
            >
              {sidebarOpen ? "Hide Filters" : "Show Filters"}
            </button>

            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#4F6F73] to-[#2F5E66] hover:from-[#3f5d61] hover:to-[#274f55] text-white text-sm font-medium transition-colors shadow-md">
              Create List
            </button>

            <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-[#eef3f3] hover:border-[#4F6F73] text-gray-700 hover:text-[#2F5E66] text-sm font-medium transition-colors">
              Add to List
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <div className="max-h-[520px] overflow-y-auto min-w-[400px]">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wide sticky top-0 z-10 border-b">
                  <tr>
                    <th className="p-4 w-4">
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-[#2F5E66] rounded"
                      />
                    </th>

                    <th className="p-4 text-left font-semibold text-gray-900">
                      <div className="flex items-center gap-1 cursor-pointer">
                        Contact
                        <ArrowUpDown size={14} className="text-gray-400" />
                      </div>
                    </th>

                    {/* Title column hidden on very small screens */}
                    <th className="p-4 text-left hidden sm:table-cell font-semibold text-gray-900">Title</th>

                    <th className="p-4"></th>
                  </tr>
                </thead>

                <tbody>
                  {filteredLeads.map((lead, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors duration-200"
                    >
                      <td className="p-4 w-4">
                        <input
                          type="checkbox"
                          className="w-4 h-4 accent-[#2F5E66] rounded"
                        />
                      </td>

                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#E0E7FF] to-[#C7D2FE] text-[#3730A3] rounded-full flex items-center justify-center text-sm font-bold shadow-inner shrink-0">
                            {lead.name.charAt(0)}
                          </div>

                          <div>
                            <div className="font-semibold text-gray-800">
                              {lead.name}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center gap-1.5">
                              <Building2 size={14} />
                              {lead.company}
                            </div>
                            {/* Title shown inline under name on mobile */}
                            <div className="text-xs text-gray-400 mt-0.5 sm:hidden">
                              {lead.title}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Title column hidden on very small screens */}
                      <td className="p-4 text-gray-600 hidden sm:table-cell">
                        {lead.title}
                      </td>

                      <td className="p-4 text-right">
                        <button className="p-2 rounded-full text-gray-400 hover:bg-gray-200/60 hover:text-gray-600 transition-colors">
                          <MoreHorizontal size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* PAGINATION */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          <div className="text-sm text-gray-500 text-center sm:text-left">
            Showing{" "}
            <span className="font-medium text-[#0F2A3A]">1-10</span> of
            <span className="font-medium text-[#0F2A3A]"> 8,000</span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2">
            <button className="px-3 py-1.5 border border-gray-300 rounded-md hover:bg-[#eef3f3] text-sm text-gray-700 transition-colors">
              Prev
            </button>

            <button className="px-3 py-1.5 rounded-md bg-[#2F5E66] hover:bg-[#274f55] text-white text-sm transition-colors">
              1
            </button>

            <button className="px-3 py-1.5 border border-gray-300 rounded-md hover:bg-[#eef3f3] text-sm text-gray-700 transition-colors">
              2
            </button>

            <button className="px-3 py-1.5 border border-gray-300 rounded-md hover:bg-[#eef3f3] text-sm text-gray-700 transition-colors">
              3
            </button>

            <span className="px-2 text-gray-400">...</span>

            <button className="px-3 py-1.5 border border-gray-300 rounded-md hover:bg-[#eef3f3] text-sm text-gray-700 transition-colors">
              5
            </button>

            <button className="px-3 py-1.5 border border-gray-300 rounded-md hover:bg-[#eef3f3] text-sm text-gray-700 transition-colors">
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

type FilterProps = {
  label: string;
};

function Filter({ label }: FilterProps) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <input
        placeholder={label}
        className="w-full border rounded-lg px-3 py-2 text-base text-gray-900 focus:ring-2 focus:ring-[#4F6F73] outline-none"
      />
    </div>
  );
}