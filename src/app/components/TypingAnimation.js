'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TypingAnimation({ strings, className }) {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: '|',
      backDelay: 1000,
      startDelay: 500,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, [strings]);

  return <span ref={el} className={className} />;
} 