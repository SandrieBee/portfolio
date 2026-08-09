'use client'

import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#certificates', label: 'Certificates' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl backdrop-saturate-150 border-b border-slate-200 dark:border-white/10 text-slate-900 dark:text-white transition-colors">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-bold tracking-tight">
          <span className="text-accent-500">&lt;</span>Portfolio<span className="text-accent-500">/&gt;</span>
        </span>

        <ul className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
          {links.map((link) => (
            <li key={link.href}><a href={link.href} className="block px-4 py-2 rounded-full hover:bg-accent-50 hover:text-accent-600 dark:hover:bg-white/10 dark:hover:text-white transition-all">{link.label}</a></li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a href="#contact" className="bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors shadow-lg shadow-accent-500/30">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-white" aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-200 dark:border-white/10 px-4 sm:px-6 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-accent-600 dark:hover:text-white py-3 border-b border-slate-100 dark:border-white/10 transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-accent-500 text-white text-sm font-semibold px-4 py-3 rounded-full text-center mt-4">
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}