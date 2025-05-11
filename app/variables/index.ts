const integrityKey = process.env.NEXT_PUBLIC_WOMPI_INTEGRITY_KEY;
const publicKey = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY;
const currency = "COP";
const amountInCents = 48000000;

export const wompiAPI = {
  integrityKey,
  publicKey,
  currency,
  amountInCents
};
