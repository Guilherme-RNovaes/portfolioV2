"use client"

import { CornerRightUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

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
    <Button
      className={`fixed bottom-4 right-4 md:bottom-10 bg-transparent md:right-10 p-2 transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      variant='outline'
      onClick={scrollToTop}
    >
      <CornerRightUp size={18} />
    </Button>
  );
};

export default ScrollToTopButton;
