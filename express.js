const url = require("url");
const fs = require("fs");
function express(req,res){
    //获取用户响应的信息同时转换URL对象
    var urlObj = url.parse(req.url);
    //读取用户响应路劲
    var filePath = "./user"+urlObj.pathname;
    var content = "no";
    //判断读文件existsSync
    if(fs.existsSync(filePath)){
        content = fs.readFileSync(filePath);
    }
    
    //给服务端发出响应同时将二进制转换成toString
    res.end(content.toString());
    
}
//导出 
module.exports = express;