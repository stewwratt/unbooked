<script context="module" lang="ts">
    import { getEstablishments } from '$lib/firebaseUtil';
    import type { Establishment } from '$lib/types';

    export async function load() {
        try {
            const establishments = await getEstablishments();
            console.log("Establishments fetched:", establishments);
            return { props: { establishments } };
        } catch (error) {
            console.error("Error fetching establishments:", error);
            // Handle error appropriately
            return { props: { establishments: [] } };
        }
    }
</script>

<script lang="ts">
    import EstablishmentCard from '../../components/EstablishmentCard.svelte';
    import { onMount } from 'svelte';
    
    export let establishments: Establishment[] = [];

    onMount(async () => {
        if (!establishments || establishments.length === 0) {
            establishments = await getEstablishments();
        }
    });

    const viewEstablishment = (establishmentID: string): void => {
        window.location.href = `/establishments/${establishmentID}`;
    };
</script>

<!-- HTML Markup for displaying establishments -->
<section>
{#each establishments as establishment}
    <EstablishmentCard 
    {establishment} 
    on:view={() => viewEstablishment(establishment.id)}
    />
{/each}
</section>
  