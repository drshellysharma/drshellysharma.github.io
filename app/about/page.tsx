import { GraduationCap, Briefcase, MapPin, Calendar, Heart, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero / Mission Section */}
      <section className="pt-16 pb-12 px-6 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-harvard-silver/30 text-harvard-black text-xs font-semibold tracking-wide uppercase mb-6">
          <Heart className="w-4 h-4 text-harvard-crimson" />
          <span>Compassion Meets Precision</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-harvard-black mb-6 leading-tight">
          Early detection. Gentle care. <br/>
          <span className="text-harvard-crimson">Stronger futures.</span>
        </h1>

        <p className="text-xl text-harvard-black/70 leading-relaxed mb-12">
          Dr. Shelly Sharma is a leading breast and onco-radiologist dedicated to one mission: 
          helping women detect cancer early with compassion, precision, and dignity.
        </p>

        <div className="bg-white p-8 rounded-2xl border border-harvard-silver/50 shadow-sm text-left relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-harvard-crimson" />
          <p className="text-harvard-black/80 leading-relaxed mb-6">
            With an MBBS, DNB, and advanced fellowships from the prestigious National Cancer Center, Samsung Medical Center and an observorship at the Mayo Clinic, Dr. Shelly brings global expertise together with a deeply human approach to care.
          </p>
          <p className="text-harvard-black/80 leading-relaxed mb-6">
            From the moment women walk into her clinic, the environment is warm, calm, and reassuring, designed intentionally to feel more like a wellness space than a hospital. Many arrive anxious. Most leave smiling, reassured, and confident.
          </p>
          <p className="text-lg font-serif italic text-harvard-crimson">
            "Dr. Shelly believes technology saves lives, but compassion heals."
          </p>
        </div>
      </section>

      {/* 2. Education & Fellowships */}
      <section className="py-16 px-6 bg-harvard-silver/10 border-t border-harvard-silver/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif text-harvard-black mb-12 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-harvard-crimson" />
            Education & Global Fellowships
          </h2>

          <div className="space-y-8">
            {/* HARVARD (Featured) */}
            <div className="bg-white rounded-xl overflow-hidden border border-harvard-silver/40 shadow-md">
              <div className="bg-harvard-crimson text-white p-6 md:p-8 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-serif font-bold">Harvard Medical School, <br/> Boston (USA) </h3>
                  <p className="opacity-90 mt-1">Leadership in Medicine (2024-2025)</p>
                </div>
                {/* Logo: Harvard */}
                <div className="w-16 h-16 relative shrink-0 bg-white rounded-lg overflow-hidden">
                   <Image 
                     src="/images/harvard.jpeg" 
                     alt="Harvard Medical School" 
                     fill
                     className="object-contain p-1"
                   />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-harvard-black/80 mb-4 leading-relaxed">
                  Designed to strengthen leadership in complex health care environments. The dual tracks in Clinical Leadership and Faculty Development provided strategic insight into organizational management, academic excellence, quality improvement, and patient safety.
                </p>
                <div className="flex flex-wrap gap-2">
                   {["Crisis Management", "Strategy", "Quality Improvement", "Patient Safety"].map(skill => (
                     <span key={skill} className="px-3 py-1 bg-harvard-parchment text-harvard-black/70 text-xs font-medium rounded-full border border-harvard-silver">
                       {skill}
                     </span>
                   ))}
                </div>
              </div>
            </div>

            {/* Other Education Grid */}
            <div className="grid md:grid-cols-2 gap-6">
               
               {/* NCC Singapore */}
               <div className="bg-white p-6 rounded-xl border border-harvard-silver/40 hover:border-harvard-crimson/30 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                       <h3 className="font-bold text-lg text-harvard-black">National Cancer Center, <br/> Singapore</h3>
                       {/* Logo: NCC */}
                       <div className="w-16 h-16 relative shrink-0 bg-white rounded-lg border border-harvard-silver/50 overflow-hidden">
                         <Image src="/images/ncc.jpeg" alt="NCC Singapore" fill className="object-contain p-1" />
                       </div>
                    </div>
                    <p className="text-harvard-crimson font-medium text-sm mb-4">Fellowship, Oncoradiology (2014-2015)</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Cancer Research", "Digital Imaging", "Breast Interventions"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-harvard-parchment text-harvard-black/70 text-xs font-medium rounded-full border border-harvard-silver">{skill}</span>
                    ))}
                  </div>
               </div>

               {/* KK Women's Hospital */}
               <div className="bg-white p-6 rounded-xl border border-harvard-silver/40 hover:border-harvard-crimson/30 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                       <h3 className="font-bold text-lg text-harvard-black">KK Women and Child Hospital, <br/> Singapore</h3>
                       {/* Logo: KK */}
                       <div className="w-16 h-16 relative shrink-0 bg-white rounded-lg border border-harvard-silver/50 overflow-hidden">
                         <Image src="/images/kk.jpeg" alt="KK Women's Hospital" fill className="object-contain p-1" />
                       </div>
                    </div>
                    <p className="text-harvard-crimson font-medium text-sm mb-4">Clinical Assistant, Breast Imaging Division (2015)</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Breast Imaging", "Radiology", "Cancer Screening"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-harvard-parchment text-harvard-black/70 text-xs font-medium rounded-full border border-harvard-silver">{skill}</span>
                    ))}
                  </div>
               </div>

               {/* Mayo Clinic */}
               <div className="bg-white p-6 rounded-xl border border-harvard-silver/40 hover:border-harvard-crimson/30 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                       <h3 className="font-bold text-lg text-harvard-black">Mayo Clinic, <br/> Rochester (USA)</h3>
                       {/* Logo: Mayo */}
                       <div className="w-16 h-16 relative shrink-0 bg-white rounded-lg border border-harvard-silver/50 overflow-hidden">
                         <Image src="/images/mayo.jpeg" alt="Mayo Clinic" fill className="object-contain p-1" />
                       </div>
                    </div>
                    <p className="text-harvard-crimson font-medium text-sm mb-4">Observorship, Breast Imaging (2009)</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Breast Imaging", "Advanced Research"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-harvard-parchment text-harvard-black/70 text-xs font-medium rounded-full border border-harvard-silver">{skill}</span>
                    ))}
                  </div>
               </div>
               
               {/* Samsung Medical Center */}
               <div className="bg-white p-6 rounded-xl border border-harvard-silver/40 hover:border-harvard-crimson/30 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                       <h3 className="font-bold text-lg text-harvard-black">Samsung Medical Center, <br/> Seoul (South Korea)</h3>
                       {/* Logo: Samsung */}
                       <div className="w-16 h-16 relative shrink-0 bg-white rounded-lg border border-harvard-silver/50 overflow-hidden">
                         <Image src="/images/samsung.jpeg" alt="Samsung Medical Center" fill className="object-contain p-1" />
                       </div>
                    </div>
                    <p className="text-harvard-crimson font-medium text-sm mb-4">Medical Scientist, Fellowship Program (2014)</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Radiofrequency Ablation", "Liver Tumors", "Research"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-harvard-parchment text-harvard-black/70 text-xs font-medium rounded-full border border-harvard-silver">{skill}</span>
                    ))}
                  </div>
               </div>

               {/* AIIMS */}
               <div className="bg-white p-6 rounded-xl border border-harvard-silver/40 hover:border-harvard-crimson/30 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                       <h3 className="font-bold text-lg text-harvard-black">AIIMS, <br/> New Delhi (India)</h3>
                       {/* Logo: AIIMS */}
                       <div className="w-16 h-16 relative shrink-0 bg-white rounded-lg border border-harvard-silver/50 overflow-hidden">
                         <Image src="/images/aiims.jpeg" alt="AIIMS" fill className="object-contain p-1" />
                       </div>
                    </div>
                    <p className="text-harvard-crimson font-medium text-sm mb-4">Senior Residency, Radiology (2008)</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Digital Imaging", "Mammography"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-harvard-parchment text-harvard-black/70 text-xs font-medium rounded-full border border-harvard-silver">{skill}</span>
                    ))}
                  </div>
               </div>

               {/* St Stephen's Hospital */}
               <div className="bg-white p-6 rounded-xl border border-harvard-silver/40 hover:border-harvard-crimson/30 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                       <h3 className="font-bold text-lg text-harvard-black">St. Stephen's Hospital, <br/> New Delhi (India)</h3>
                       {/* Logo: Stephens */}
                       <div className="w-16 h-16 relative shrink-0 bg-white rounded-lg border border-harvard-silver/50 overflow-hidden">
                         <Image src="/images/stephens.jpeg" alt="St. Stephens Hospital" fill className="object-contain p-1" />
                       </div>
                    </div>
                    <p className="text-harvard-crimson font-medium text-sm mb-4">DNB, Radiodiagnosis (2004-2007)</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Radiodiagnosis", "Digital Imaging"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-harvard-parchment text-harvard-black/70 text-xs font-medium rounded-full border border-harvard-silver">{skill}</span>
                    ))}
                  </div>
               </div>

               {/* BJ Medical College */}
               <div className="bg-white p-6 rounded-xl border border-harvard-silver/40 hover:border-harvard-crimson/30 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                       <h3 className="font-bold text-lg text-harvard-black">B.J. Medical College, <br/> Pune (India)</h3>
                       {/* Logo: BJMC */}
                       <div className="w-16 h-16 relative shrink-0 bg-white rounded-lg border border-harvard-silver/50 overflow-hidden">
                         <Image src="/images/bj.jpeg" alt="BJ Medical College" fill className="object-contain p-1" />
                       </div>
                    </div>
                    <p className="text-harvard-crimson font-medium text-sm mb-4">MBBS (1997-2003)</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Medical Degree", "General Medicine"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-harvard-parchment text-harvard-black/70 text-xs font-medium rounded-full border border-harvard-silver">{skill}</span>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Professional Experience (Work) */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-harvard-black mb-12 flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-harvard-crimson" />
          Professional Experience
        </h2>

        <div className="border-l-2 border-harvard-silver/40 ml-4 space-y-12">
          
          {/* Apollo (Current) */}
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-harvard-crimson ring-4 ring-harvard-parchment" />
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
               <div>
                  <h3 className="text-xl font-bold text-harvard-black">Indraprastha Apollo Hospitals</h3>
                  <div className="text-harvard-crimson font-medium">Senior Consultant, Lead Breast Imaging</div>
               </div>
               <div className="w-16 h-16 relative shrink-0 bg-white rounded-lg border border-harvard-silver/50 overflow-hidden">
                    <Image src="/images/apollo.jpeg" alt="Indraprastha Apollo Hospitals" fill className="object-contain p-1" />
              </div>
            </div>
            <p className="text-sm text-harvard-slate mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4" /> 2025 - Present
              <span className="mx-1">•</span>
              <MapPin className="w-4 h-4" /> New Delhi (India)
            </p>
            <p className="text-harvard-black/70 mb-3 text-sm leading-relaxed">
              Responsible for designing and leading patient-centric diagnostic pathways that accelerate time-to-diagnosis, improve screening compliance, and achieve biopsy yield performance aligned with international benchmarks.
            </p>
            <div className="flex flex-wrap gap-2">
               {["Hook Wire & Clip Placements", "USG Guided Biopsy", "Senior DNB Faculty"].map(skill => (
                 <span key={skill} className="px-3 py-1 bg-white text-harvard-black/80 text-xs font-medium rounded-full border border-harvard-silver/60">
                   {skill}
                 </span>
               ))}
            </div>
          </div>

          {/* Sir Ganga Ram */}
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-harvard-silver ring-4 ring-harvard-parchment" />
             <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
               <div>
                  <h3 className="text-xl font-bold text-harvard-black">Sir Ganga Ram Hospital</h3>
                  <div className="text-harvard-slate font-medium">Vice Chairperson Radiology, Associate Professor GRIPMER</div>
               </div>
               <div className="w-16 h-16 relative shrink-0 bg-white rounded-lg border border-harvard-silver/50 overflow-hidden">
                  <Image src="/images/sgrh.jpeg" alt="Sir Ganga Ram Hospital" fill className="object-contain p-1" />
              </div>
            </div>
            <p className="text-sm text-harvard-slate mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> New Delhi (India)
            </p>
             <div className="flex flex-wrap gap-2">
               {["Stereotactic Breast Biopsy", "Vacuum-Assisted Breast Biopsy", "Senior DNB Faculty", "Thesis Guide"].map(skill => (
                 <span key={skill} className="px-3 py-1 bg-white text-harvard-black/80 text-xs font-medium rounded-full border border-harvard-silver/60">
                   {skill}
                 </span>
               ))}
            </div>
          </div>

          {/* Max Hospital */}
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-harvard-silver ring-4 ring-harvard-parchment" />
             <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
               <div>
                  <h3 className="text-xl font-bold text-harvard-black">Max Hospital, Vaishali</h3>
                  <div className="text-harvard-slate font-medium">Consultant</div>
               </div>
               <div className="w-16 h-16 relative shrink-0 bg-white rounded-lg border border-harvard-silver/50 overflow-hidden">
                    <Image src="/images/max.jpeg" alt="Max Hospital" fill className="object-contain p-1" />
              </div>
            </div>
            <p className="text-sm text-harvard-slate mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Vaishali (India)
            </p>
             <div className="flex flex-wrap gap-2">
               {["MRI", "CT Scan", "MR Guided Breast Biopsy", "USG Guided Biopsy", "Mammography", "Tomosynthesis"].map(skill => (
                 <span key={skill} className="px-3 py-1 bg-white text-harvard-black/80 text-xs font-medium rounded-full border border-harvard-silver/60">
                   {skill}
                 </span>
               ))}
            </div>
          </div>

          {/* Rajiv Gandhi Cancer Institute */}
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-harvard-silver ring-4 ring-harvard-parchment" />
             <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
               <div>
                  <h3 className="text-xl font-bold text-harvard-black">Rajiv Gandhi Cancer Institute (RGCI & RC)</h3>
                  <div className="text-harvard-slate font-medium">Consultant Radiologist</div>
               </div>
               <div className="w-16 h-16 relative shrink-0 bg-white rounded-lg border border-harvard-silver/50 overflow-hidden">
                  <Image src="/images/rgandhi.jpeg" alt="Rajiv Gandhi Cancer Institute" fill className="object-contain p-1" />
                </div>
            </div>
            <p className="text-sm text-harvard-slate mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4" /> 2012 - 2014
              <span className="mx-1">•</span>
              <MapPin className="w-4 h-4" /> New Delhi (India)
            </p>
            <div className="flex flex-wrap gap-2">
               {["MRI", "CT Scan", "MR Guided Breast Biopsy", "Academic In-charge", "USG Guided Biopsy"].map(skill => (
                 <span key={skill} className="px-3 py-1 bg-white text-harvard-black/80 text-xs font-medium rounded-full border border-harvard-silver/60">
                   {skill}
                 </span>
               ))}
            </div>
          </div>

          {/* GMR Institute */}
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-harvard-silver ring-4 ring-harvard-parchment" />
             <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
               <div>
                  <h3 className="text-xl font-bold text-harvard-black">GMR Institute of Imaging & Research</h3>
                  <div className="text-harvard-slate font-medium">Consultant Radiologist</div>
               </div>
               {/* Work Logo Placeholder */}
               <div className="w-16 h-16 relative shrink-0 bg-white rounded-lg border border-harvard-silver/50 overflow-hidden">
               </div>
            </div>
            <p className="text-sm text-harvard-slate mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> New Delhi (India)
            </p>
             <div className="flex flex-wrap gap-2">
               {["Radiology", "Imaging", "Research"].map(skill => (
                 <span key={skill} className="px-3 py-1 bg-white text-harvard-black/80 text-xs font-medium rounded-full border border-harvard-silver/60">
                   {skill}
                 </span>
               ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Honors & Awards (UPDATED with Logos) */}
      <section className="py-16 px-6 bg-harvard-silver/10 border-t border-harvard-silver/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-harvard-black mb-12 flex items-center gap-3">
            <Award className="w-8 h-8 text-harvard-crimson" />
            Honors & Awards
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Award 1: RSNA */}
             <div className="bg-white p-6 rounded-xl border border-harvard-silver/40 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 relative shrink-0 bg-white rounded-lg border border-harvard-silver/50 overflow-hidden">   
                <Image src="/images/rsna.jpeg" alt="RSNA" fill className="object-contain p-2" />
              </div>
              <h3 className="font-bold text-lg text-harvard-black mb-2">Certificate of Merit</h3>
              <p className="text-sm text-harvard-crimson font-medium mb-2">2012</p>
              <p className="text-sm text-harvard-slate">Radiological Society of North America (RSNA)</p>
            </div>

            {/* Award 2: KSUM */}
             <div className="bg-white p-6 rounded-xl border border-harvard-silver/40 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 relative shrink-0 bg-white rounded-lg border border-harvard-silver/50 overflow-hidden">   
                 <Image src="/images/ksum.jpeg" alt="KSUM" fill className="object-contain p-2" />
              </div>
              <h3 className="font-bold text-lg text-harvard-black mb-2">International Fellowship</h3>
              <p className="text-sm text-harvard-crimson font-medium mb-2">2014</p>
              <p className="text-sm text-harvard-slate">Korean Society of Ultrasound in Medicine</p>
            </div>

            {/* Award 3: PHD Chamber */}
            <div className="bg-white p-6 rounded-xl border border-harvard-silver/40 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 relative shrink-0 bg-white rounded-lg border border-harvard-silver/50 overflow-hidden">   
                <Image src="/images/phdcci.jpeg" alt="PHD Chamber of Commerce & Industry" fill className="object-contain p-2" />
              </div>
              <h3 className="font-bold text-lg text-harvard-black mb-2">Women Achiever Samman</h3>
              <p className="text-sm text-harvard-crimson font-medium mb-2">2019</p>
              <p className="text-sm text-harvard-slate">Kalam Centre, PHD Chamber of Commerce</p>
            </div>

          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-harvard-crimson text-white py-12 text-center">
         <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-2xl font-serif mb-4">"Redefining breast cancer screening. One woman, one family, one future at a time."</h2>
         </div>
      </section>
    </main>
  );
}