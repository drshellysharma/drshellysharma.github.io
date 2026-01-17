import { Award, Play, ArrowRight, Newspaper, ExternalLink, Download, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Define the real video data
const videos = [
  {
    id: "o8ZWJd-W6cw",
    title: "Signs & Symptoms of Cancer in Hindi",
    url: "https://youtu.be/o8ZWJd-W6cw?si=0okIbbDn03EITccu",
    thumbnail: "https://img.youtube.com/vi/o8ZWJd-W6cw/hqdefault.jpg"
  },
  {
    id: "Hn18tZ9ldtc",
    title: "Does Breast Pain Mean Breast Cancer?",
    url: "https://www.youtube.com/shorts/Hn18tZ9ldtc",
    thumbnail: "https://img.youtube.com/vi/Hn18tZ9ldtc/hqdefault.jpg"
  },
  {
    id: "9IgXo11019s",
    title: "Breast Cancer is the most common cancer amongst woman in India",
    url: "https://youtube.com/shorts/9IgXo11019s?si=6va4BxJVHX6RXr7_",
    thumbnail: "https://img.youtube.com/vi/9IgXo11019s/hqdefault.jpg"
  }
];

const articles = [
  {
    id: 1,
    title: "Health Talk: Breast Cancer Awareness",
    source: "India Today",
    url: "https://www.indiatoday.in/lifestyle/health/story/jaypee-hospital-health-talk-breast-cancer-awareness-188308-2014-04-09Dr",
    date: "April 2014"
  },
  {
    id: 2,
    title: "Not Just Jolie: Even You Can Prevent Breast Cancer",
    source: "India Today",
    url: "https://www.indiatoday.in/lifestyle/health/story/not-just-jolie-even-you-can-prevent-breast-cancer-167963-2013-06-24",
    date: "June 2013"
  },
  {
    id: 3,
    title: "10 Precautions Before Hitting the Gym",
    source: "India TV News",
    url: "https://www.indiatvnews.com/health/10-precautions-you-should-take-if-you-are-planning-to-hit-the-gym-639816",
    date: "Health Tips"
  },
  {
    id: 4,
    title: "All You Need to Know About Colon Cancer",
    source: "India TV News",
    url: "https://www.indiatvnews.com/health/all-you-need-to-know-about-colon-cancer-causes-warning-signs-treatment-647228",
    date: "Health Awareness"
  }
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative px-6 py-12 lg:py-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-harvard-silver/30 text-harvard-black text-xs font-semibold tracking-wide uppercase mb-8 border border-harvard-silver">
            <Award className="w-4 h-4 text-harvard-crimson" />
            <span>India's Pioneer in Breast Oncoradiology</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-harvard-black mb-6 leading-[1.1]">
            Where compassion meets <br />
            <span className="text-harvard-crimson italic">precision.</span>
          </h1>

          <p className="text-lg text-harvard-black/70 max-w-xl leading-relaxed mb-8">
            <span className="font-serif italic text-harvard-crimson block text-2xl mb-2">"You are not alone."</span>
            Dr. Shelly brings global expertise from institutions like Harvard together with a deeply human approach to breast care.
          </p>
          
          <div className="text-sm font-medium text-harvard-slate border-l-2 border-harvard-crimson pl-4">
            Lead Breast Imaging & Senior Consultant <br/>
            Indraprastha Apollo Hospital, New Delhi
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="absolute inset-0 bg-harvard-crimson/5 rounded-full blur-3xl transform translate-x-10 translate-y-10 -z-10" />
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-harvard-silver/50 shadow-2xl">
            <Image 
              src="/images/headshot.jpg" 
              alt="Dr. Shelly Sharma"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* NEW E-BOOK SECTION (Moved Here) */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl bg-harvard-crimson overflow-hidden shadow-xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="relative px-8 py-12 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="flex-1 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold tracking-wide uppercase mb-4">
                    <BookOpen className="w-3 h-3" />
                    Free Patient Resource
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif mb-4">
                    Your Blueprint to a Healthy You
                  </h3>
                  <p className="text-white/90 text-lg mb-6 max-w-xl">
                    A comprehensive guide designed to help you connect with your body. 
                    Includes a step-by-step self-exam guide, scripts for talking to your doctor, 
                    and a checklist for your annual screenings.
                  </p>
                  <a 
                    href="/pdfs/ebook.pdf" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-harvard-crimson rounded-full font-bold hover:bg-gray-100 transition-colors gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Free Guide
                  </a>
                </div>
                
                <div className="hidden md:flex items-center justify-center w-32 h-32 bg-white/10 rounded-full border border-white/20">
                   <BookOpen className="w-12 h-12 text-white/80" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Empowering You Through Knowledge (Videos & Articles) */}
      <section className="py-24 bg-harvard-silver/10 border-t border-harvard-silver/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-harvard-black mb-4">
              Empowering You Through Knowledge
            </h2>
            <p className="text-harvard-black/60 max-w-2xl mx-auto">
              Fear often comes from the unknown. Dr. Shelly breaks down complex procedures 
              and breast health topics into simple, reassuring explanations.
            </p>  
          </div>

          {/* Videos Grid */}
          <h3 className="text-2xl font-serif text-harvard-black mb-6 border-l-4 border-harvard-crimson pl-4">
             Watch Dr. Shelly Explain
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {videos.map((video, i) => (
              <Link 
                key={video.id} 
                href={video.url}
                target="_blank"
                className="group relative aspect-video bg-white rounded-xl overflow-hidden border border-harvard-silver/30 shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <Image 
                  src={video.thumbnail} 
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-harvard-black/20 group-hover:bg-harvard-black/30 transition-colors">
                  <div className="w-12 h-12 bg-harvard-crimson/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <p className="text-white text-sm font-medium line-clamp-2 leading-snug">
                    {video.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="flex flex-col items-center justify-center pt-8 mb-20 border-t border-harvard-silver/20">
            <Link 
              href="/videos"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-harvard-crimson text-harvard-crimson rounded-full font-semibold hover:bg-harvard-crimson hover:text-white transition-all gap-2"
            >
              More Videos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Articles Grid */}
          <h3 className="text-2xl font-serif text-harvard-black mb-6 border-l-4 border-harvard-crimson pl-4 flex items-center gap-2">
             Featured in Media
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
             {articles.map((article) => (
               <Link 
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  className="group block bg-white p-6 rounded-xl border border-harvard-silver/40 shadow-sm hover:shadow-md hover:border-harvard-crimson/30 transition-all"
               >
                 <div className="flex items-start justify-between gap-4">
                   <div className="flex-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-harvard-crimson uppercase tracking-wider mb-2">
                        <Newspaper className="w-3 h-3" />
                        {article.source}
                      </div>
                      <h4 className="text-lg font-serif font-bold text-harvard-black group-hover:text-harvard-crimson transition-colors leading-snug mb-2">
                        {article.title}
                      </h4>
                      <p className="text-sm text-harvard-slate">{article.date}</p>
                   </div>
                   <ExternalLink className="w-5 h-5 text-harvard-silver group-hover:text-harvard-crimson transition-colors" />
                 </div>
               </Link>
             ))}
          </div>
        </div>
      </section>
    </main>
  );
}