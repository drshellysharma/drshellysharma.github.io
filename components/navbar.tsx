import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-harvard-parchment/80 backdrop-blur-md border-b border-harvard-silver/20">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="font-serif text-xl font-bold tracking-tight text-harvard-crimson">
          Dr. Shelly Sharma
        </Link>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium text-harvard-black/80">
          <Link href="/" className="hover:text-harvard-crimson transition-colors">Home</Link>
          <Link href="/about" className="hover:text-harvard-crimson transition-colors">About</Link>
          <Link href="/specialities" className="hover:text-harvard-crimson transition-colors">Specialities</Link>
          <Link href="/videos" className="hover:text-harvard-crimson transition-colors">Videos</Link>
          <Link href="/contact" className="hover:text-harvard-crimson transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}