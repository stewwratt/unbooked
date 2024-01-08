<script>
    export let establishment = {
      id: '',
      name: 'Default Establishment',
      imageUrl: '/default-image.jpg',
      socialMedia: {
        facebook: '',
        twitter: '',
        instagram: ''
      },
      location: 'Default Location',
      rating: 0,
      // Add additional fields as necessary
      // Could include these fields
      // description: A short text description of the establishment.
      // servicesOffered: A list of key services the establishment offers.
      // openingHours: Information about when the establishment is open.

    };
  
    function selectEstablishment() {
      // Logic to handle establishment selection
      console.log(`Establishment ${establishment.name} selected`);
    }
  </script>
  
  <style>
    .establishment-card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      margin: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 300px; /* Adjust width as needed */
    }
  
    .establishment-image {
      width: 100%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 16px;
    }
  
    .social-media-links {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin: 8px 0;
    }
  
    .select-button {
      padding: 8px 16px;
      background-color: blue;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 8px;
    }
  
    .select-button:hover {
      background-color: darkblue;
    }
  
    .star-rating {
      /* Add styles for star rating */
    }
  
    /* Add additional styles as necessary */
    /* .establishment-card {
        border: 2px solid black;
        background-color: #fff;
        color: black;
        font-family: 'Arial', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
        margin: 16px;
        width: 300px;
    }

    .establishment-image {
        border: 3px solid black;
        width: 100%;
        height: auto;
        object-fit: cover;
        margin-bottom: 16px;
    }

    .social-media-links a {
        color: black;
        text-decoration: none;
        border-bottom: 1px solid black;
    }

    .select-button {
        background-color: black;
        color: white;
        border: 2px solid black;
        padding: 8px 16px;
        margin-top: 8px;
        cursor: pointer;
    }

    .select-button:hover {
        background-color: white;
        color: black;
    } */

  </style>
  
  {#if establishment}
  <div class="establishment-card">
    <img 
      class="establishment-image" 
      src={establishment.imageUrl || '/default-image.jpg'} 
      alt={establishment.name || 'Establishment'} 
    />
    <h2>{establishment.name || 'Unknown Establishment'}</h2>

    <div class="social-media-links">
      {#if establishment.socialMedia && establishment.socialMedia.facebook}
        <a href={establishment.socialMedia.facebook}>Facebook</a>
      {/if}
      {#if establishment.socialMedia && establishment.socialMedia.twitter}
        <a href={establishment.socialMedia.twitter}>Twitter</a>
      {/if}
      {#if establishment.socialMedia && establishment.socialMedia.instagram}
        <a href={establishment.socialMedia.instagram}>Instagram</a>
      {/if}
    </div>

    <div>{establishment.location || 'No location specified'}</div>

    <div class="star-rating">
      {establishment.rating || 0} stars
    </div>

    <button class="select-button" on:click={selectEstablishment}>Select</button>
  </div>
{:else}
  <p>Establishment data is not available.</p>
{/if}