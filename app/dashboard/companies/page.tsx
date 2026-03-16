"use client";

import { useState } from "react";
import {
  Search,
  Building2,
  Globe,
  MapPin,
  Filter,
  ChevronDown,
  X,
} from "lucide-react";

type SectionKey = "company" | "website" | "industry" | "location" | "technologies" | "companySize" | "annualRevenue";

type FiltersData = {
  company: string;
  website: string;
  industry: string;
  city: string;
  state: string;
  country: string;
  technology: string;
  companySizeMin: string;
  companySizeMax: string;
  revenueMin: string;
  revenueMax: string;
};

type FilterItem = { label: string; key: SectionKey };

type SidebarContentProps = {
  filters: readonly FilterItem[];
  openSection: Record<SectionKey, boolean>;
  toggleSection: (section: SectionKey) => void;
  filtersData: FiltersData;
  setFiltersData: React.Dispatch<React.SetStateAction<FiltersData>>;
  inputClass: string;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleApplyFilters: () => void;
  handleClearFilters: () => void;
  handleSaveFilters: () => void;
};

function SidebarContent({
  filters,
  openSection,
  toggleSection,
  filtersData,
  setFiltersData,
  inputClass,
  setSidebarOpen,
  handleApplyFilters,
  handleClearFilters,
  handleSaveFilters,
}: SidebarContentProps) {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto pb-28">
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 font-semibold text-gray-800 text-lg">
            <Filter size={18} />
            Filters
          </div>
          <button
            className="lg:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          {filters.map((filter, index) => {
            const isOpen = openSection[filter.key];
            let body = null;

            if (filter.key === "company") {
              body = (
                <input
                  value={filtersData.company}
                  onChange={(e) =>
                    setFiltersData({ ...filtersData, company: e.target.value })
                  }
                  type="text"
                  placeholder="Enter company name..."
                  className={inputClass}
                />
              );
            } else if (filter.key === "website") {
              body = (
                <input
                  value={filtersData.website}
                  onChange={(e) =>
                    setFiltersData({ ...filtersData, website: e.target.value })
                  }
                  type="text"
                  placeholder="Enter website..."
                  className={inputClass}
                />
              );
            } else if (filter.key === "industry") {
              body = (
                <select
                  value={filtersData.industry}
                  onChange={(e) =>
                    setFiltersData({ ...filtersData, industry: e.target.value })
                  }
                  className={inputClass}
                >
                  <option value="">Select industries...</option>
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Retail</option>
                </select>
              );
            } else if (filter.key === "location") {
              body = (
                <div className="space-y-2 mt-2">
                  <input
                    placeholder="City"
                    value={filtersData.city}
                    onChange={(e) =>
                      setFiltersData({ ...filtersData, city: e.target.value })
                    }
                    className={inputClass}
                  />
                  <input
                    placeholder="State"
                    value={filtersData.state}
                    onChange={(e) =>
                      setFiltersData({ ...filtersData, state: e.target.value })
                    }
                    className={inputClass}
                  />
                  <select
                    value={filtersData.country}
                    onChange={(e) =>
                      setFiltersData({ ...filtersData, country: e.target.value })
                    }
                    className={inputClass}
                  >
                    <option value="">Select country...</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>India</option>
                  </select>
                </div>
              );
            } else if (filter.key === "technologies") {
              body = (
                <select
                  value={filtersData.technology}
                  onChange={(e) =>
                    setFiltersData({ ...filtersData, technology: e.target.value })
                  }
                  className={inputClass}
                >
                  <option value="">Select technologies...</option>
                  <option>React</option>
                  <option>Angular</option>
                  <option>Node.js</option>
                  <option>Python</option>
                  <option>AWS</option>
                </select>
              );
            } else if (filter.key === "companySize") {
              body = (
                <div className="flex gap-2 mt-2">
                  <input
                    placeholder="Min"
                    value={filtersData.companySizeMin}
                    onChange={(e) =>
                      setFiltersData({ ...filtersData, companySizeMin: e.target.value })
                    }
                    className={inputClass}
                  />
                  <input
                    placeholder="Max"
                    value={filtersData.companySizeMax}
                    onChange={(e) =>
                      setFiltersData({ ...filtersData, companySizeMax: e.target.value })
                    }
                    className={inputClass}
                  />
                </div>
              );
            } else if (filter.key === "annualRevenue") {
              body = (
                <div className="flex gap-2 mt-2">
                  <input
                    placeholder="Min"
                    value={filtersData.revenueMin}
                    onChange={(e) =>
                      setFiltersData({ ...filtersData, revenueMin: e.target.value })
                    }
                    className={inputClass}
                  />
                  <input
                    placeholder="Max"
                    value={filtersData.revenueMax}
                    onChange={(e) =>
                      setFiltersData({ ...filtersData, revenueMax: e.target.value })
                    }
                    className={inputClass}
                  />
                </div>
              );
            }

            return (
              <div key={index}>
                <button
                  className="w-full flex justify-between items-center text-left text-gray-700 hover:text-gray-900"
                  onClick={() => toggleSection(filter.key)}
                >
                  {filter.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && body}
              </div>
            );
          })}
        </div>

        <div className="mt-4 space-y-2">
          <button
            onClick={handleApplyFilters}
            className="w-full bg-[#D4AF37] text-white py-2 rounded-lg font-medium"
          >
            Apply Filters
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleClearFilters}
              className="flex-1 border border-gray-300 bg-white text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Clear
            </button>
            <button
              onClick={handleSaveFilters}
              className="flex-1 border border-blue-500 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CompaniesPage() {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [filtersData, setFiltersData] = useState({
    company: "",
    website: "",
    industry: "",
    city: "",
    state: "",
    country: "",
    technology: "",
    companySizeMin: "",
    companySizeMax: "",
    revenueMin: "",
    revenueMax: "",
  });

  const [openSection, setOpenSection] = useState({
    company: false,
    website: false,
    industry: false,
    location: false,
    technologies: false,
    companySize: false,
    annualRevenue: false,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const companies = [
    { name: "AbbVie", website: "abbvie.com", location: "Illinois" },
    { name: "Omnicell", website: "omnicell.com", location: "Texas" },
    { name: "ISG Technology LLC", website: "isgtech.com", location: "Kansas" },
    { name: "Veradigm", website: "veradigm.com", location: "Illinois" },
    { name: "Mattress Firm", website: "mattressfirm.com", location: "Texas" },
    { name: "Resman Limited", website: "resman.co.uk", location: "England" },
    {
      name: "Finance of America",
      website: "financeofamerica.com",
      location: "Oklahoma",
    },
    { name: "DNOW", website: "dnow.com", location: "Texas" },
  ];

  const [filteredCompanies, setFilteredCompanies] = useState(companies);

  const toggleSection = (section: SectionKey) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleApplyFilters = () => {
    let results = companies;

    if (filtersData.company) {
      results = results.filter((c) =>
        c.name.toLowerCase().includes(filtersData.company.toLowerCase())
      );
    }

    if (filtersData.website) {
      results = results.filter((c) =>
        c.website.toLowerCase().includes(filtersData.website.toLowerCase())
      );
    }

    if (filtersData.state) {
      results = results.filter((c) =>
        c.location.toLowerCase().includes(filtersData.state.toLowerCase())
      );
    }

    setFilteredCompanies(results);
    setCurrentPage(1);
    setSidebarOpen(false);
  };

  const handleClearFilters = () => {
    setFiltersData({
      company: "",
      website: "",
      industry: "",
      city: "",
      state: "",
      country: "",
      technology: "",
      companySizeMin: "",
      companySizeMax: "",
      revenueMin: "",
      revenueMax: "",
    });

    setFilteredCompanies(companies);
    setCurrentPage(1);
  };

  const handleSaveFilters = () => {
    console.log("Saved filters:", filtersData);
    alert("Filters saved!");
  };

  const filters = [
    { label: "Company Name", key: "company" },
    { label: "Website & Domain", key: "website" },
    { label: "Industry", key: "industry" },
    { label: "Location", key: "location" },
    { label: "Technologies", key: "technologies" },
    { label: "Company Size (Employees)", key: "companySize" },
    { label: "Annual Revenue", key: "annualRevenue" },
  ] as const;

  const searchedCompanies = filteredCompanies.filter((company) =>
    company.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(searchedCompanies.length / pageSize));
  const startItemIndex = (currentPage - 1) * pageSize;
  const endItemIndex = Math.min(currentPage * pageSize, searchedCompanies.length);
  const paginatedCompanies = searchedCompanies.slice(startItemIndex, endItemIndex);

  const goToPage = (page: number) => {
    const normalized = Math.max(1, Math.min(totalPages, page));
    setCurrentPage(normalized);
  };

  const inputClass =
    "mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] outline-none transition";

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">

      {/* Mobile/Tablet overlay backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-30
          flex flex-col w-72 bg-white border-r h-screen
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <SidebarContent
          filters={filters}
          openSection={openSection}
          toggleSection={toggleSection}
          filtersData={filtersData}
          setFiltersData={setFiltersData}
          inputClass={inputClass}
          setSidebarOpen={setSidebarOpen}
          handleApplyFilters={handleApplyFilters}
          handleClearFilters={handleClearFilters}
          handleSaveFilters={handleSaveFilters}
        />

      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden min-w-0">

        {/* Top bar */}
        <div className="bg-white border-b px-4 sm:px-6 py-4 flex items-center gap-3">
          {/* Filter toggle button — mobile/tablet only */}
          <button
            className="lg:hidden flex items-center gap-2 px-3 py-2 border rounded-lg text-gray-700 text-sm shrink-0"
            onClick={() => setSidebarOpen(true)}
          >
            <Filter size={16} />
            <span className="hidden sm:inline">Filters</span>
          </button>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search companies..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-9 pr-4 py-2 border rounded-lg w-full text-gray-900 outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37]"
            />
          </div>
        </div>

        {/* Table area */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
            <table className="w-full min-w-[400px]">
              <thead className="bg-gray-50 border-b">
                <tr className="text-left text-gray-600 text-sm">
                  <th className="p-4">
                    <input type="checkbox" />
                  </th>
                  <th className="p-4">Company</th>
                  <th className="p-4 hidden sm:table-cell">Website</th>
                  <th className="p-4 hidden md:table-cell">Location</th>
                </tr>
              </thead>

              <tbody>
                {paginatedCompanies.map((company, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <input type="checkbox" />
                    </td>

                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                          <Building2 size={18} />
                        </div>
                        <div>
                          <span className="font-medium text-gray-800 block">
                            {company.name}
                          </span>
                          {/* Show website & location inline on small screens */}
                          <span className="text-xs text-gray-500 sm:hidden flex items-center gap-1 mt-0.5">
                            <Globe size={11} />
                            {company.website}
                          </span>
                          <span className="text-xs text-gray-500 md:hidden sm:flex hidden items-center gap-1 mt-0.5">
                            <MapPin size={11} />
                            {company.location}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="p-4 hidden sm:table-cell">
                      <div className="flex items-center gap-2 text-gray-800">
                        <Globe size={16} />
                        {company.website}
                      </div>
                    </td>

                    <td className="p-4 hidden md:table-cell">
                      <div className="flex items-center gap-2 text-gray-800">
                        <MapPin size={16} />
                        {company.location}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-3 flex flex-col sm:flex-row items-center justify-between gap-3 px-3 py-2 bg-white border rounded-lg">
            <span className="text-sm text-gray-600">
              Showing {startItemIndex + 1} to {endItemIndex} of {searchedCompanies.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded-lg text-sm text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              <div className="w-12 h-8 flex items-center justify-center border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-800">
                {currentPage}
              </div>

              <span className="text-sm text-gray-600">/ {totalPages}</span>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded-lg text-sm text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}