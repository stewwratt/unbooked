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
  
  <div class="establishment-card">
    <img class="establishment-image" src={establishment.imageUrl} alt={establishment.name} />
    <h2>{establishment.name}</h2>
    <div class="social-media-links">
      <!-- Add checks for existence of social media links if needed -->
      <a href={establishment.socialMedia.facebook}>Facebook</a>
      <a href={establishment.socialMedia.twitter}>Twitter</a>
      <a href={establishment.socialMedia.instagram}>Instagram</a>
    </div>
    <div>{establishment.location}</div>
    <div class="star-rating">
      <!-- Component or logic to display star rating -->
      {establishment.rating} stars
    </div>
    <button class="select-button" on:click={selectEstablishment}>Select</button>
  </div>
  