export const experience = {
  reference: "PANDORA",
  name: "Pandora Experience",
  shortDescription: "Una experiencia de respiración e inmersión en hielo",
  longDescription: "Descubre la transformadora experiencia de la inmersión en hielo, acompañada de una poderosa respiración, donde aprenderás a convertir el miedo y la incomodidad en tus aliados. Transforma tu vida con claridad y fortaleza a través de técnicas ancestrales.",
  guide: {
    name: "Karen Nathaly Díaz",
    phoneNumber: "316 513 7110",
    legalId: "1016060350",
    legalIdType: "CC"
  },
  price: {
    amountInCents: 42000000,
    currency: "COP",
    promoApplied: {
      percentage: 10
    }
  },
  category: {
    name: "Desarrollo Personal",
    keywords: [
      "inmersión en hielo", "transformación personal", "despertar del avatar", 
      "superación del miedo", "resiliencia", "experiencia transformadora", 
      "técnicas ancestrales", "desarrollo personal", "meditación en frío", "terapia de frío"
    ]
  },
  rrss: {
    website: "https://landing.chakana.io/",
    email: "kndiaza08@gmail.com",
    phoneNumber: "+57 316 513 7110",
    twitter: "@estebmaister",
    instagram: "https://www.instagram.com/pandora.experiences",
    facebook: "https://www.facebook.com/universare",
    // linkedin: "https://www.linkedin.com/company/pandoraexperience"
  }
};

export const eventDate = new Date('2025-06-14T00:00:00');

export const whatsappContact = {
  number: "+573127811615", // Formatted for WhatsApp (removed spaces)
  message: "Hola! Me interesa saber más sobre la experiencia PANDORA. Mi nombre es: "
};

export const wompiAPI = {
  integrityKey: process.env.NEXT_PUBLIC_WOMPI_INTEGRITY_KEY,
  publicKey: process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY,
  currency: experience.price.currency,
  amountInCents: experience.price.amountInCents
};
