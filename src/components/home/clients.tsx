'use client';

import { motion } from 'framer-motion'; 
import React from 'react'; 
import { ImageWithFallback } from './ImageWithFallback';

interface ClientLogo {
  name: string;
  image: string;
}

export function Clients() {
  const clientLogos: ClientLogo[] = [
    { name: 'Microsoft', image: 'https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?...' },
    { name: 'Amazon', image: 'https://images.unsplash.com/photo-1704204656144-3dd12c110dd8?...' },
    { name: 'Google', image: 'https://images.unsplash.com/photo-1662947190722-5d272f82a526?...' },
    { name: 'Yes Bank', image: 'https://images.unsplash.com/photo-1576765915649-b6f4be4ec5c8?...' },
    { name: 'AWS', image: 'https://images.unsplash.com/photo-1543525090-07dc28d19bb4?...' },
    { name: 'Trade India', image: 'https://images.unsplash.com/photo-1760138270903-d95903188730?...' },
    { name: 'Blue Star', image: 'https://images.unsplash.com/photo-1533558527255-407147f3ae72?...' },
    { name: 'Airtel', image: 'https://images.unsplash.com/photo-1566181512663-87e30b008c98?...' },
    { name: 'CABX', image: 'https://images.unsplash.com/photo-1760138270903-d95903188730?...' },
    { name: 'BedsDivans', image: 'https://images.unsplash.com/photo-1680503146454-0fe569cef4eb?...' },
  ];

  return (
    <section id="clients" className="relative py-32 bg-white overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(229,57,53,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(229,57,53,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-0.5 bg-[#E53935]" />
            <h3 className="text-2xl font-bold text-black tracking-tight">
              Partnering with Global Leaders
            </h3>
          </div>

          {/* Logos grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden bg-white border border-black/10 hover:border-[#E53935]/30 transition-all duration-300"
              >
                <div className="aspect-[3/2] relative flex items-center justify-center p-6">
                  <ImageWithFallback
                    src={logo.image}
                    alt={`${logo.name} logo`}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#E53935] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
