const formatter = function (){

    const str1 = `      FunctionUp      `;
    const str2 = "functionup"
    const str3 = "FUNCTIONUP"
    console.log('FunctionUp without space '+ str1.trim())
    console.log('functionup  to  upper  case ' + str2.toUpperCase())
    console.log('FUNCTIONUP  to  lower  case ' + str3.toLowerCase())
}
module.exports.form = formatter;
