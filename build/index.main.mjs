// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export async function Admin(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    Admin: ctc2,
    Oyuncu: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc1, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0]);
  
  
  const v19 = await ctc.creationTime();
  const v18 = stdlib.protect(ctc0, interact.ucret, null);
  const txn1 = await (ctc.sendrecv(1, 1, stdlib.checkedBigNumberify('./index.rsh:35:15:dot', stdlib.UInt_max, 0), [ctc0, ctc0], [v19, v18], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:35:15:dot', stdlib.UInt_max, 0), v19]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:35:15:dot', stdlib.UInt_max, 0)]);
    const [v24] = txn1.data;
    const v27 = txn1.time;
    const v23 = txn1.from;
    
    stdlib.assert(true, {
      at: './index.rsh:35:15:dot',
      fs: [],
      msg: null,
      who: 'Admin'
      });
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    stdlib.assert(true, {
      at: './index.rsh:35:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    const v28 = false;
    const v124 = v27;
    
    if ((() => {
      const v32 = v28 ? false : true;
      
      return v32;})()) {
      sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:41:21:after expr stmt semicolon', stdlib.UInt_max, 2), v23, v24, v28, v124]);
      sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:41:21:after expr stmt semicolon', stdlib.UInt_max, 2), v23, v24, v28]);
      sim_r.isHalt = false;
      }
    else {
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc7, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  const [v24] = txn1.data;
  const v27 = txn1.time;
  const v23 = txn1.from;
  stdlib.assert(true, {
    at: './index.rsh:35:15:dot',
    fs: [],
    msg: null,
    who: 'Admin'
    });
  ;
  stdlib.assert(true, {
    at: './index.rsh:35:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  let v28 = false;
  let v124 = v27;
  
  while ((() => {
    const v32 = v28 ? false : true;
    
    return v32;})()) {
    const v56 = stdlib.protect(ctc1, await interact.oyunuBitir(), {
      at: './index.rsh:46:61:application',
      fs: ['at ./index.rsh:42:17:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)', 'at ./index.rsh:42:17:application call to "runAdmin0" (defined at: ./index.rsh:42:17:function exp)', 'at ./index.rsh:42:17:application call to [unknown function] (defined at: ./index.rsh:42:17:function exp)'],
      msg: 'oyunuBitir',
      who: 'Admin'
      });
    const v73 = ['Admin', null];
    const txn2 = await (ctc.sendrecv(3, 1, stdlib.checkedBigNumberify('./index.rsh:42:17:dot', stdlib.UInt_max, 3), [ctc4, ctc0, ctc1, ctc0, ctc3], [v23, v24, v28, v124, v73], [stdlib.checkedBigNumberify('./index.rsh:43:22:decimal', stdlib.UInt_max, 0), []], [ctc3], v56, false, stdlib.checkedBigNumberify('./index.rsh:98:21:decimal', stdlib.UInt_max, 1024), (async (txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:42:17:dot', stdlib.UInt_max, 2), v23, v24, v28, v124]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:42:17:dot', stdlib.UInt_max, 2), v23, v24, v28]);
      const [v84] = txn2.data;
      const v95 = txn2.time;
      const v83 = txn2.from;
      
      stdlib.assert(true, {
        at: './index.rsh:42:17:dot',
        fs: [],
        msg: null,
        who: 'Admin'
        });
      let v85;
      switch (v84[0]) {
        case 'Admin': {
          
          v85 = stdlib.checkedBigNumberify('./index.rsh:43:22:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Oyuncu': {
          const v89 = v84[1];
          v85 = v24;
          
          break;
          }
        }
      sim_r.txns.push({
        amt: v85,
        kind: 'to',
        tok: undefined
        });
      stdlib.assert(true, {
        at: './index.rsh:42:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Admin'
        });
      let v96;
      switch (v84[0]) {
        case 'Admin': {
          
          const v98 = stdlib.addressEq(v83, v23);
          v96 = v98;
          
          break;
          }
        case 'Oyuncu': {
          const v101 = v84[1];
          v96 = true;
          
          break;
          }
        }
      stdlib.assert(v96, {
        at: './index.rsh:42:17:application',
        fs: [],
        msg: null,
        who: 'Admin'
        });
      switch (v84[0]) {
        case 'Admin': {
          
          const cv28 = v28;
          const cv124 = v95;
          
          (() => {
            const v28 = cv28;
            const v124 = cv124;
            
            if ((() => {
              const v32 = v28 ? false : true;
              
              return v32;})()) {
              sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:41:21:after expr stmt semicolon', stdlib.UInt_max, 2), v23, v24, v28, v124]);
              sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:41:21:after expr stmt semicolon', stdlib.UInt_max, 2), v23, v24, v28]);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc7, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
              sim_r.isHalt = true;
              }})();
          break;
          }
        case 'Oyuncu': {
          const v106 = v84[1];
          sim_r.txns.push({
            amt: v24,
            kind: 'from',
            to: v23,
            tok: undefined
            });
          const cv28 = v28;
          const cv124 = v95;
          
          (() => {
            const v28 = cv28;
            const v124 = cv124;
            
            if ((() => {
              const v32 = v28 ? false : true;
              
              return v32;})()) {
              sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:41:21:after expr stmt semicolon', stdlib.UInt_max, 2), v23, v24, v28, v124]);
              sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:41:21:after expr stmt semicolon', stdlib.UInt_max, 2), v23, v24, v28]);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc7, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
              sim_r.isHalt = true;
              }})();
          break;
          }
        }
      return sim_r;
      })));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv(4, 0, stdlib.checkedBigNumberify('./index.rsh:99:31:dot', stdlib.UInt_max, 3), [ctc4, ctc0, ctc1, ctc0], [v23, v24, v28, v124], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:99:31:dot', stdlib.UInt_max, 2), v23, v24, v28, v124]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:99:31:dot', stdlib.UInt_max, 2), v23, v24, v28]);
        const [] = txn3.data;
        const v121 = txn3.time;
        const v117 = txn3.from;
        
        stdlib.assert(true, {
          at: './index.rsh:99:31:dot',
          fs: [],
          msg: null,
          who: 'Admin'
          });
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v120 = stdlib.addressEq(v23, v117);
        stdlib.assert(v120, {
          at: './index.rsh:99:31:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Admin'
          });
        const cv28 = v28;
        const cv124 = v121;
        
        (() => {
          const v28 = cv28;
          const v124 = cv124;
          
          if ((() => {
            const v32 = v28 ? false : true;
            
            return v32;})()) {
            sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:41:21:after expr stmt semicolon', stdlib.UInt_max, 2), v23, v24, v28, v124]);
            sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:41:21:after expr stmt semicolon', stdlib.UInt_max, 2), v23, v24, v28]);
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc7, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v121 = txn3.time;
      const v117 = txn3.from;
      stdlib.assert(true, {
        at: './index.rsh:99:31:dot',
        fs: [],
        msg: null,
        who: 'Admin'
        });
      ;
      const v120 = stdlib.addressEq(v23, v117);
      stdlib.assert(v120, {
        at: './index.rsh:99:31:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Admin'
        });
      const cv28 = v28;
      const cv124 = v121;
      
      v28 = cv28;
      v124 = cv124;
      
      continue;
      }
    else {
      const [v84] = txn2.data;
      const v95 = txn2.time;
      const v83 = txn2.from;
      stdlib.assert(true, {
        at: './index.rsh:42:17:dot',
        fs: [],
        msg: null,
        who: 'Admin'
        });
      let v85;
      switch (v84[0]) {
        case 'Admin': {
          
          v85 = stdlib.checkedBigNumberify('./index.rsh:43:22:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Oyuncu': {
          const v89 = v84[1];
          v85 = v24;
          
          break;
          }
        }
      ;
      stdlib.assert(true, {
        at: './index.rsh:42:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Admin'
        });
      let v96;
      switch (v84[0]) {
        case 'Admin': {
          
          const v98 = stdlib.addressEq(v83, v23);
          v96 = v98;
          
          break;
          }
        case 'Oyuncu': {
          const v101 = v84[1];
          v96 = true;
          
          break;
          }
        }
      stdlib.assert(v96, {
        at: './index.rsh:42:17:application',
        fs: [],
        msg: null,
        who: 'Admin'
        });
      switch (v84[0]) {
        case 'Admin': {
          
          const cv28 = v28;
          const cv124 = v95;
          
          v28 = cv28;
          v124 = cv124;
          
          continue;
          break;
          }
        case 'Oyuncu': {
          const v106 = v84[1];
          stdlib.protect(ctc2, await interact.tekilHamleKontrol(v106), {
            at: './index.rsh:70:55:application',
            fs: ['at ./index.rsh:69:35:application call to [unknown function] (defined at: ./index.rsh:69:38:function exp)'],
            msg: 'tekilHamleKontrol',
            who: 'Admin'
            });
          
          ;
          const cv28 = v28;
          const cv124 = v95;
          
          v28 = cv28;
          v124 = cv124;
          
          continue;
          
          break;
          }
        }}
    }
  return;
  
  };
export async function Oyuncu(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    Admin: ctc1,
    Oyuncu: ctc0
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc4, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc4]);
  const ctc7 = stdlib.T_Tuple([]);
  
  
  const v19 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v24] = txn1.data;
  const v27 = txn1.time;
  const v23 = txn1.from;
  stdlib.assert(true, {
    at: './index.rsh:35:15:dot',
    fs: [],
    msg: null,
    who: 'Oyuncu'
    });
  ;
  stdlib.assert(true, {
    at: './index.rsh:35:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Oyuncu'
    });
  let v28 = false;
  let v124 = v27;
  
  while ((() => {
    const v32 = v28 ? false : true;
    
    return v32;})()) {
    const v64 = stdlib.protect(ctc0, await interact.hamleYapTekil(), {
      at: './index.rsh:56:72:application',
      fs: ['at ./index.rsh:42:17:application call to [unknown function] (defined at: ./index.rsh:55:25:function exp)', 'at ./index.rsh:42:17:application call to "runOyuncu0" (defined at: ./index.rsh:42:17:function exp)', 'at ./index.rsh:42:17:application call to [unknown function] (defined at: ./index.rsh:42:17:function exp)'],
      msg: 'hamleYapTekil',
      who: 'Oyuncu'
      });
    const v66 = stdlib.eq(v64, stdlib.checkedBigNumberify('./index.rsh:58:44:decimal', stdlib.UInt_max, 0));
    const v68 = v66 ? false : true;
    const v78 = ['Oyuncu', v64];
    const txn2 = await (ctc.sendrecv(3, 1, stdlib.checkedBigNumberify('./index.rsh:42:17:dot', stdlib.UInt_max, 3), [ctc3, ctc0, ctc4, ctc0, ctc2], [v23, v24, v28, v124, v78], [v24, []], [ctc2], v68, false, stdlib.checkedBigNumberify('./index.rsh:98:21:decimal', stdlib.UInt_max, 1024), (async (txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:42:17:dot', stdlib.UInt_max, 2), v23, v24, v28, v124]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:42:17:dot', stdlib.UInt_max, 2), v23, v24, v28]);
      const [v84] = txn2.data;
      const v95 = txn2.time;
      const v83 = txn2.from;
      
      stdlib.assert(true, {
        at: './index.rsh:42:17:dot',
        fs: [],
        msg: null,
        who: 'Oyuncu'
        });
      let v85;
      switch (v84[0]) {
        case 'Admin': {
          
          v85 = stdlib.checkedBigNumberify('./index.rsh:43:22:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Oyuncu': {
          const v89 = v84[1];
          v85 = v24;
          
          break;
          }
        }
      sim_r.txns.push({
        amt: v85,
        kind: 'to',
        tok: undefined
        });
      stdlib.assert(true, {
        at: './index.rsh:42:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Oyuncu'
        });
      let v96;
      switch (v84[0]) {
        case 'Admin': {
          
          const v98 = stdlib.addressEq(v83, v23);
          v96 = v98;
          
          break;
          }
        case 'Oyuncu': {
          const v101 = v84[1];
          v96 = true;
          
          break;
          }
        }
      stdlib.assert(v96, {
        at: './index.rsh:42:17:application',
        fs: [],
        msg: null,
        who: 'Oyuncu'
        });
      switch (v84[0]) {
        case 'Admin': {
          
          const cv28 = v28;
          const cv124 = v95;
          
          (() => {
            const v28 = cv28;
            const v124 = cv124;
            
            if ((() => {
              const v32 = v28 ? false : true;
              
              return v32;})()) {
              sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:41:21:after expr stmt semicolon', stdlib.UInt_max, 2), v23, v24, v28, v124]);
              sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:41:21:after expr stmt semicolon', stdlib.UInt_max, 2), v23, v24, v28]);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc7, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
              sim_r.isHalt = true;
              }})();
          break;
          }
        case 'Oyuncu': {
          const v106 = v84[1];
          sim_r.txns.push({
            amt: v24,
            kind: 'from',
            to: v23,
            tok: undefined
            });
          const cv28 = v28;
          const cv124 = v95;
          
          (() => {
            const v28 = cv28;
            const v124 = cv124;
            
            if ((() => {
              const v32 = v28 ? false : true;
              
              return v32;})()) {
              sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:41:21:after expr stmt semicolon', stdlib.UInt_max, 2), v23, v24, v28, v124]);
              sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:41:21:after expr stmt semicolon', stdlib.UInt_max, 2), v23, v24, v28]);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc7, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
              sim_r.isHalt = true;
              }})();
          break;
          }
        }
      return sim_r;
      })));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.recv(4, 0, [], false, false));
      const [] = txn3.data;
      const v121 = txn3.time;
      const v117 = txn3.from;
      stdlib.assert(true, {
        at: './index.rsh:99:31:dot',
        fs: [],
        msg: null,
        who: 'Oyuncu'
        });
      ;
      const v120 = stdlib.addressEq(v23, v117);
      stdlib.assert(v120, {
        at: './index.rsh:99:31:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Oyuncu'
        });
      const cv28 = v28;
      const cv124 = v121;
      
      v28 = cv28;
      v124 = cv124;
      
      continue;
      }
    else {
      const [v84] = txn2.data;
      const v95 = txn2.time;
      const v83 = txn2.from;
      stdlib.assert(true, {
        at: './index.rsh:42:17:dot',
        fs: [],
        msg: null,
        who: 'Oyuncu'
        });
      let v85;
      switch (v84[0]) {
        case 'Admin': {
          
          v85 = stdlib.checkedBigNumberify('./index.rsh:43:22:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'Oyuncu': {
          const v89 = v84[1];
          v85 = v24;
          
          break;
          }
        }
      ;
      stdlib.assert(true, {
        at: './index.rsh:42:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Oyuncu'
        });
      let v96;
      switch (v84[0]) {
        case 'Admin': {
          
          const v98 = stdlib.addressEq(v83, v23);
          v96 = v98;
          
          break;
          }
        case 'Oyuncu': {
          const v101 = v84[1];
          v96 = true;
          
          break;
          }
        }
      stdlib.assert(v96, {
        at: './index.rsh:42:17:application',
        fs: [],
        msg: null,
        who: 'Oyuncu'
        });
      switch (v84[0]) {
        case 'Admin': {
          
          const cv28 = v28;
          const cv124 = v95;
          
          v28 = cv28;
          v124 = cv124;
          
          continue;
          break;
          }
        case 'Oyuncu': {
          const v106 = v84[1];
          stdlib.protect(ctc1, await interact.hamleyiGorTekil(v106), {
            at: './index.rsh:67:53:application',
            fs: ['at ./index.rsh:66:36:application call to [unknown function] (defined at: ./index.rsh:66:40:function exp)'],
            msg: 'hamleyiGorTekil',
            who: 'Oyuncu'
            });
          
          ;
          const cv28 = v28;
          const cv124 = v95;
          
          v28 = cv28;
          v124 = cv124;
          
          continue;
          
          break;
          }
        }}
    }
  return;
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m3}}"
==
||
gtxn 2 Sender
byte "{{m4}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 2
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  stepargs: [0, 89, 0, 131, 122],
  steps: [null, `#pragma version 3
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 6
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./index.rsh:35:15:dot"
// "[]"
int 1
assert
// CheckPay
// "./index.rsh:35:15:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:35:15:dot"
// "[]"
int 1
assert
int 0
!
bz l0
// compute state in HM_Set 2
int 2
itob
gtxn 0 Sender
concat
gtxna 0 ApplicationArgs 5
concat
int 0
itob // bool
substring 7 8
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
l0:
gtxn 4 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 4 Amount
int 0
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 4 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
done:
int 1
return
`, null, `#pragma version 3
// Handler 3
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./index.rsh:42:17:dot"
// "[]"
int 1
assert
gtxna 0 ApplicationArgs 8
int 0
getbyte
int 0
==
bz l1
int 0
store 253
l1:
gtxna 0 ApplicationArgs 8
int 0
getbyte
int 1
==
bz l2
gtxna 0 ApplicationArgs 8
substring 1 9
btoi
store 252
gtxna 0 ApplicationArgs 6
btoi
store 253
l2:
l0:
// CheckPay
// "./index.rsh:42:17:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
load 253
==
assert
// Just "sender correct"
// "./index.rsh:42:17:dot"
// "[]"
int 1
assert
gtxna 0 ApplicationArgs 8
int 0
getbyte
int 0
==
bz l4
gtxn 0 Sender
gtxna 0 ApplicationArgs 5
==
store 252
l4:
gtxna 0 ApplicationArgs 8
int 0
getbyte
int 1
==
bz l5
gtxna 0 ApplicationArgs 8
substring 1 9
btoi
store 251
int 1
store 252
l5:
l3:
// Nothing
// "./index.rsh:42:17:application"
// "[]"
load 252
assert
gtxna 0 ApplicationArgs 8
int 0
getbyte
int 0
==
bz l7
gtxna 0 ApplicationArgs 7
btoi
!
bz l8
// compute state in HM_Set 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 1024
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
l8:
gtxn 4 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 4 Amount
int 0
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 4 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 1024
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
pop
l7:
gtxna 0 ApplicationArgs 8
int 0
getbyte
int 1
==
bz l9
gtxna 0 ApplicationArgs 8
substring 1 9
btoi
store 251
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 6
btoi
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxna 0 ApplicationArgs 7
btoi
!
dup
store 250
bz l10
// compute state in HM_Set 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 4 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 1024
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
pop
l10:
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 4 Fee
+
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 1024
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
dup
gtxn 5 LastValid
==
assert
pop
l9:
l6:
done:
int 1
return
`, `#pragma version 3
// Handler 4
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./index.rsh:99:31:dot"
// "[]"
int 1
assert
// CheckPay
// "./index.rsh:99:31:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:99:31:dot"
// "[]"
gtxna 0 ApplicationArgs 5
gtxn 0 Sender
==
assert
gtxna 0 ApplicationArgs 7
btoi
!
bz l0
// compute state in HM_Set 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 1024
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
pop
l0:
gtxn 4 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 4 Amount
int 0
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 4 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 1024
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
pop
done:
int 1
return
`],
  unsupported: false
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v19",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v28",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v124",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T7",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Admin",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Oyuncu",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T7",
                "name": "v84",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v28",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v124",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v19",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v28",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v124",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T7",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Admin",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Oyuncu",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T7",
                "name": "v84",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v28",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v124",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a1604080516020808201835243825282518082018452600080825292518152835180830184905290518185015283518082038501815260609091019093528251920191909120905561089a806100826000396000f3fe6080604052600436106100385760003560e01c80635fdd0677146100445780639532ef0114610059578063f01a326c1461006c5761003f565b3661003f57005b600080fd5b610057610052366004610758565b61007f565b005b610057610067366004610747565b6103d6565b61005761007a366004610730565b610492565b60405161009390600290839060200161082c565b6040516020818303038152906040528051906020012060001c600054146100b957600080fd5b60008080556040805160a081018252828152602081018390529081018290526060810182905260808101919091526100f76104006060840135610840565b431061010257600080fd5b600061011460a0840160808501610716565b600181111561013357634e487b7160e01b600052602160045260246000fd5b1415610142576000815261018d565b600161015460a0840160808501610716565b600181111561017357634e487b7160e01b600052602160045260246000fd5b141561018d5760c082013560208083019190915282013581525b8051341461019a57600080fd5b60006101ac60a0840160808501610716565b60018111156101cb57634e487b7160e01b600052602160045260246000fd5b14156101f3576101de60208301836106db565b6001600160a01b03163314604082015261023c565b600161020560a0840160808501610716565b600181111561022457634e487b7160e01b600052602160045260246000fd5b141561023c5760c08201356060820152600160408201525b806040015161024a57600080fd5b600061025c60a0840160808501610716565b600181111561027b57634e487b7160e01b600052602160045260246000fd5b1415610319577f60c3a7348c79368de6e3659bb9bf21dac5b309526a0fbec11dfeb7db3cb97697826040516102b091906107cc565b60405180910390a16102c0610668565b6102cd60208401846106db565b81516001600160a01b03909116905280516020808501359101526102f760608401604085016106fc565b60208083018051921515909252905143910152610313816105b0565b506103d2565b600161032b60a0840160808501610716565b600181111561034a57634e487b7160e01b600052602160045260246000fd5b14156103d25760c0820135608082015261036760208301836106db565b6040516001600160a01b039190911690602084013580156108fc02916000818181858888f193505050501580156103a2573d6000803e3d6000fd5b507f60c3a7348c79368de6e3659bb9bf21dac5b309526a0fbec11dfeb7db3cb97697826040516102b091906107cc565b5050565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461041357600080fd5b60008055341561042257600080fd5b6040805182358152602080840135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a1610467610668565b805133905280516020808401359181019190915280820180516000905251439101526103d2816105b0565b6040516104a690600290839060200161082c565b6040516020818303038152906040528051906020012060001c600054146104cc57600080fd5b600080556104e06104006060830135610840565b43101580156104ed575060015b6104f657600080fd5b341561050157600080fd5b3361050f60208301836106db565b6001600160a01b03161461052257600080fd5b7f056f3bdc744f406723f7387e7270a1b63bd96859b93e78ad3d5472905e6549888160405161055191906107a5565b60405180910390a1610561610668565b61056e60208301836106db565b81516001600160a01b039091169052805160208084013591015261059860608301604084016106fc565b602080830180519215159092529051439101526103d2815b6020810151516105c15760016105c4565b60005b1561065e5760408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b0390811689528a5186015185528a8601805151151585525186015182528951600281880152985116888a015292519087015251151593850193909352915160a0808501919091528451808503909101815260c090930190935281519101209055610665565b6000805533ff5b50565b604080516080810182526000818301818152606083018290528252825180840190935280835260208381019190915290919082015290565b80356001600160a01b03811681146106b757600080fd5b919050565b803580151581146106b757600080fd5b8035600281106106b757600080fd5b6000602082840312156106ec578081fd5b6106f5826106a0565b9392505050565b60006020828403121561070d578081fd5b6106f5826106bc565b600060208284031215610727578081fd5b6106f5826106cc565b600060a08284031215610741578081fd5b50919050565b600060408284031215610741578081fd5b600060e08284031215610741578081fd5b6001600160a01b0361077a826106a0565b16825260208101356020830152610793604082016106bc565b15156040830152606090810135910152565b60a081016107b38284610769565b6107bf608084016106bc565b1515608083015292915050565b60e081016107da8284610769565b6107e6608084016106cc565b6002811061080457634e487b7160e01b600052602160045260246000fd5b608083015261081560a084016106bc565b151560a083015260c083013560c083015292915050565b82815260a081016106f56020830184610769565b6000821982111561085f57634e487b7160e01b81526011600452602481fd5b50019056fea26469706673582212201ae2477f94ce29859d964079ea252421811cbb01f533cc85bf117150ff56f61764736f6c63430008020033`,
  deployMode: `DM_constructor`
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

