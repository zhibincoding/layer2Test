# Layer2 test

This document test 3 layer2 chain, trying to find out their compatibility with ethereum.
We use retesteth to test [official Ethereum test vectors](https://github.com/ethereum/retesteth).

- retesteth : retesteth-0.2.3-postmerge+commit.c5274b17.Darwin.appleclang
- tests: https://github.com/ethereum/tests
    `tag: v11.3`
- opcodes: https://www.evm.codes/?fork=merge

## Scroll

### step 1 build retesteth

follow the document: <https://github.com/ethereum/retesteth> to build retesteth then copy retesteth to /usr/local/bin

```shell
cp ./retesteth/build/retesteth/retesteth /usr/local/bin/retesteth
```

### step 2 build evm of Scroll

```shell
git clone https://github.com/unifra20/go-ethereum.git
cd go-ethereum
git checkout for_retesteth
make all
cd ..
```

>unifra team have forked a repository from <https://github.com/scroll-tech/go-ethereum.git> based on `prealpha-v5.1` and did some modifications to enable evm&t8ntool. 
>1. modified t8ntool to enable BaseFee and support the fork 'Merged'
>2. change codehash algorithm from poseidon to Keccak256. `Scroll team have done this in the latest branch.`

### step 3 start test

```shell
sh ./runtest.sh scroll ./go-ethereum/build/bin/evm
```

We build a table show the result.

- folder: folder name
- total: total case count
- success: success case count
- fail: failed case but didn't known reason count
- known: failed and known reason
- rate: success/(total-known)

Most of the failed casees caused by `SELFDESTRUCT`,`PREVRANDAO`(DIFFICULTY).

folder|total|success|fail|known|rate
|--|--|--|--|--|--|
| vmArithmeticTest | 62 | 60 | 1 | 1 | 98.36%
| stArgsZeroOneBalance | 45 | 44 | 0 | 1 | 100.00%
| stAttackTest | 1 | 0 | 0 | 1 | NaN%
| stBadOpcode | 120 | 119 | 0 | 1 | 100.00%
| stBugs | 3 | 1 | 0 | 2 | 100.00%
| stCallCodes | 60 | 40 | 0 | 20 | 100.00%
| stCallCreateCallCodeTest | 36 | 29 | 0 | 7 | 100.00%
| stCallDelegateCodesCallCodeHomestead | 41 | 24 | 0 | 17 | 100.00%
| stCallDelegateCodesHomestead | 41 | 24 | 0 | 17 | 100.00%
| stChainId | 2 | 2 | 0 | 0 | 100.00%
| stCodeCopyTest | 2 | 2 | 0 | 0 | 100.00%
| stCodeSizeLimit | 5 | 5 | 0 | 0 | 100.00%
| stCreate2 | 43 | 35 | 0 | 8 | 100.00%
| stCreateTest | 34 | 25 | 0 | 9 | 100.00%
| stDelegatecallTestHomestead | 28 | 28 | 0 | 0 | 100.00%
| stEIP150Specific | 12 | 10 | 0 | 2 | 100.00%
| stEIP150singleCodeGasPrices | 37 | 34 | 0 | 3 | 100.00%
| stEIP1559 | 11 | 9 | 0 | 2 | 100.00%
| stEIP158Specific | 4 | 1 | 1 | 2 | 50.00%
| stEIP2930 | 6 | 5 | 0 | 1 | 100.00%
| stEIP3607 | 5 | 5 | 0 | 0 | 100.00%
| stExample | 8 | 4 | 0 | 4 | 100.00%
| stExtCodeHash | 21 | 10 | 0 | 11 | 100.00%
| stHomesteadSpecific | 5 | 5 | 0 | 0 | 100.00%
| stInitCodeTest | 16 | 15 | 0 | 1 | 100.00%
| stLogTests | 46 | 46 | 0 | 0 | 100.00%
| stMemExpandingEIP150Calls | 9 | 9 | 0 | 0 | 100.00%
| stMemoryStressTest | 38 | 38 | 0 | 0 | 100.00%
| stMemoryTest | 71 | 71 | 0 | 0 | 100.00%
| stNonZeroCallsTest | 20 | 16 | 0 | 4 | 100.00%
| stPreCompiledContracts | 9 | 9 | 0 | 0 | 100.00%
| stPreCompiledContracts2 | 102 | 102 | 0 | 0 | 100.00%
| stQuadraticComplexityTest | 16 | 16 | 0 | 0 | 100.00%
| stRandom | 292 | 270 | 0 | 22 | 100.00%
| stRandom2 | 212 | 199 | 0 | 13 | 100.00%
| stRecursiveCreate | 2 | 2 | 0 | 0 | 100.00%
| stRefundTest | 15 | 7 | 0 | 8 | 100.00%
| stReturnDataTest | 41 | 41 | 0 | 0 | 100.00%
| stRevertTest | 45 | 44 | 0 | 1 | 100.00%
| stSLoadTest | 1 | 1 | 0 | 0 | 100.00%
| stSStoreTest | 28 | 28 | 0 | 0 | 100.00%
| stSelfBalance | 5 | 4 | 0 | 1 | 100.00%
| stShift | 42 | 42 | 0 | 0 | 100.00%
| stSolidityTest | 16 | 14 | 0 | 2 | 100.00%
| stSpecialTest | 13 | 11 | 0 | 2 | 100.00%
| stStackTests | 10 | 10 | 0 | 0 | 100.00%
| stStaticCall | 275 | 264 | 0 | 11 | 100.00%
| stStaticFlagEnabled | 13 | 13 | 0 | 0 | 100.00%
| stSystemOperationsTest | 54 | 41 | 0 | 13 | 100.00%
| stTimeConsuming | 14 | 14 | 0 | 0 | 100.00%
| stTransactionTest | 23 | 15 | 2 | 6 | 88.24%
| stTransitionTest | 6 | 6 | 0 | 0 | 100.00%
| stWalletTest | 40 | 38 | 0 | 2 | 100.00%
| stZeroCallsRevert | 16 | 16 | 0 | 0 | 100.00%
| stZeroCallsTest | 20 | 16 | 0 | 4 | 100.00%
| stZeroKnowledge | 133 | 133 | 0 | 0 | 100.00%
| stZeroKnowledge2 | 130 | 130 | 0 | 0 | 100.00%

These cases covered most of the [evm opcodes](https://github.com/unifra20/solnow/blob/main/opcodes.js). 136 opCode tested and there are 143 in total, basically coverage=95%

## polygon

polygon team have published their test results:https://github.com/0xPolygonHermez
 
There is a list shows all ignored tests: <https://github.com/0xPolygonHermez/zkevm-testvectors/blob/main/tools/ethereum-tests/no-exec.json>

We see that [DIFFICULTY](https://github.com/0xPolygonHermez/zkevm-testvectors/blob/main/tools/ethereum-tests/no-exec.json#L9043), [GASLIMIT](https://github.com/0xPolygonHermez/zkevm-testvectors/blob/main/tools/ethereum-tests/no-exec.json#L9047), [SELFDESTRUCT](https://github.com/0xPolygonHermez/zkevm-testvectors/blob/main/tools/ethereum-tests/no-exec.json#L1547)
are ignored, they may have difference behavior between ethereum.

## optimism

Optimism team released a document described optimism diffrence between ethereum, see: https://community.optimism.io/docs/developers/build/differences/#bedrock

According to this document, these opcodes `COINBASE`,`DIFFICULTY`,`ORIGIN`,`CALLER` may have differences between with ethereum.

### We also did test for optimism.

### step 1

```shell
git clone https://github.com/ethereum-optimism/op-geth.git
cd op-geth
git checkout 6d55908347cac7463dd6a2cb236f30ec26c9a121
make all
cd ..
```

### step 2 run test

```shell
sh ./runtest.sh optimism ./op-geth/build/bin/evm
```

folder|total|success|fail|known|rate
|--|--|--|--|--|--|
| vmArithmeticTest | 64 | 64 | 0 | 0 | 100.00%
| stArgsZeroOneBalance | 46 | 46 | 0 | 0 | 100.00%
| stAttackTest | 2 | 2 | 0 | 0 | 100.00%
| stBadOpcode | 121 | 121 | 0 | 0 | 100.00%
| stBugs | 5 | 5 | 0 | 0 | 100.00%
| stCallCodes | 80 | 80 | 0 | 0 | 100.00%
| stCallCreateCallCodeTest | 43 | 43 | 0 | 0 | 100.00%
| stCallDelegateCodesCallCodeHomestead | 58 | 58 | 0 | 0 | 100.00%
| stCallDelegateCodesHomestead | 58 | 58 | 0 | 0 | 100.00%
| stChainId | 2 | 2 | 0 | 0 | 100.00%
| stCodeCopyTest | 2 | 2 | 0 | 0 | 100.00%
| stCodeSizeLimit | 5 | 5 | 0 | 0 | 100.00%
| stCreate2 | 51 | 51 | 0 | 0 | 100.00%
| stCreateTest | 43 | 43 | 0 | 0 | 100.00%
| stDelegatecallTestHomestead | 28 | 28 | 0 | 0 | 100.00%
| stEIP150Specific | 14 | 14 | 0 | 0 | 100.00%
| stEIP150singleCodeGasPrices | 40 | 40 | 0 | 0 | 100.00%
| stEIP1559 | 13 | 13 | 0 | 0 | 100.00%
| stEIP158Specific | 7 | 7 | 0 | 0 | 100.00%
| stEIP2930 | 7 | 7 | 0 | 0 | 100.00%
| stEIP3607 | 5 | 5 | 0 | 0 | 100.00%
| stExample | 9 | 6 | 3 | 0 | 66.67%
| stExtCodeHash | 32 | 32 | 0 | 0 | 100.00%
| stHomesteadSpecific | 5 | 5 | 0 | 0 | 100.00%
| stInitCodeTest | 17 | 17 | 0 | 0 | 100.00%
| stLogTests | 46 | 46 | 0 | 0 | 100.00%
| stMemExpandingEIP150Calls | 9 | 9 | 0 | 0 | 100.00%
| stMemoryStressTest | 38 | 38 | 0 | 0 | 100.00%
| stMemoryTest | 71 | 71 | 0 | 0 | 100.00%
| stNonZeroCallsTest | 24 | 24 | 0 | 0 | 100.00%
| stPreCompiledContracts | 9 | 9 | 0 | 0 | 100.00%
| stPreCompiledContracts2 | 102 | 102 | 0 | 0 | 100.00%
| stQuadraticComplexityTest | 16 | 16 | 0 | 0 | 100.00%
| stRandom | 314 | 314 | 0 | 0 | 100.00%
| stRandom2 | 225 | 225 | 0 | 0 | 100.00%
| stRecursiveCreate | 2 | 2 | 0 | 0 | 100.00%
| stRefundTest | 23 | 23 | 0 | 0 | 100.00%
| stReturnDataTest | 41 | 41 | 0 | 0 | 100.00%
| stRevertTest | 46 | 46 | 0 | 0 | 100.00%
| stSLoadTest | 1 | 1 | 0 | 0 | 100.00%
| stSStoreTest | 28 | 28 | 0 | 0 | 100.00%
| stSelfBalance | 6 | 6 | 0 | 0 | 100.00%
| stShift | 42 | 42 | 0 | 0 | 100.00%
| stSolidityTest | 18 | 18 | 0 | 0 | 100.00%
| stSpecialTest | 15 | 15 | 0 | 0 | 100.00%
| stStackTests | 10 | 10 | 0 | 0 | 100.00%
| stStaticCall | 286 | 286 | 0 | 0 | 100.00%
| stStaticFlagEnabled | 13 | 13 | 0 | 0 | 100.00%
| stSystemOperationsTest | 67 | 67 | 0 | 0 | 100.00%
| stTimeConsuming | 14 | 14 | 0 | 0 | 100.00%
| stTransactionTest | 29 | 27 | 2 | 0 | 93.10%
| stTransitionTest | 6 | 6 | 0 | 0 | 100.00%
| stWalletTest | 42 | 42 | 0 | 0 | 100.00%
| stZeroCallsRevert | 16 | 16 | 0 | 0 | 100.00%
| stZeroCallsTest | 24 | 24 | 0 | 0 | 100.00%
| stZeroKnowledge | 133 | 133 | 0 | 0 | 100.00%
| stZeroKnowledge2 | 130 | 130 | 0 | 0 | 100.00%
