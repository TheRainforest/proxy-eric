# Rainforest: E-Commerce Application

Rainforest is a full-stack e-commerce website that allows users to explore the details (images, related products, reviews) of any product from our catalogue of 10 million products.

![Rainforest Proxy Demo](demo/demo.gif)

## Related Projects

This proxy brings together the following modules:
  - Product Images Module: https://github.com/AmazonRainforest/product-images
  - Details Module: https://github.com/AmazonRainforest/details
  - Related Products Module: https://github.com/AmazonRainforest/related-products
  - Reviews Module: https://github.com/AmazonRainforest/reviews

## Technologies Used

  - Frontend: React, HTML5, CSS3, jQuery
  - Backend: Node.js, Express, PostgreSQL, Cassandra, Nginx
  - Deployment: AWS (EC2)

## Usage

**Install dependencies**
> npm install

**Set up environment variables**
- Make a copy of .env_sample and configure the environment variables as necessary.
- Save as .env and ensure it is added to .gitignore.

**Start up the proxy server**
> npm start

*You must have all four modules running in order for the proxy to load successfully. Please refer to the links in the "Related Projects" section to find out how to load the individual modules.*

## Style Guide
This module follows [Airbnb style guide](https://github.com/airbnb/javascript)