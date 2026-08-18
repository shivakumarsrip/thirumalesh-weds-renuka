'use client'

import Image from 'next/image'

function scrollTo(href: string) {
  if (typeof window === 'undefined') return
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="relative bg-bg overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-bg/0 to-bg pointer-events-none" />

      {/* Temple image background — bottom-right, fades in from left */}
      <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none">
        <Image
          src="/images/Temple-footer.png"
          alt=""
          fill
          className="object-cover object-right-bottom opacity-25"
        />
        {/* Gradient to fade left edge of the image into the background */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/60 to-transparent" />
      </div>

      {/* Gold top divider */}
      <div className="border-t border-[rgba(212,175,55,0.18)]" />

      <div className="max-w-7xl mx-auto px-4 pt-10 md:pt-14 pb-8 relative z-10">
        {/* Main columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <p className="font-cinzel text-2xl font-semibold text-gold tracking-[0.2em] mb-4">
              T&amp;R
            </p>
            <p className="font-cormorant italic text-sm text-warm-text/55 leading-relaxed mb-5">
              We invite you to be a part of our beautiful beginning and bless us as we start our
              forever.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-[10px] tracking-[0.28em] text-gold/80 uppercase mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {['#home', '#couple', '#events', '#gallery', '#venue', '#family'].map((href) => (
                <li key={href}>
                  <FooterLink
                    label={href.replace('#', '').charAt(0).toUpperCase() + href.slice(2)}
                    href={href}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Venue */}
          <div>
            <h4 className="font-cinzel text-[10px] tracking-[0.28em] text-gold/80 uppercase mb-5">
              Venue
            </h4>
            <address className="not-italic">
              <p className="font-inter text-xs text-warm-text/55 leading-relaxed mb-3">
                M.S.R. Gardens,
                <br />
                Edloor Road, Kattangur,
                <br />
                Nalgonda, Telangana
              </p>
              <a
                href="https://maps.google.com/?q=M.S.R.+Gardens,Edloor+Road,Kattangur,Nalgonda,Telangana"
                target="_blank"
                rel="noopener noreferrer"
                className="font-cinzel text-[9px] tracking-[0.2em] text-gold/70 uppercase hover:text-gold transition-colors border-b border-[rgba(212,175,55,0.3)] hover:border-gold/60 pb-0.5"
              >
                View on Map
              </a>
            </address>
          </div>

        </div>
      </div>
    </footer>
  )
}

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <button
      type="button"
      onClick={() => scrollTo(href)}
      className="font-inter text-xs text-warm-text/55 hover:text-gold/80 transition-colors duration-200 text-left"
    >
      {label}
    </button>
  )
}

