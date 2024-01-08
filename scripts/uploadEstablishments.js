import dotenv from "dotenv";
import admin from "firebase-admin";

dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS),
});

const db = admin.firestore();

const establishments = [
  {
    name: "Joe's Barber Shop",
    imageUrl: "/joes-image.jpg",
    socialMedia: {
      facebook: "http://facebook.com/joesbarbershop",
      twitter: "http://twitter.com/joesbarbershop",
      instagram: "http://instagram.com/joesbarbershop",
    },
    location: "123 Main St, Townsville",
    rating: 4.5,
    description: "A classic barber shop offering the best haircuts in town.",
    servicesOffered: ["Haircut", "Shave", "Beard Trim"],
    openingHours: "9 AM - 7 PM",
    serviceProviders: {
      serviceProviderID1: true,
      serviceProviderID2: false,
    },
  },
  {
    name: "The Trendy Salon",
    imageUrl: "/trendy-salon-image.jpg",
    socialMedia: {
      facebook: "http://facebook.com/trendysalon",
      twitter: "http://twitter.com/trendysalon",
      instagram: "http://instagram.com/trendysalon",
    },
    location: "456 Fashion Ave, Stylish City",
    rating: 4.7,
    description: "Modern hair styling and coloring in a trendy atmosphere.",
    servicesOffered: ["Styling", "Coloring", "Hair Treatment"],
    openingHours: "10 AM - 8 PM",
    serviceProviders: {
      serviceProviderID3: true,
      serviceProviderID4: true,
    },
  },
  {
    name: "Classic Cuts",
    imageUrl: "/classic-cuts-image.jpg",
    socialMedia: {
      facebook: "http://facebook.com/classiccuts",
      twitter: "http://twitter.com/classiccuts",
      instagram: "http://instagram.com/classiccuts",
    },
    location: "789 Old School Rd, Retroville",
    rating: 4.3,
    description: "Traditional haircuts and exceptional service.",
    servicesOffered: ["Haircut", "Shave"],
    openingHours: "8 AM - 6 PM",
    serviceProviders: {
      serviceProviderID5: true,
      serviceProviderID6: false,
    },
  },
];
async function uploadData() {
  try {
    for (const establishment of establishments) {
      const docRef = await db.collection("establishments").add(establishment);
      console.log(`Uploaded: ${establishment.name}, ID: ${docRef.id}`);
    }
    console.log("All establishments uploaded successfully");
  } catch (error) {
    console.error("Error uploading data: ", error);
  }
}

uploadData();
