# ethers-simple-storage

A simple Solidity smart contract and JavaScript application using ethers.js to interact with it.

## Overview

The `ethers-simple-storage` project provides a basic implementation of a Solidity smart contract for storing and retrieving a single integer value. It also includes a JavaScript application that interacts with the smart contract using the ethers.js library.

## Prerequisites

Before running this project, ensure you have the following:

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/lzhan195/ethers-simple-storage.git
```

2. Navigate to the project directory:

```bash
cd ethers-simple-storage
```

3. Install the project dependencies:

```bash
npm install
```

## Usage
1. Start a local Ethereum development network, such as Ganache, or connect to an existing network.

2. Update the network configuration in hardhat.config.js with the appropriate network settings.

3. Deploy the smart contract to the network:

```bash
npx hardhat run scripts/deploy.js --network <network-name>
```

4. Update the contract address and ABI in scripts/index.js with the deployed contract details.

5. Interact with the smart contract:

```bash
node scripts/index.js
```

## Available Scripts

In the project directory, you can run the following scripts:

- npm run compile: Compiles the Solidity contracts.
- npm run test: Runs the tests for the smart contract.
- npm run deploy: Deploys the smart contract to a specified network.


## Contributing

Contributions are welcome! If you find a bug or have a suggestion for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.





