"use client";

import React from "react";
import {
  EnvelopeOpenIcon,
  CheckCircleIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard() {
  return (
    <>
      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={<CheckCircleIcon className="w-6 h-6 text-[#4F6F73]" />}
          title="Total Lists"
          value="0"
          subtitle="Manage your active segments"
        />

        <StatCard
          icon={<SparklesIcon className="w-6 h-6 text-[#16A34A]" />}
          title="Subscribers (30d)"
          value="0"
          subtitle="+0 Growth"
        />

        <StatCard
          icon={<ShieldCheckIcon className="w-6 h-6 text-[#1D4ED8]" />}
          title="Largest List"
          value="No lists"
          subtitle="Create one to get stats"
        />
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LISTS */}
        <Card title="Your Lists">
          <p className="text-gray-700 mb-6">
            Manage your email lists and subscribers.
          </p>

          <div className="flex gap-4">
            <button className="px-5 py-2 rounded-lg border border-gray-300 bg-[#F0FDF4] text-[#065F46] hover:bg-[#DCFCE7] transition-colors font-semibold">
              View Lists
            </button>

            <button className="px-5 py-2 rounded-lg bg-[#D4AF37] text-white hover:bg-amber-500 transition-colors font-semibold">
              Create List
            </button>
          </div>
        </Card>

        {/* DATA TOOLS */}
        <Card title="Supercharge Your Data">
          <div className="space-y-4">
            {/* Email Verification */}
            <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
              <div className="bg-[#D4AF37]/10 p-2 rounded-lg">
                <ShieldCheckIcon className="w-5 h-5 text-[#D4AF37]" />
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  Email Verification
                </p>
                <p className="text-sm text-gray-500">
                  Clean your email lists and improve deliverability rates.
                </p>
              </div>
            </div>

            {/* Audience Segmentation */}
            <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
              <div className="bg-[#D4AF37]/10 p-2 rounded-lg">
                <SparklesIcon className="w-5 h-5 text-[#D4AF37]" />
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  Audience Segmentation
                </p>
                <p className="text-sm text-gray-500">
                  Target the right contacts with powerful filters.
                </p>
              </div>
            </div>
          </div>

          <button className="mt-6 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#D4AF37] text-white font-medium hover:bg-amber-500 transition shadow-sm">
            <CheckCircleIcon className="w-5 h-5" />
            Explore Tools
          </button>
        </Card>

        {/* CAMPAIGNS */}
        <Card title="Campaigns">
          <div className="text-center py-10 text-gray-500">
            <EnvelopeOpenIcon className="w-12 h-12 mx-auto mb-3 text-gray-300" />

            <p>No campaigns yet</p>
            <p className="text-sm mb-4">
              Create your first campaign
            </p>

            <button className="px-5 py-2 bg-[#D4AF37] text-white rounded-lg hover:bg-amber-500">
              Create Campaign
            </button>
          </div>
        </Card>

        {/* ACTIVITY */}
        <Card title="Recent Activity">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            {/* Document Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 h-14 text-gray-300 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 3v5h5"
              />
              <line x1="9" y1="13" x2="15" y2="13" />
              <line x1="9" y1="17" x2="15" y2="17" />
            </svg>

            {/* Text */}
            <p className="text-gray-600 text-lg font-medium">
              No recent activity
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Your actions will appear here
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}


/* COMPONENTS */

type CardProps = {
  title: string;
  children: React.ReactNode;
};

function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}

type StatCardProps = {
  title: string;
  value: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

function StatCard({ title, value, subtitle, icon }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-gray-500 text-sm font-medium tracking-wide">{title}</p>
          <h3 className="text-3xl font-extrabold text-gray-900 mt-2">{value}</h3>
        </div>
        <div className="p-2 rounded-lg bg-[#E7F5EF]">{icon}</div>
      </div>
      {subtitle && (
        <p className="text-gray-600 text-sm mt-2">{subtitle}</p>
      )}
    </div>
  );
}
