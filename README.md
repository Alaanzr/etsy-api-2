## Overview

This application contains a collection of JSON endpoints that output summary data about Etsy's latest listings. It is built with Node.js and Express.js.

#### Implemented
```
- GET /price - average price of the latest listings, highest price (with the listing), lowest price (with the listing)
- GET /quantity - average quantity of per item, highest quantity (with the listing), lowest quantity (with the listing)
- GET /materials - top 5 most common materials, and all the listings that contain them
- GET /tags - top 5 most common tags, and all the listings that contain them
```

#### Pending
```
- GET /categories - all category paths, by frequency
- GET / - route containing all the above information
```

## Getting Started

```git clone https://github.com/Alaanzr/etsy-api-2.git```

```cd etsy-api-2```

- Ensure that node is installed. A download link is available here: https://nodejs.org/en/download/

- Install dependencies:
```npm install```

- Run the server and navigate to localhost in your browser of choice, ensuring that port 3000 is specified:
```node server.js```
```http://localhost:3000/price <-- Substitute 'price' with the desired endpoint```
