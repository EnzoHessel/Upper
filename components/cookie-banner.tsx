"use client"

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CookieBanner = () => {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
      setAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    setAccepted(true);
    localStorage.setItem('cookieConsent', 'true');
  };

  if (accepted) return null;

  return (
    <motion.div
      className="w-52 h-52 bg-red-500"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
    >
      <p>Este site usa cookies para melhorar a sua experiência.</p>
      <button onClick={handleAccept}>Aceitar</button>
    </motion.div>
  );
};

export default CookieBanner;
