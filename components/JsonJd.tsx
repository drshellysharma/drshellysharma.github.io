export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Shelly Sharma",
    "image": "https://drshellysharma.github.io/images/headshot.jpg",
    "@id": "https://drshellysharma.github.io",
    "url": "https://drshellysharma.github.io",
    "telephone": "+911126925858",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Indraprastha Apollo Hospital, Sarita Vihar",
      "addressLocality": "New Delhi",
      "postalCode": "110020",
      "addressCountry": "IN"
    },
    "medicalSpecialty": ["Radiology", "Breast Oncology", "Breast Imaging"],
    "description": "Dr. Shelly Sharma is a leading Breast Radiologist and Onco-radiologist in India, specializing in Mammography, Biopsies, and Early Cancer Detection.",
    "worksFor": {
      "@type": "Hospital",
      "name": "Indraprastha Apollo Hospitals"
    },
    "sameAs": [
      "https://www.linkedin.com/in/drshellysharma/",
      "https://www.instagram.com/the_breastologist/",
      "https://www.youtube.com/@doctorminutes5811"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}