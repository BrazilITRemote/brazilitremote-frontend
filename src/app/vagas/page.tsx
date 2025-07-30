"use client";

import { useMemo, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import Markdown from "react-markdown";

import jobs from "@/jobs";
import PageTitle from "../../components/ui/Title";
import markdownComponents from "../../lib/markdown";

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const filteredJobs = useMemo(() => jobs.filter((job) => job.status), []);

  return (
    <section
      id="job-listing"
      className="py-20 lg:py-24 bg-slate-200 dark:bg-slate-700"
    >
      <div className="container mx-auto px-4">
        <PageTitle
          title="Oportunidades"
          description="Confira as oportunidades disponíveis em nossa plataforma."
        />
      </div>

      {!filteredJobs?.length && (
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl font-bold text-gray-800 dark:text-gray-200">
            No momento não temos vagas disponíveis.
          </p>
        </div>
      )}

      <div className="container mx-auto flex flex-col gap-3 px-4 mt-10 mb-10">
        {filteredJobs.map((job, index) => (
          <div
            key={`${job.title}-${index}`}
            className="bg-white dark:bg-slate-800/80 text-gray-800 dark:text-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-slate-600/50 overflow-hidden"
          >
            <button
              className="cursor-pointer w-full text-left px-6 py-5 hover:bg-blue-50 dark:hover:bg-gray-700/50 transition-all duration-300 focus:outline-none focus:bg-blue-50 dark:focus:bg-gray-700/50 group"
              onClick={() =>
                setSelectedJob(selectedJob === index ? null : index)
              }
            >
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                    {job.title}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full inline-block w-fit">
                    📍 {job.location}
                  </span>
                </div>
                <div className="flex items-center">
                  <HiChevronDown
                    className={`w-6 h-6 text-blue-600 dark:text-gray-400 transition-all duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 ${
                      selectedJob === index ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
            </button>

            {selectedJob === index && (
              <div className="px-6 pb-6 pt-2 bg-blue-50 dark:bg-slate-700/50 border-t border-blue-100 dark:border-slate-600">
                <div className="prose prose-sm max-w-none dark:prose-invert prose-headings:text-blue-900 dark:prose-headings:text-gray-100 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-strong:text-blue-800 dark:prose-strong:text-blue-300">
                  <Markdown components={markdownComponents}>
                    {job.description}
                  </Markdown>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
