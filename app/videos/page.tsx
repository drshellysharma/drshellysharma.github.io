import { Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// 1. Patient Testimonials Data
const patientStories = [
  {
    id: "RnoGeyROx3Q",
    title: "Scared of Breast Lump Surgery? Watch This Patient Story",
    url: "https://www.youtube.com/watch?v=RnoGeyROx3Q",
    thumbnail: "https://img.youtube.com/vi/RnoGeyROx3Q/hqdefault.jpg"
  },
  {
    id: "3PbvFbqdWlM",
    title: "Men Can Get Breast Cancer Too! A Survivor's Account",
    url: "https://www.youtube.com/watch?v=3PbvFbqdWlM",
    thumbnail: "https://img.youtube.com/vi/3PbvFbqdWlM/hqdefault.jpg"
  },
  {
    id: "j6A1CCJwJgc",
    title: "From Diagnosis to Recovery: A Breast Cancer Journey",
    url: "https://www.youtube.com/watch?v=j6A1CCJwJgc",
    thumbnail: "https://img.youtube.com/vi/j6A1CCJwJgc/hqdefault.jpg"
  }
];

// 2. Informational/Educational Videos Data
const educationalVideos = [
  // --- AWARENESS & BASICS ---
  {
    id: "9IgXo11019s",
    title: "The Reality of Breast Cancer in India",
    url: "https://youtube.com/shorts/9IgXo11019s?si=6va4BxJVHX6RXr7_",
    thumbnail: "https://img.youtube.com/vi/9IgXo11019s/hqdefault.jpg"
  },
  {
    id: "h0Ak8yK_XJM",
    title: "Cancer Explained: A Simple Guide",
    url: "https://youtu.be/h0Ak8yK_XJM?si=DMh0Zuy2gGZ-zSM8",
    thumbnail: "https://img.youtube.com/vi/h0Ak8yK_XJM/hqdefault.jpg"
  },

  // --- SYMPTOMS & PREVENTION ---
  {
    id: "FjLcfas9mFY",
    title: "Self-Examination: Your Monthly Routine",
    url: "https://youtube.com/shorts/FjLcfas9mFY?si=l27588v-Dh3L9Tri",
    thumbnail: "https://img.youtube.com/vi/FjLcfas9mFY/hqdefault.jpg"
  },
  {
    id: "o8ZWJd-W6cw",
    title: "Warning Signs You Shouldn't Ignore",
    url: "https://youtu.be/o8ZWJd-W6cw?si=0okIbbDn03EITccu",
    thumbnail: "https://img.youtube.com/vi/o8ZWJd-W6cw/hqdefault.jpg"
  },
  {
    id: "wCoWdY69EeE",
    title: "Prevention & Precautions: Staying Ahead",
    url: "https://youtu.be/wCoWdY69EeE?si=eVKueuvXCd9Va3yB",
    thumbnail: "https://img.youtube.com/vi/wCoWdY69EeE/hqdefault.jpg"
  },

  // --- MYTH BUSTING & SPECIFIC CONCERNS ---
  {
    id: "cOgXw5MRzRU",
    title: "Myth-Busting Masterclass with Dr. Shelly",
    url: "https://youtu.be/cOgXw5MRzRU?si=JHZiNfzfcbOArQ_b",
    thumbnail: "https://img.youtube.com/vi/cOgXw5MRzRU/hqdefault.jpg"
  },
  {
    id: "Hn18tZ9ldtc",
    title: "Breast Pain: Cause for Concern?",
    url: "https://youtube.com/shorts/Hn18tZ9ldtc?si=2v4DEytbd2vuIsFL",
    thumbnail: "https://img.youtube.com/vi/Hn18tZ9ldtc/hqdefault.jpg"
  },
  {
    id: "ZSTqgScu4gM",
    title: "Why Breast Pain is Rarely Cancer",
    url: "https://youtube.com/shorts/ZSTqgScu4gM?si=Twmvpedpu_KcI_6v",
    thumbnail: "https://img.youtube.com/vi/ZSTqgScu4gM/hqdefault.jpg"
  },
  {
    id: "pi2L60-iEos",
    title: "Understanding 'Dense Breasts'",
    url: "https://youtube.com/shorts/pi2L60-iEos?si=FtRMf3hTbVx5TfAZ",
    thumbnail: "https://img.youtube.com/vi/pi2L60-iEos/hqdefault.jpg"
  },
  {
    id: "3Em8J8MCuuo",
    title: "Q&A: Lumps vs. Mammograms",
    url: "https://youtube.com/shorts/3Em8J8MCuuo?si=_NuTPJWN6ejVryMt",
    thumbnail: "https://img.youtube.com/vi/3Em8J8MCuuo/hqdefault.jpg"
  },

  // --- GENERAL WELLNESS ---
  {
    id: "4D0SW35uvq0",
    title: "Skin Health: Protecting Against Sun Damage",
    url: "https://youtu.be/4D0SW35uvq0?si=Zq1A_K19va6tbnMK",
    thumbnail: "https://img.youtube.com/vi/4D0SW35uvq0/hqdefault.jpg"
  },
  {
    id: "Bi7D5TrAk5s",
    title: "The Science of Sunscreens",
    url: "https://youtu.be/Bi7D5TrAk5s?si=LIXgHAfKnJehtqY-",
    thumbnail: "https://img.youtube.com/vi/Bi7D5TrAk5s/hqdefault.jpg"
  }
];

export default function Videos() {
  return (
    <main className="min-h-screen pt-24 px-6">
      
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-harvard-black mb-6">
          Patient Stories & <span className="text-harvard-crimson">Health Insights</span>
        </h1>
        <p className="text-harvard-black/60 max-w-2xl mx-auto text-lg leading-relaxed">
          Dr. Shelly believes technology saves lives — but compassion heals. 
          Hear from the heroes who have walked this journey and explore our library of medical guides.
        </p>  
      </div>

      {/* SECTION 1: PATIENT TESTIMONIALS */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-serif text-harvard-black mb-8 border-l-4 border-harvard-crimson pl-4">
          Voices of Hope
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {patientStories.map((video) => (
            <Link 
              key={video.id} 
              href={video.url}
              target="_blank"
              className="group relative aspect-video bg-white rounded-xl overflow-hidden border border-harvard-silver/40 shadow-md hover:shadow-xl hover:border-harvard-crimson/30 transition-all duration-300 cursor-pointer"
            >
              <Image 
                src={video.thumbnail} 
                alt={video.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-harvard-black/10 group-hover:bg-harvard-black/30 transition-colors">
                <div className="w-16 h-16 bg-harvard-crimson/90 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <p className="text-white font-serif font-medium text-lg leading-snug">
                  {video.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* SECTION 2: EDUCATIONAL VIDEOS */}
      <div className="max-w-7xl mx-auto pb-24">
        <h2 className="text-3xl font-serif text-harvard-black mb-8 border-l-4 border-harvard-slate pl-4">
          Medical Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationalVideos.map((video) => (
            <Link 
              key={video.id} 
              href={video.url}
              target="_blank"
              className="group relative aspect-video bg-white rounded-xl overflow-hidden border border-harvard-silver/40 shadow-sm hover:shadow-xl hover:border-harvard-crimson/30 transition-all duration-300 cursor-pointer"
            >
              <Image 
                src={video.thumbnail} 
                alt={video.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-harvard-black/10 group-hover:bg-harvard-black/30 transition-colors">
                <div className="w-12 h-12 bg-white/90 text-harvard-crimson rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <p className="text-white font-medium text-sm md:text-base line-clamp-2 leading-snug">
                  {video.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </main>
  );
}