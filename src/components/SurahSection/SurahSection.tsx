"use client";
import React, { useEffect, useState } from "react";
import api from "@/api/api";
import SurahComponent from "../SurahComponent/SurahComponent";
import { Surah } from "@/types/Types";
import { Alert } from "flowbite-react";
import Spinner from "../Spinner/Spinner";

export default function SurahSection() {
  const [data, setData] = useState<Surah[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/surah.json");

        if (response.status !== 200) {
          throw new Error("Fetch Surah's response not ok");
        }

        setData(response.data);
      } catch (err) {
        setError("Failed to fetch surahs.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading)
    return (
      <section className="w-full h-screen flex justify-center items-center">
        <Spinner size={20} />
      </section>
    );

  return (
    <section className="my-10 px-4 sm:px-6 md:px-8 lg:px-10">
      <Alert />

      <div className="container mx-auto">
        {error ? (
          <section className="text-center">
            <p className="text-red-600 font-bold text-2xl">{error}</p>
          </section>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {data.map((surah, index) => (
              <li
                key={index}
                className="shadow-lg rounded-lg py-4 px-6 border border-gray-200 hover:border-cyan-600 hover:bg-gray-100 transition-all group"
              >
                <SurahComponent
                  index={index}
                  surahName={`${surah.surahName}`}
                  surahNameTranslation={`${surah.surahNameTranslation}`}
                  surahNameArabic={`${surah.surahNameArabic}`}
                  totalAyah={surah.totalAyah}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
