// src/lib/types.ts
export interface Establishment {
  id: string;
  name: string;
  imageUrl: string; // URL to the establishment's image
  socialMedia: {
    facebook: string; // URL to Facebook page
    twitter: string; // URL to Twitter profile
    instagram: string; // URL to Instagram profile
  };
  location: string; // Physical location of the establishment
  rating: number; // Star rating of the establishment
  description: string; // A short text description of the establishment
  servicesOffered: string[]; // A list of key services the establishment offers
  openingHours: string; // Information about when the establishment is open
  serviceProviders: {
    [key: string]: boolean;
  }; // Map of service provider IDs to a boolean indicating their association
}
