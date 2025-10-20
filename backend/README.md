# ForFree Backend

Backend API for the ForFree Web3 Platform, built with Node.js, Express, MongoDB, and Redis.

## Features

- User management (registration, authentication, profile)
- NFT management (minting, listing, transfers)
- Transaction tracking and history
- Blockchain integration with Web3.js
- Caching with Redis for improved performance
- RESTful API design

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Redis** - In-memory data structure store
- **Web3.js** - Ethereum JavaScript API
- **JWT** - JSON Web Tokens for authentication

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- Redis (v6.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/wens20005/forfree.git
cd forfree/backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/forfree
JWT_SECRET=your_jwt_secret_here
REDIS_URL=redis://localhost:6379
ETHEREUM_RPC_URL=https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID
```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## API Endpoints

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:walletAddress` - Get user by wallet address
- `POST /api/users` - Create new user
- `PATCH /api/users/:walletAddress` - Update user
- `DELETE /api/users/:walletAddress` - Delete user

### NFTs
- `GET /api/nfts` - Get all NFTs
- `GET /api/nfts/:id` - Get NFT by ID
- `GET /api/nfts/owner/:ownerId` - Get NFTs by owner
- `POST /api/nfts` - Create new NFT
- `PATCH /api/nfts/:id` - Update NFT
- `DELETE /api/nfts/:id` - Delete NFT

### Transactions
- `GET /api/transactions` - Get all transactions
- `GET /api/transactions/:hash` - Get transaction by hash
- `GET /api/transactions/user/:address` - Get transactions by user address
- `POST /api/transactions` - Create new transaction
- `PATCH /api/transactions/:hash` - Update transaction

## Project Structure

```
backend/
├── config/
│   └── db.js              # Database configuration
├── controllers/           # Request handlers
│   ├── userController.js
│   ├── nftController.js
│   └── transactionController.js
├── middleware/            # Custom middleware
│   └── auth.js            # Authentication middleware
├── models/                # Mongoose models
│   ├── User.js
│   ├── NFT.js
│   └── Transaction.js
├── routes/                # API routes
│   ├── users.js
│   ├── nfts.js
│   └── transactions.js
├── utils/                 # Utility functions
│   ├── blockchain.js      # Web3 integration
│   └── cache.js           # Redis caching
├── .env                   # Environment variables
├── .env.example           # Example environment variables
├── package.json           # Project dependencies
├── server.js              # Entry point
└── README.md              # This file
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| NODE_ENV | Environment (development/production) | development |
| PORT | Server port | 5000 |
| MONGODB_URI | MongoDB connection string | mongodb://localhost:27017/forfree |
| JWT_SECRET | Secret for JWT signing | forfree_jwt_secret |
| REDIS_URL | Redis connection string | redis://localhost:6379 |
| ETHEREUM_RPC_URL | Ethereum RPC endpoint | https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.