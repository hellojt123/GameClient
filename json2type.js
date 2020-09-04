/*
 * @Author: Jiangtao
 * @Date: 2019-11-20 10:48:03
 * @LastEditors: Jiangtao
 * @LastEditTime: 2019-11-20 13:11:40
 */
var fs = require('fs');
var typeofJsonc = require('typeof-jsonc');
const targetPath = __dirname + '/assets/resources/config/game/';
const writePath =  __dirname + '/assets/script/d.ts/';
const constPath =  __dirname + '/assets/script/Const/';
const files = fs.readdirSync(targetPath);
const names =[];
files.forEach(function (item, index) {
    if(!item.endsWith('.meta')){
        let name = item.replace(".json","");
        let text = fs.readFileSync(targetPath + item,{
            encoding: 'utf-8',
        });
        let typescript = typeofJsonc.typeofJsonc(text,name+"JSON", {
            prefix: 'I',
            rootFlags: 0,
            disallowComments: true,
            addExport: false,
            singleLineJsDocComments: true,
        })
        wf(writePath,name+".d.ts",typescript);    
        names.push(name);
    }    
});

// const enum DLogin {
//     reqLogin = "reqLogin",
//     resLogin = "resLogin",  
// }
let strStart = "export enum config {\n";
let str="";
names.forEach(function (name, index) {
    str+="  "+name+" = '"+name+"',\n";
})
let strEnd = "}"

wf(constPath,"config.ts",strStart+str+strEnd);

function wf(path,name,data) {
    fs.writeFile(path+name, data, { 'flag': 'w' }, function(err) {
        if (err) {
            throw err;
        }       
    });
};