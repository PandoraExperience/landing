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
  num = Math.ceil(num); // Delete decimals

  // Zeros can't be greater than the number length or the will be erased
  let numLength = num.toString().length;
  if (zeros > numLength-1) {
    console.warn("Zeros can't be greater than the number length using roundLocalNumber");
    zeros = numLength-1;
  }

  // Zeros can't be negative
  if (zeros < 0) return num;

  // Round to the nearest number with the specified number of zeros
  const divider = 10**zeros;
  return formatNumber(Math.ceil(num/divider)*divider);
}

const pad = (n: number) => n.toString().padStart(2, '0');

export const formatDateToMailerLite = (d: Date = new Date()) => {
  const Y = d.getFullYear();
  const M = pad(d.getMonth() + 1); // 0-based
  const D = pad(d.getDate());
  const h = pad(d.getHours());
  const m = pad(d.getMinutes());
  const s = pad(d.getSeconds());
  return `${Y}-${M}-${D} ${h}:${m}:${s}`;
};

interface FbParams {
    content_name?: string,
    value?: number,
    currency?: string,
    contents?: [{id?: string, quantity?: number}],
    content_type?: string,
    content_ids?: string[],
    content_category?: string,
}

export const trackFbPixel = (event: string, params: FbParams) => {
  // @ts-ignore calling the facebook pixel
  fbq('track', event, params);
};

export const openWhatsApp = (number: string, message: string) => {
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}
