import {useEffect, useRef, useState} from "react";

export const useLazyImage = (rootMarginByPx: string) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsLoaded(true);
              observer.unobserve(entry.target);
            }
          });
        },
        {rootMargin: rootMarginByPx}
    );

    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, [rootMarginByPx]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  }

  return {
    imageRef,
    isLoaded,
    handleImageLoad,
  }
}