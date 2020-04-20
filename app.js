'use strict';
const number = process.argv[2] || 0;
process.argv 
/**
 * process.argv；Node.jsがデフォルトで提供する、コマンドラインの引数が入った配列
 * 添え字0番にはnodeコマンドのファイルのパスが入る
 * 添え字1番には実行しているプログラムのファイルのパスが入る
 * コマンドの後ろに書かれた最初の引数がprocess.argv[2]となる
 */
let sum = 0;
for (let i = 1; i <= number; i++){
    sum = sum + i;
}

console.log(sum)