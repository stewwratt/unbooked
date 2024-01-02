<script>
    export let service = {
      title: 'Default Service',
      price: '0',
      description: 'No description provided.'
    };
  </script>
  
  <style>
    * {
      font-family: "Red Hat Display", sans-serif;
    }
    
    .service-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 16px;
      margin: 16px;
      width: 300px; /* or any other fixed width */
      height: 200px; /* fixed height to maintain consistent card size */
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      background: white;
    }
  
    .service-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px; /* to push the description to the bottom */
    }
  
    .service-title {
      font-size: 1.5em;
      flex: 1;
    }
  
    .service-price {
      font-size: 1.2em;
      color: #333;
      flex: 0;
    }
  
    .service-description {
      font-size: 1em;
      color: #666;
      flex-grow: 1; /* ensures it takes up the space left by the title and price */
    }
  
    .service-footer {
      display: flex;
      justify-content: flex-end;
    }
  
    button {
      padding: 8px 16px;
      background-color: blue;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: darkblue;
    }

    .service-card {
        background: rgba(255, 255, 255, 0.2); /* Semi-transparent background */
        backdrop-filter: blur(10px); /* Blur effect for the background */
        border-radius: 20px; /* Rounded corners */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
        padding: 20px;
        margin: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 300px; /* Adjust as needed */
        transition: all 0.3s ease;
    }

    .service-card:hover {
        background: rgba(255, 255, 255, 0.3); /* Slightly more opaque on hover */
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }

    .service-title {
        font-size: 1.5rem;
        color: #333;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .service-description {
        font-size: 1rem;
        color: #555;
        text-align: center;
        margin-bottom: 15px;
    }

    .service-price {
        font-size: 1.2rem;
        color: #333;
        margin-bottom: 15px;
    }

    .select-button {
        background-color: #007bff; /* Button color */
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 10px;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: background-color 0.3s ease;
    }

    .select-button:hover {
        background-color: #0056b3;
    }

  </style>
  
  <div class="service-card">
    <div class="service-header">
      <div class="service-title">{service.title}</div>
      <div class="service-price">${service.price}</div>
    </div>
    <p class="service-description">{service.description}</p>
    <div class="service-footer">
      <button on:click={() => console.log(`Selected ${service.title}`)}>Select</button>
    </div>
  </div>