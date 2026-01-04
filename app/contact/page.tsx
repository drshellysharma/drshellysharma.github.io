import { MapPin, Phone, Mail, Linkedin, Youtube, Instagram, Share2 } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen pt-24 px-6 bg-harvard-parchment/30">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-harvard-black mb-6">
          Get in Touch
        </h1>
        <p className="text-harvard-black/70 text-lg leading-relaxed">
          Whether you need a second opinion, a screening mammogram, or a biopsy consultation, 
          Dr. Shelly and her team are here to guide you with care and precision.
        </p>  
      </div>

      {/* Contact Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
        
        {/* 1. Hospital Location */}
        <div className="bg-white p-8 rounded-xl border border-harvard-silver/40 shadow-sm flex flex-col items-center text-center hover:border-harvard-crimson/30 transition-colors">
          <div className="p-4 bg-harvard-silver/10 rounded-full text-harvard-crimson mb-6">
            <MapPin className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-serif font-bold text-harvard-black mb-4">Dr. Shelly Sharma</h3>
          <p className="text-harvard-black/80 leading-relaxed mb-6">
            Breast Suite, <br/>
            Indraprastha Apollo Hospital, <br/>
            Jasola, New Delhi - 110020
          </p>
          <Link 
            href="https://maps.app.goo.gl/TdPiCVF5cJbQSJnU6" 
            target="_blank"
            className="text-harvard-crimson font-semibold hover:underline text-sm mt-auto"
          >
            Get Directions →
          </Link>
        </div>

        {/* 2. Direct Contact */}
        <div className="bg-white p-8 rounded-xl border border-harvard-silver/40 shadow-sm flex flex-col items-center text-center hover:border-harvard-crimson/30 transition-colors">
          <div className="p-4 bg-harvard-silver/10 rounded-full text-harvard-crimson mb-6">
            <Phone className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-serif font-bold text-harvard-black mb-4">Contact Info</h3>
          
          <div className="space-y-4 w-full">
            <div>
              <p className="text-xs font-bold text-harvard-slate uppercase tracking-wider mb-1">Breast Suite @ Apollo Hospitals</p>
              <p className="text-harvard-black/80 font-medium">011-71793043</p>
            </div>
            <div>
              <p className="text-xs font-bold text-harvard-slate uppercase tracking-wider mb-1">Email</p>
              <a href="mailto:doctorminutes@gmail.com" className="text-harvard-black/80 font-medium hover:text-harvard-crimson transition-colors">
                doctorminutes@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* 3. Social Media (New) */}
        <div className="bg-white p-8 rounded-xl border border-harvard-silver/40 shadow-sm flex flex-col items-center text-center hover:border-harvard-crimson/30 transition-colors">
          <div className="p-4 bg-harvard-silver/10 rounded-full text-harvard-crimson mb-6">
            <Share2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-serif font-bold text-harvard-black mb-6">Connect Online</h3>
          
          <div className="flex gap-4 mt-auto">
            <Link 
              href="https://www.linkedin.com/in/drshellysharma/" 
              target="_blank"
              className="p-3 bg-harvard-parchment rounded-full text-harvard-black/70 hover:bg-[#0077b5] hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link 
              href="https://www.instagram.com/the_breastologist/" 
              target="_blank"
              className="p-3 bg-harvard-parchment rounded-full text-harvard-black/70 hover:bg-[#E4405F] hover:text-white transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link 
              href="https://www.youtube.com/@doctorminutes5811" 
              target="_blank"
              className="p-3 bg-harvard-parchment rounded-full text-harvard-black/70 hover:bg-[#FF0000] hover:text-white transition-all"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}