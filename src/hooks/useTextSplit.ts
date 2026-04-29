import { useEffect, useRef, useState } from 'react';

// Simple hook to split text into lines based on visual wrapping in the DOM
export function useTextSplit(text: string) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !text) return;

    // A robust visual split algorithm would measure word widths.
    // For bespoke brutaliste design, often split by \n or <br/> is safer or CSS words.
    // Here we provide a simple split by word, returning arrays of words 
    // that the UI can map into overflow-hidden wrappers for reveal animations.

    const words = text.split(' ').filter(word => word.length > 0);
    setLines(words);
    setIsReady(true);
    
    // In a full GSAP implementation, we would use SplitText.
    // Here we split into words to allow stagger animations.
  }, [text]);

  return { containerRef, lines, isReady };
}
