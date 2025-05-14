import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 120;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const formatNumber = (num: number) => {
  return num.toLocaleString('es-ES');
}

export const roundLocalNumber = (num: number, zeros: number = 0) => {
  if (zeros < 0) return num;
  const divider = 10**zeros;
  return formatNumber(Math.ceil(num/divider)*divider);
}
  