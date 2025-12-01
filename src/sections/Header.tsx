"use client";

import { useState, useEffect } from 'react';

export const Header = () => {
  const [activeLink, setActiveLink] = useState('#hero');

  const handleNavClick = (event, sectionId) => {
    event.preventDefault(); // Mencegah perilaku default anchor
    setActiveLink(sectionId);
    const section = document.querySelector(sectionId); // Pilih elemen target
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Animasi scroll
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#hero', '#about', '#experience', '#projects', '#contact'];
      let currentActive = '#hero'; // Default section

      for (const sectionId of sections) {
        const section = document.querySelector(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Cek apakah section berada di tengah layar
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sectionId;
            break;
          }
        }
      }

      setActiveLink(currentActive); // Perbarui activeLink
    };

    // Tambahkan event listener scroll
    window.addEventListener('scroll', handleScroll);

    // Bersihkan event listener saat komponen dilepas
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Hanya berjalan sekali setelah komponen mount

  return (
    <div className="flex justify-center items-center fixed top-2 sm:top-3 w-full z-50 px-4">
      <nav className="flex gap-1 sm:gap-0 lg:gap-2 sm:p-1 lg:p-2 border border-white/15 rounded-full backdrop-blur-md bg-white/10 shadow-lg">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className={`nav-item ${activeLink === '#hero' ? 'active' : ''}`}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, '#about')}
          className={`nav-item ${activeLink === '#about' ? 'active' : ''}`}
        >
          About
        </a>
        <a
          href="#experience"
          onClick={(e) => handleNavClick(e, '#experience')}
          className={`nav-item ${activeLink === '#experience' ? 'active' : ''}`}
        >
          <span className="hidden sm:inline">Experience</span>
          <span className="sm:hidden">Exp</span>
        </a>
        <a
          href="#projects"
          onClick={(e) => handleNavClick(e, '#projects')}
          className={`nav-item ${activeLink === '#projects' ? 'active' : ''}`}
        >
          Project
        </a>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className={`nav-item ${activeLink === '#contact' ? 'active' : ''}`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
