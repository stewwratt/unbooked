<script>
    export let serviceProvider = {
      id: '',
      name: 'Default Service Provider',
      imageUrl: '/default-provider-image.jpg',
      bio: 'Short biography or description of the service provider.',
      rating: 0,
      services: [], // Array of services offered by the provider
      socialMedia: {
        facebook: '',
        instagram: '',
        linkedin: ''
      },
      // Additional fields as necessary
    };
  
    function selectServiceProvider() {
      // Logic to handle service provider selection
      console.log(`Service Provider ${serviceProvider.name} selected`);
    }
  </script>
  
  <style>
    .service-provider-card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      margin: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 300px; /* Adjust width as needed */
    }
  
    .provider-image {
      width: 100%;
      height: auto;
      border-radius: 50%; /* Circular image */
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
      background-color: green;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 8px;
    }
  
    .select-button:hover {
      background-color: darkgreen;
    }
  
    .star-rating {
      /* Add styles for star rating */
    }
  
    .services-list {
      list-style: none;
      padding: 0;
      margin-top: 8px;
    }
  
    /* Add additional styles as necessary */
    /* .service-provider-card {
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

    .provider-image {
        border: 3px solid black;
        width: 150px; 
        height: 150px;
        border-radius: 50%;
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
  
  <div class="service-provider-card">
    <img class="provider-image" src={serviceProvider.imageUrl} alt={`Image of ${serviceProvider.name}`} />
    <h2>{serviceProvider.name}</h2>
    <p>{serviceProvider.bio}</p>
    <ul class="services-list">
      {#each serviceProvider.services as service}
        <li>{service.name} - ${service.price}</li>
      {/each}
    </ul>
    <div class="star-rating">
      {/* Component or logic to display star rating */}
      {serviceProvider.rating} stars
    </div>
    <div class="social-media-links">
      <!-- Add checks for existence of social media links if needed -->
      <a href={serviceProvider.socialMedia.facebook}>Facebook</a>
      <a href={serviceProvider.socialMedia.instagram}>Instagram</a>
      <a href={serviceProvider.socialMedia.linkedin}>LinkedIn</a>
    </div>
    <button class="select-button" on:click={selectServiceProvider}>Select</button>
  </div>
  