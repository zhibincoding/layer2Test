
var opCodes = {
  0x0: { name: 'STOP', path: '' },
  0x1: { name: 'ADD', path: 'GeneralStateTests/VMTests/vmArithmeticTest/add.json' },
  0x2: { name: 'MUL', path: 'GeneralStateTests/VMTests/vmArithmeticTest/mul.json' },
  0x3: { name: 'SUB', path: 'GeneralStateTests/VMTests/vmArithmeticTest/sub.json' },
  0x4: { name: 'DIV', path: 'GeneralStateTests/VMTests/vmArithmeticTest/div.json' },
  0x5: { name: 'SDIV', path: 'GeneralStateTests/VMTests/vmArithmeticTest/sdiv.json' },
  0x6: { name: 'MOD', path: 'GeneralStateTests/VMTests/vmArithmeticTest/mod.json' },
  0x7: { name: 'SMOD', path: 'GeneralStateTests/VMTests/vmArithmeticTest/smod.json' },
  0x8: { name: 'ADDMOD', path: 'GeneralStateTests/VMTests/vmArithmeticTest/addmod.json' },
  0x9: { name: 'MULMOD', path: 'GeneralStateTests/VMTests/vmArithmeticTest/mulmod.json' },
  0xa: { name: 'EXP', path: 'GeneralStateTests/VMTests/vmArithmeticTest/exp.json' },
  0xb: { name: 'SIGNEXTEND', path: 'GeneralStateTests/VMTests/vmArithmeticTest/signextend.json' },
  0x10: { name: 'LT', path: 'GeneralStateTests/VMTests/vmBitwiseLogicOperation/lt.json' },
  0x11: { name: 'GT', path: 'GeneralStateTests/VMTests/vmBitwiseLogicOperation/gt.json' },
  0x12: { name: 'SLT', path: 'GeneralStateTests/VMTests/vmBitwiseLogicOperation/slt.json' },
  0x13: { name: 'SGT', path: 'GeneralStateTests/VMTests/vmBitwiseLogicOperation/sgt.json' },
  0x14: { name: 'EQ', path: 'GeneralStateTests/VMTests/vmBitwiseLogicOperation/eq.json' },
  0x15: { name: 'ISZERO', path: 'GeneralStateTests/VMTests/vmBitwiseLogicOperation/iszero.json' },
  0x16: { name: 'AND', path: 'GeneralStateTests/VMTests/vmBitwiseLogicOperation/and.json' },
  0x17: { name: 'OR', path: 'GeneralStateTests/VMTests/vmBitwiseLogicOperation/or.json' },
  0x18: { name: 'XOR', path: 'GeneralStateTests/VMTests/vmBitwiseLogicOperation/xor.json' },
  0x19: { name: 'NOT', path: 'GeneralStateTests/VMTests/vmBitwiseLogicOperation/not.json' },
  0x1a: { name: 'BYTE', path: 'GeneralStateTests/VMTests/vmBitwiseLogicOperation/byte.json' },
  0x1b: { name: 'SHL', path: 'GeneralStateTests/stShift' },
  0x1c: { name: 'SHR', path: 'GeneralStateTests/stShift' },
  0x1d: { name: 'SAR', path: 'GeneralStateTests/stShift' },
  0x20: { name: 'KECCAK256', path: 'GeneralStateTests/VMTests/vmTests/sha3.json' },
  0x30: { name: 'ADDRESS', path: 'GeneralStateTests/VMTests/vmTests/envInfo.json' },
  0x31: { name: 'BALANCE', path: '' },
  0x32: { name: 'ORIGIN', path: 'GeneralStateTests/VMTests/vmTests/envInfo.json' },
  0x33: { name: 'CALLER', path: 'GeneralStateTests/VMTests/vmTests/envInfo.json' },
  0x34: { name: 'CALLVALUE', path: 'GeneralStateTests/VMTests/vmTests/envInfo.json' },
  0x35: { name: 'CALLDATALOAD', path: 'GeneralStateTests/VMTests/vmTests/calldataload.json' },
  0x36: { name: 'CALLDATASIZE', path: 'GeneralStateTests/VMTests/vmTests/calldatasize.json' },
  0x37: { name: 'CALLDATACOPY', path: 'GeneralStateTests/VMTests/vmTests/calldatacopy.json' },
  0x38: { name: 'CODESIZE', path: 'GeneralStateTests/VMTests/vmTests/envInfo.json' },
  0x39: { name: 'CODECOPY', path: 'GeneralStateTests/VMTests/vmIOandFlowOperations/codecopy.json' },
  0x3a: { name: 'GASPRICE', path: 'GeneralStateTests/VMTests/vmTests/envInfo.json' },
  0x3b: { name: 'EXTCODESIZE', path: '','back':'GeneralStateTests/stEIP158Specific' },
  0x3c: { name: 'EXTCODECOPY', path: 'GeneralStateTests/stCodeCopyTest/ExtCodeCopyTests.json' },
  0x3d: { name: 'RETURNDATASIZE', path: 'GeneralStateTests/stReturnDataTest' },
  0x3e: { name: 'RETURNDATACOPY', path: 'GeneralStateTests/stReturnDataTest' },
  0x3f: { name: 'EXTCODEHASH', path: 'GeneralStateTests/stExtCodeHash/' },
  0x40: { name: 'BLOCKHASH', path: '' },
  0x41: { name: 'COINBASE', path: 'GeneralStateTests/VMTests/vmTests/blockInfo.json' },
  0x42: { name: 'TIMESTAMP', path: 'GeneralStateTests/VMTests/vmTests/blockInfo.json' },
  0x43: { name: 'NUMBER', path: 'GeneralStateTests/VMTests/vmTests/blockInfo.json' },
  0x44: { name: 'DIFFICULTY', path: 'GeneralStateTests/VMTests/vmTests/blockInfo.json' },
  0x45: { name: 'GASLIMIT', path: 'GeneralStateTests/VMTests/vmTests/blockInfo.json' },
  0x46: { name: 'CHAINID', path: 'GeneralStateTests/stChainId/chainId.json' },
  0x47: { name: 'SELFBALANCE', path: 'GeneralStateTests/stSelfBalance/selfBalance.json' },
  0x48: { name: 'BASEFEE', path: '','notes':'GeneralStateTests/stExample/basefeeExample.json' },
  0x50: { name: 'POP', path: 'GeneralStateTests/VMTests/vmIOandFlowOperations/pop.json' },
  0x51: { name: 'MLOAD', path: 'GeneralStateTests/VMTests/vmIOandFlowOperations/mload.json' },
  0x52: { name: 'MSTORE', path: 'GeneralStateTests/VMTests/vmIOandFlowOperations/mstore.json' },
  0x53: { name: 'MSTORE8', path: 'GeneralStateTests/VMTests/vmIOandFlowOperations/mstore8.json' },
  0x54: { name: 'SLOAD', path: 'GeneralStateTests/VMTests/vmIOandFlowOperations/sstore_sload.json' },
  0x55: { name: 'SSTORE', path: 'GeneralStateTests/VMTests/vmIOandFlowOperations/sstore_sload.json' },
  0x56: { name: 'JUMP', path: 'GeneralStateTests/VMTests/vmIOandFlowOperations/jump.json' },
  0x57: { name: 'JUMPI', path: 'GeneralStateTests/VMTests/vmIOandFlowOperations/jumpi.json' },
  0x58: { name: 'PC', path: 'GeneralStateTests/VMTests/vmIOandFlowOperations/pc.json' },
  0x59: { name: 'MSIZE', path: 'GeneralStateTests/VMTests/vmIOandFlowOperations/msize.json' },
  0x5a: { name: 'GAS', path: 'GeneralStateTests/VMTests/vmIOandFlowOperations/gas.json' },
  0x5b: { name: 'JUMPDEST', path: 'GeneralStateTests/VMTests/vmIOandFlowOperations/jumpi.json' },
  //0x5f: { name: 'PUSH0', path: 'GeneralStateTests/EIPTests/stEIP3855/push0.json', "desc": "https://eips.ethereum.org/EIPS/eip-3855" },
  0x60: { name: 'PUSH1', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x61: { name: 'PUSH2', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x62: { name: 'PUSH3', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x63: { name: 'PUSH4', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x64: { name: 'PUSH5', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x65: { name: 'PUSH6', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x66: { name: 'PUSH7', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x67: { name: 'PUSH8', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x68: { name: 'PUSH9', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x69: { name: 'PUSH10', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x6a: { name: 'PUSH11', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x6b: { name: 'PUSH12', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x6c: { name: 'PUSH13', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x6d: { name: 'PUSH14', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x6e: { name: 'PUSH15', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x6f: { name: 'PUSH16', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x70: { name: 'PUSH17', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x71: { name: 'PUSH18', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x72: { name: 'PUSH19', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x73: { name: 'PUSH20', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x74: { name: 'PUSH21', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x75: { name: 'PUSH22', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x76: { name: 'PUSH23', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x77: { name: 'PUSH24', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x78: { name: 'PUSH25', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x79: { name: 'PUSH26', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x7a: { name: 'PUSH27', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x7b: { name: 'PUSH28', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x7c: { name: 'PUSH29', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x7d: { name: 'PUSH30', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x7e: { name: 'PUSH31', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x7f: { name: 'PUSH32', path: 'GeneralStateTests/VMTests/vmTests/push.json' },
  0x80: { name: 'DUP1', path: 'GeneralStateTests/VMTests/vmTests/dup.json' },
  0x81: { name: 'DUP2', path: 'GeneralStateTests/VMTests/vmTests/dup.json' },
  0x82: { name: 'DUP3', path: 'GeneralStateTests/VMTests/vmTests/dup.json' },
  0x83: { name: 'DUP4', path: 'GeneralStateTests/VMTests/vmTests/dup.json' },
  0x84: { name: 'DUP5', path: 'GeneralStateTests/VMTests/vmTests/dup.json' },
  0x85: { name: 'DUP6', path: 'GeneralStateTests/VMTests/vmTests/dup.json' },
  0x86: { name: 'DUP7', path: 'GeneralStateTests/VMTests/vmTests/dup.json' },
  0x87: { name: 'DUP8', path: 'GeneralStateTests/VMTests/vmTests/dup.json' },
  0x88: { name: 'DUP9', path: 'GeneralStateTests/VMTests/vmTests/dup.json' },
  0x89: { name: 'DUP10', path: 'GeneralStateTests/VMTests/vmTests/dup.json' },
  0x8a: { name: 'DUP11', path: 'GeneralStateTests/VMTests/vmTests/dup.json' },
  0x8b: { name: 'DUP12', path: 'GeneralStateTests/VMTests/vmTests/dup.json' },
  0x8c: { name: 'DUP13', path: 'GeneralStateTests/VMTests/vmTests/dup.json' },
  0x8d: { name: 'DUP14', path: 'GeneralStateTests/VMTests/vmTests/dup.json' },
  0x8e: { name: 'DUP15', path: 'GeneralStateTests/VMTests/vmTests/dup.json' },
  0x8f: { name: 'DUP16', path: 'GeneralStateTests/VMTests/vmTests/dup.json' },
  0x90: { name: 'SWAP1', path: 'GeneralStateTests/VMTests/vmTests/swap.json' },
  0x91: { name: 'SWAP2', path: 'GeneralStateTests/VMTests/vmTests/swap.json' },
  0x92: { name: 'SWAP3', path: 'GeneralStateTests/VMTests/vmTests/swap.json' },
  0x93: { name: 'SWAP4', path: 'GeneralStateTests/VMTests/vmTests/swap.json' },
  0x94: { name: 'SWAP5', path: 'GeneralStateTests/VMTests/vmTests/swap.json' },
  0x95: { name: 'SWAP6', path: 'GeneralStateTests/VMTests/vmTests/swap.json' },
  0x96: { name: 'SWAP7', path: 'GeneralStateTests/VMTests/vmTests/swap.json' },
  0x97: { name: 'SWAP8', path: 'GeneralStateTests/VMTests/vmTests/swap.json' },
  0x98: { name: 'SWAP9', path: 'GeneralStateTests/VMTests/vmTests/swap.json' },
  0x99: { name: 'SWAP10', path: 'GeneralStateTests/VMTests/vmTests/swap.json' },
  0x9a: { name: 'SWAP11', path: 'GeneralStateTests/VMTests/vmTests/swap.json' },
  0x9b: { name: 'SWAP12', path: 'GeneralStateTests/VMTests/vmTests/swap.json' },
  0x9c: { name: 'SWAP13', path: 'GeneralStateTests/VMTests/vmTests/swap.json' },
  0x9d: { name: 'SWAP14', path: 'GeneralStateTests/VMTests/vmTests/swap.json' },
  0x9e: { name: 'SWAP15', path: 'GeneralStateTests/VMTests/vmTests/swap.json' },
  0x9f: { name: 'SWAP16', path: 'GeneralStateTests/VMTests/vmTests/swap.json' },
  0xa0: { name: 'LOG0', path: 'GeneralStateTests/VMTests/vmLogTest/log0.json' },
  0xa1: { name: 'LOG1', path: 'GeneralStateTests/VMTests/vmLogTest/log1.json' },
  0xa2: { name: 'LOG2', path: 'GeneralStateTests/VMTests/vmLogTest/log2.json' },
  0xa3: { name: 'LOG3', path: 'GeneralStateTests/VMTests/vmLogTest/log3.json' },
  0xa4: { name: 'LOG4', path: 'GeneralStateTests/VMTests/vmLogTest/log4.json' },
  // 0xb3: { name: 'TLOAD', path: '', desc: "https://eips.ethereum.org/EIPS/eip-1153" },
  // 0xb4: { name: 'TSTORE', path: '', desc: "https://eips.ethereum.org/EIPS/eip-1153" },
  0xf0: { name: 'CREATE', path: 'GeneralStateTests/stCreateTest' },
  0xf1: { name: 'CALL', path: '' },
  0xf2: { name: 'CALLCODE', path: 'GeneralStateTests/stCallCodes' },
  0xf3: { name: 'RETURN', path: 'GeneralStateTests/VMTests/vmIOandFlowOperations/return.json' },
  0xf4: { name: 'DELEGATECALL', path: 'GeneralStateTests/stDelegatecallTestHomestead/' },
  0xf5: { name: 'CREATE2', path: 'GeneralStateTests/stCreate2' },
  0xfa: { name: 'STATICCALL', path: 'GeneralStateTests/stStaticCall' },
  0xfd: { name: 'REVERT', path: 'GeneralStateTests/stRevertTest' },
  0xfe: { name: 'INVALID', path: '' },
  0xff: { name: 'SELFDESTRUCT', path: 'GeneralStateTests/VMTests/vmTests/suicide.json' },
};
Name2op = {}
Op2name = {}
tmp = {}
var total = 0;
var tested=0;
for (k in opCodes) {
  let v = opCodes[k];
const  {name,path}=v;
  // let key = parseInt(k, 16)
  Name2op[name] = k;
  Op2name[k] = name;
  total++;
  if(path!=null && path!=''){
    tested++;
    let arr=path.split('/');
    tmp[arr[0]+'/'+arr[1]]=1;
  }
}
Name2op["SUICIDE"] = 0xff;
console.log("total opcodes=",total ,",tested opcodes=",tested,",coverage=", tested/total);
// for(i in tmp){
//   console.log(i);
// }
module.exports = { Name2op, Op2name, opCodes }
