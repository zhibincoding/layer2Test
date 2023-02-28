#!/bin/sh
set -e

folders=(
stArgsZeroOneBalance
stAttackTest
stBadOpcode
stBugs
stCallCodes
stCallCreateCallCodeTest
stCallDelegateCodesCallCodeHomestead
stCallDelegateCodesHomestead
stChainId
stCodeCopyTest
stCodeSizeLimit
stCreate2
stCreateTest
stDelegatecallTestHomestead
stEIP150Specific
stEIP150singleCodeGasPrices
stEIP1559
stEIP158Specific
stEIP2930
stEIP3607
stExample
stExtCodeHash
stHomesteadSpecific
stInitCodeTest
stLogTests
stMemExpandingEIP150Calls
stMemoryStressTest
stMemoryTest
stNonZeroCallsTest
stPreCompiledContracts
stPreCompiledContracts2
stQuadraticComplexityTest
stRandom
stRandom2
stRecursiveCreate
stRefundTest
stReturnDataTest
stRevertTest
stSLoadTest
stSStoreTest
stSelfBalance
stShift
stSolidityTest
stSpecialTest
stStackTests
stStaticCall
stStaticFlagEnabled
stSystemOperationsTest
stTimeConsuming
stTransactionTest
stTransitionTest
stWalletTest
stZeroCallsRevert
stZeroCallsTest
stZeroKnowledge2
stZeroKnowledge
VMTests
)


l2name=$1
echo "evm="${2}
ln -sf ${2} /usr/local/bin/evm
rm -rf ./output/${l2name}

DIR="./tests"
if [ -d "$DIR" ]; then
  cd tests 
  git checkout v11.3
  cd ..
else
  git clone --branch v11.3 https://github.com/ethereum/tests
fi

if [ -d ./tests/config ]; then
    rm -rf ./tests/config
fi

for ((i = 0; i < ${#folders[@]}; i++)); do
  mkdir -p "output/${l2name}/${folders[i]}"
  retesteth -t "GeneralStateTests/"${folders[i]} -- --datadir \
    ./tests/config/${i} --testpath ./tests \
    --clients t8ntool --all >./output/$1/${folders[i]}/log.txt &2>1 &
  done
wait

node load_test_result.js ./output/${l2name}
