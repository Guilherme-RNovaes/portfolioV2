"use client"

import { CornerRightUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-4 md:bottom-10 md:right-10 bg-transparent border border-gray-400/20 text-white p-2 rounded-md transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      onClick={scrollToTop}
    >
      <CornerRightUp size={18} />
    </button>
  );
};

export default ScrollToTopButton;
