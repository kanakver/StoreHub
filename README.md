# Google Drive Clone

A web-based application that mimics the functionality of Google Drive, allowing users to store, manage, and share files in the cloud.

## Features

- File upload and download
- File organization with folders
- File sharing capabilities
- User authentication
- Real-time file synchronization
- File preview for common formats

## Tech Stack

- Frontend: React.js
- Backend: Node.js with Express
- Database: MongoDB
- Cloud Storage: AWS S3
- Authentication: Firebase Auth

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- AWS Account (for S3)
- Firebase Account

### Installation

1. Clone the repository
```bash
git clone https://github.com/kanakver/google-drive-clone.git
```

2. Install dependencies
```bash
cd google-drive-clone
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory and add the following:
```
MONGODB_URI=your_mongodb_uri
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
FIREBASE_API_KEY=your_firebase_api_key
```

4. Start the development server
```bash
npm run dev
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
