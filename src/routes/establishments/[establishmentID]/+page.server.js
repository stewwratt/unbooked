// src/routes/establishments/[establishmentID]/+page.server.js
import { db } from '$lib/firebaseConfig';

export async function load({ params }: { establishmentID: string }) {
    const { establishmentID } = params;
    const establishment = await db.getEstablishment(establishmentID); // Implement this function in your db module
    if (establishment) {
        return { props: { establishment } };
    }

    throw Error(404, 'Establishment not found');
}
