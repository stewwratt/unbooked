
<script>
import ServiceCard from '../components/ServiceCard.svelte';

let services = [
    { title: 'Haircut', price: '50', description: 'A stylish and modern haircut.' },
    { title: 'Beard Trim', price: '30', description: 'Precision beard trimming and styling.' },
    // ...other services
];
</script>

{#each services as service}
<ServiceCard {service} />
{/each}