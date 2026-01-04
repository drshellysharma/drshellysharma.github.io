import { 
  Snowflake, 
  Scan, 
  Microscope, 
  Activity, 
  ShieldCheck, 
  Syringe, 
  Target,
  FileSearch
} from "lucide-react";

// Data sorted alphabetically
const specialities = [
  {
    title: "Breast Biopsy",
    icon: <Microscope className="w-8 h-8 text-harvard-crimson" />,
    why: "To definitively diagnose whether a breast lump or imaging abnormality is benign (non-cancerous) or malignant.",
    when: "Performed when a mammogram, ultrasound, or MRI detects a suspicious mass, calcifications, or structural distortion.",
    note: "We prioritize image-guided core needle biopsies, which are less invasive than surgical biopsies and leave minimal scarring."
  },
  {
    title: "Breast Interventions",
    icon: <Activity className="w-8 h-8 text-harvard-crimson" />,
    why: "To manage various breast conditions without the need for major surgery.",
    when: "Includes aspiration of cysts, drainage of abscesses, and preoperative wire localization to guide surgeons to non-palpable lumps.",
    note: "These procedures are performed under local anesthesia, ensuring patient comfort and rapid recovery."
  },
  {
    title: "Cryoablation for Breast Cancers",
    icon: <Snowflake className="w-8 h-8 text-harvard-crimson" />,
    why: "A cutting-edge, non-surgical treatment that uses extreme cold to freeze and destroy cancer cells.",
    when: "Ideal for early-stage breast cancers, particularly in patients who may not be suitable candidates for traditional surgery.",
    note: "Painless, requires no general anesthesia, and leaves the breast shape intact."
  },
  {
    title: "Cryoablation for Breast Fibroadenomas",
    icon: <Snowflake className="w-8 h-8 text-harvard-crimson" />,
    why: "To treat non-cancerous breast lumps (fibroadenomas) that are causing pain or anxiety, without surgical excision.",
    when: "When a confirmed benign fibroadenoma is palpable or symptomatic.",
    note: "An office-based procedure that takes less than 30 minutes. Patients can return to normal activities immediately."
  },
  {
    title: "Minimally Invasive Breast Cancer Management",
    icon: <ShieldCheck className="w-8 h-8 text-harvard-crimson" />,
    why: "To treat breast disease with the least possible physical trauma to the patient.",
    when: "Applicable across diagnosis, staging, and treatment of breast cancer.",
    note: "Focuses on preserving breast aesthetics and sensation while ensuring oncological safety."
  },
  {
    title: "MR Guided Breast Biopsy",
    icon: <Target className="w-8 h-8 text-harvard-crimson" />,
    why: "To sample lesions that are only visible on MRI and cannot be seen on ultrasound or mammography.",
    when: "After a suspicious finding is detected exclusively during a Breast MRI screening.",
    note: "A highly specialized procedure requiring advanced equipment and expertise."
  },
  {
    title: "MRI Breast",
    icon: <Scan className="w-8 h-8 text-harvard-crimson" />,
    why: "The most sensitive imaging tool available for detecting breast cancer.",
    when: "Used for screening high-risk women, evaluating implants, or staging cancer before surgery.",
    note: "Provides detailed images of soft tissue that other modalities might miss."
  },
  {
    title: "Stereotactic Breast Biopsy",
    icon: <FileSearch className="w-8 h-8 text-harvard-crimson" />,
    why: "Specifically designed to biopsy microcalcifications (tiny calcium deposits) or distortions not visible on ultrasound.",
    when: "When a mammogram shows suspicious calcifications that could be an early sign of cancer.",
    note: "Uses X-ray guidance to precisely target the area of concern."
  },
  {
    title: "Vacuum Assisted Excision of Complex Sclerosing Lesions",
    icon: <Syringe className="w-8 h-8 text-harvard-crimson" />,
    why: "To remove high-risk lesions (like radial scars) that mimic cancer, often sparing the patient from open surgery.",
    when: "When a biopsy shows a 'complex sclerosing lesion' that requires removal to rule out hidden malignancy.",
    note: "Allows for complete removal of the lesion through a tiny skin nick."
  },
  {
    title: "Vacuum Assisted Excision of Fibroadenomas",
    icon: <Syringe className="w-8 h-8 text-harvard-crimson" />,
    why: "To completely remove benign lumps (fibroadenomas) without a surgical incision.",
    when: "For benign lumps that are growing or causing symptoms.",
    note: "Also known as VABB (Vacuum Assisted Breast Biopsy), this is the gold standard for scarless lump removal."
  },
];

export default function Specialities() {
  return (
    <main className="min-h-screen pt-24 px-6 bg-harvard-parchment/30">
      
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-harvard-black mb-6">
          Advanced Specialities
        </h1>
        <p className="text-harvard-black/60 max-w-2xl mx-auto text-lg leading-relaxed">
          Dr. Shelly combines world-class technology with minimally invasive techniques to ensure precise diagnosis and gentle treatment.
        </p>  
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pb-24">
        {specialities.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-xl border border-harvard-silver/40 shadow-sm hover:shadow-md hover:border-harvard-crimson/30 transition-all group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-harvard-silver/10 rounded-lg group-hover:bg-harvard-crimson/10 transition-colors">
                {item.icon}
              </div>
              <h2 className="text-xl font-serif font-bold text-harvard-black group-hover:text-harvard-crimson transition-colors mt-1">
                {item.title}
              </h2>
            </div>
            
            <div className="space-y-4 ml-2">
              <div>
                <span className="text-xs font-bold text-harvard-crimson uppercase tracking-wider block mb-1">Why</span>
                <p className="text-harvard-black/80 text-sm leading-relaxed">{item.why}</p>
              </div>
              
              <div>
                <span className="text-xs font-bold text-harvard-slate uppercase tracking-wider block mb-1">When</span>
                <p className="text-harvard-black/80 text-sm leading-relaxed">{item.when}</p>
              </div>

              <div className="pt-2 border-t border-harvard-silver/20 mt-4">
                <p className="text-harvard-black/60 text-xs italic">
                  <span className="font-semibold text-harvard-black/80 not-italic">Key Note: </span>
                  {item.note}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}