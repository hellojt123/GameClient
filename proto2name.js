const fs = require("fs");
/*
 * @Author: Jiangtao
 * @Date: 2019-12-10 15:00:25
 * @LastEditors: Jiangtao
 * @LastEditTime: 2019-12-11 14:09:40
 */
let fd = fs.openSync(__dirname+'/assets/script/Const/protoName.ts', 'w');
var protos  = require(__dirname+"/assets/script/Net/proto/proto")
var str = "export enum protoName {\n";
for (var proto in protos){
    str+=proto+"='"+proto+"',\n";
}
str+="}";
fs.writeFileSync(fd,str);
fs.closeSync(fd);