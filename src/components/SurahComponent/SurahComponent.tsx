import React from "react";
import Link from "next/link";
import { Surah } from "@/types/Types";

interface Props extends Surah {
  index: number;
}

export default function SurahComponent({
  index,
  surahName,
  surahNameTranslation,
  surahNameArabic,
  totalAyah,
}: Props) {
  return (
    <Link className="w-full" href={`/${index + 1}`}>
      <div className="flex items-center justify-between sm:flex-row sm:items-center gap-2">
        <div className="flex gap-5">
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-gray-200 rounded-md rotate-45 group-hover:bg-cyan-600 transition-colors">
            <span className="group-hover:text-white -rotate-45 font-bold">
              {index + 1}
            </span>
          </div>

          <div className="flex flex-col sm:text-left">
            <h3 className="text-lg font-semibold">{surahName}</h3>

            <h4 className="text-sm text-gray-700 group-hover:text-cyan-600 transition-colors font-bold">
              {surahNameTranslation}
            </h4>
          </div>
        </div>

        <div className="flex flex-col sm:text-left mt-4 sm:mt-0">
          <h3 className="text-base font-medium">{surahNameArabic}</h3>

          <h4 className="text-sm text-gray-500 group-hover:text-cyan-600 transition-colors">
            {totalAyah} Ayahs
          </h4>
        </div>
      </div>
    </Link>
  );
}
