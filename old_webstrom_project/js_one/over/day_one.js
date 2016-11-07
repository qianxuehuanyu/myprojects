/**
 * Created by Administrator on 2016/9/12 0012.
 */





//var messsage = window.prompt();
//console.log(messsage);
//
//console.log(messsage);

//题目1
console.log("题目1");
var one="35"+59+80+"87.6";
console.log(one);
//2
//var two=0;
//for(var i=0;i<=1000;i++){two=two+i;};
//console.log(two);
//var three=1;
//for(var i=1;i<=1000;i++){two=two*i;};
//console.log(three);
//3
var three1=window.prompt("请输入第一个整数");
var three2=window.prompt("请输入第二个整数");
console.log("题目3");
var num=parseInt(three1)+parseInt(three2);
    console.log(three1+"+"+three2+"="+num);
num=three1-three2;
    console.log(three1+"-"+three2+"="+num);
num=three1*three2;
    console.log(three1+"*"+three2+"="+num);
num=three1/three2;
    console.log(three1+"/"+three2+"="+num);
num=three1%three2;
    console.log(three1+"%"+three2+"="+num);

//4
var four=window.prompt("测试ing!请向AI发送任意信息");
console.log("题目4_1");
var four_on=four==="你好"? "很高兴见到你":"我的汉语还不是很好";
console.log(four+"|"+four_on);
four=window.prompt("试试“你好”？");
console.log("题目4_2");
if(four=="你好"){
    four_on="很高兴见到你";
} else{
    four_on="我的汉语还不是很好";
}
console.log(four+"|"+four_on);
//7

var sever="";
var money=0;
var rich=0;
console.log("题目7");
for(var i=1;i<=10;i++){
    server=window.prompt("您好，请点菜" +"您是第 "+i+" 位客人"+
        "选择菜品:红烧鸡块（输入1）、小炒肉（输入2））、土豆丝（输入3）");
    switch (server){
        case "1":{
            money+=25;
            rich+=(25-10);
        }break;
        case "2":{
            money+=20;
            rich+=(20-8);
        }break;
        case "3":{
            money+=15;
            rich+=(15-4);
        }break;
        default:{
            console.log("第"+i+"位客人点菜错误，请重新点菜！");
            i--;
        }
    }
}
console.log("今天的流水为"+money);

//8
console.log("题目8");
console.log("今天的利润为"+rich);





