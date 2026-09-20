# FrameGatha

Custom framing and print storefront for Kathmandu, Nepal.

Includes a persistent product catalog, album photo uploads, custom booking requests, cash-on-delivery checkout, and a server-authorized studio dashboard. All studio accounts have administrator access. The primary account is `test` / `test1234` as requested. Products and prices are editable. The initial catalog contains explicitly labeled sample prices and illustrative Unsplash designs; Instagram images were not accessible.

Orders and bookings are stored for the studio to review. Submission does not send a WhatsApp message or guarantee booking availability. Customers are told that the studio will confirm by phone. Sample checkout pricing includes delivery.

## Development

Install with `npm run install:ci`, generate schema migrations with `npm run db:generate`, and build with `npm run build`. Apply generated migrations to the local D1 binding before testing. `npm start` runs the built Worker. `npm run dev` runs the development server.

Sites supplies D1 (`DB`) and R2 (`BUCKET`). No external payment processor is used. Photos are limited to JPG, PNG, and WebP files up to 5 MB. Authentication uses PBKDF2 password hashes and expiring HttpOnly session cookies; admin writes are authorized by the server.

The local `.sites-runtime` folder contains ignored verification scripts and screenshots. Production data is separate from local test records.
