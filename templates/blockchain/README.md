# Device Binding

## HIW

### 1. Set up environment

```bash
echo IOTEX_PRIVATE_KEY=<YOUR_PRIVATE_KEY> > .env
// e.g. echo IOTEX_PRIVATE_KEY=111111111111111111111111111111111111 > .env
```

### 2. Run tests

```bash
npm run test
```

### 3. Try deploy in hardhat environment

```bash
npm run deploy
```

### 4. Deploy to testnet

```bash
npm run deploy:testnet
```

### 5. Run tasks

```bash
npx hardhat add-erc20-minter --address <MINTER_ADDRESS> --network testnet
```