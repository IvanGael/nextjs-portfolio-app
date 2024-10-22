import Link from "next/link"
import { AllColors } from "../constants/allColors"

function FacebookIcon(props : any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
  )
}

function TwitterIcon(props : any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
  )
}

function InstagramIcon(props : any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
  )
}

function LinkedInIcon(props : any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
  )
}

const social = [
  // { name: "Facebook", href: "#", icon: <FacebookIcon className="h-5 w-5" /> },
  { name: "Twitter", href: "https://www.linkedin.com/in/ivan-apedo/", icon: <TwitterIcon className="h-5 w-5" /> },
  // { name: "Instagram", href: "#", icon: <InstagramIcon className="h-5 w-5" /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ivan-apedo/", icon: <LinkedInIcon className="h-5 w-5" /> },
]

const column1 = [
  { name: "About", href: "/", current: true },
  { name: "Skills", href: "#skills", current: false },
  { name: "Work", href: "#works", current: false }
]

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 dark:text-neutral-400" id="content">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="mt-6 flex gap-4">
              {social.map((item) => (
                <Link key={item.name} href={item.href} target="_blank" rel="noopener noreferrer">
                  <div className={`w-10 h-10 ${AllColors.mainBgColor} text-white hover:opacity-75 rounded-full flex items-center justify-center transition-opacity`}>
                    {item.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {column1.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`hover:${AllColors.mainTextColor} transition-colors duration-200`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-800">
        <div className="container px-4 py-6 text-center">
          <Link
            href="https://www.linkedin.com/in/ivan-apedo/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm hover:${AllColors.mainTextColor} transition-colors duration-200`}
          >
            &copy; {new Date().getFullYear()} Ivan APEDO. All rights reserved.
          </Link>
        </div>
      </div>
    </footer>
  )
}