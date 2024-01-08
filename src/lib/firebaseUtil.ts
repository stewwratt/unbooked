import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import type { Establishment } from "$lib/types";

export async function getEstablishments(): Promise<Establishment[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "establishments"));
    const establishments = querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as Establishment)
    );
    console.log("Establishments from firebaseUtil.ts:", establishments); // Check the fetched data
    return establishments;
  } catch (e) {
    console.error("Failed to fetch establishments:", e);
    return []; // Return an empty array in case of an error
  }
}

export async function getServiceProviders() {
  const serviceProvidersCol = collection(db, "serviceProviders");
  const serviceProviderSnapshot = await getDocs(serviceProvidersCol);
  const serviceProviders = serviceProviderSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return serviceProviders;
}
