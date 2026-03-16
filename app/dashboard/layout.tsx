"use client";

import React from "react";
import Link from "next/link";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ClipboardDocumentListIcon,
  AdjustmentsHorizontalIcon,
  RocketLaunchIcon,
  EnvelopeOpenIcon,
  Cog6ToothIcon,
  BellIcon,
  QuestionMarkCircleIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 z-20 bg-black bg-opacity-25 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* SIDEBAR */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r shadow-sm transform transition-transform lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <h1 className="text-xl font-bold text-[#D4AF37] tracking-wide">
            PravRaha
          </h1>
          <button
            className="lg:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setIsSidebarOpen(false)}
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2 text-gray-700">
          <SidebarItem icon={HomeIcon} label="Dashboard" href="/dashboard" active />

          <SidebarItem icon={MagnifyingGlassIcon} label="Prospect" isCollapsible>
            <SidebarItem icon={UserGroupIcon} label="Leads" href="/dashboard/leads" small />
            <SidebarItem icon={BuildingOfficeIcon} label="Companies" href="/dashboard/companies" small />
          </SidebarItem>

          <SidebarItem icon={ClipboardDocumentListIcon} label="Lists" href="/dashboard/lists" />
          <SidebarItem icon={AdjustmentsHorizontalIcon} label="Data Enrichment" href="/dashboard/data-enrichment" />
          <SidebarItem icon={RocketLaunchIcon} label="SDR Blitz" href="/dashboard/sdr-blitz" />
          <SidebarItem icon={EnvelopeOpenIcon} label="Campaigns" href="/dashboard/campaigns" />
          <SidebarItem icon={EnvelopeOpenIcon} label="Verify Email" href="/dashboard/verify-email" />

          <SidebarItem icon={Cog6ToothIcon} label="Settings" href="/dashboard/settings" />
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        {/* TOPBAR */}
        <header className="flex items-center justify-between px-4 sm:px-8 py-4 bg-white border-b">
          <button
            className="block lg:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Bars3Icon className="w-6 h-6" />
          </button>

          <h2 className="text-lg sm:text-2xl font-bold text-gray-800">Dashboard</h2>

          <div className="flex items-center gap-2 sm:gap-6">
            <button className="hidden sm:flex items-center gap-1 text-sm text-gray-600 hover:text-[#D4AF37]">
              <QuestionMarkCircleIcon className="w-5 h-5" />
              Need a demo?
            </button>

            <BellIcon className="w-6 h-6 text-gray-500 hover:text-[#D4AF37]" />

            <button className="px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg bg-[#D4AF37]  text-white font-medium shadow transition ">
              Create Campaign
            </button>

            <button className="hidden sm:block px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg bg-[#D4AF37] text-white font-medium shadow transition">
              Create List
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <main className="p-4 sm:p-8 space-y-8">
          {children}
        </main>
      </div>
    </div>
  );
}


/* COMPONENTS */

type SidebarItemProps = {
  icon: React.ElementType;
  label: string;
  href?: string;
  active?: boolean;
  small?: boolean;
  isCollapsible?: boolean;
  children?: React.ReactNode;
};

function SidebarItem({ icon: Icon, label, active, small, isCollapsible, children, href }: SidebarItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  if (isCollapsible) {
    return (
      <div>
        <div
          className={'flex items-center justify-between gap-3 px-3 py-2 rounded-lg cursor-pointer transition hover:bg-gray-200 hover:text-gray-900'}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-3">
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </div>
          <ChevronDownIcon
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {isOpen && (
          <div className="ml-6 mt-2 space-y-2 text-sm text-gray-600">
            {children}
          </div>
        )}
      </div>
    );
  }

  const itemContent = (
    <>
      <Icon className="w-5 h-5" />
      {label}
    </>
  );

  const itemClasses = `flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition
    ${active ? "bg-gray-100 font-semibold" : "hover:bg-gray-200 hover:text-gray-900"}
    ${small ? "text-sm" : ""}
    `;

  if (href) {
    return (
      <Link href={href} className={itemClasses}>
        {itemContent}
      </Link>
    );
  }

  return (
    <div className={itemClasses}>
      {itemContent}
    </div>
  );
}
