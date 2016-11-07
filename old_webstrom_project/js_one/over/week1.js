/**
 * Created by Administrator on 2016/9/18 0018.
 */
//1"
//var one=prompt("输入要查找的字符串：");
//var one_on=one.indexOf("t");
//if(one_on!=null||one_on.length!=0){
//    console.log("字符串中有t");
//}else {
//    console.log("字符串中没有t");
//}
////2
//var two=prompt("输入一个字符串");
//var two_on=two.replace([\\pP‘’“”]," ");
//console.log(two);
////3
//var three="我是认真学习的好学生";
//var three_on=three.substring(2,6);
//console.log(three_on);
////4
//var four="小明,小李,,小宏,小度,小孟";
//var four_on=four.split(",");
//console.log(four_on);
//////5
//var five=prompt("输入一段有标点的字符串");
//var five_one=five.split(",");
//var five_on="";
//for(var i=0;i<five_one.length;i++){
//five_on=five_on+five_one[i];
//    if(five_one.length%2==0&&i==(five_one.length-2)){
//        five_on+=",";
//    }else if(i<(five_one.length-1)) {
//        five_on+=" ";
//    }
//}
//console.log(five_on);
//6
//var six=prompt("请输入要反转的字符串");
//var six_on="";
//var six_num=six.length;
//for(var i=0;i<six_num;i++){
//    six_on=six_on+six.charAt(six_num-i);
//}
//console.log("反转后的为"+six_on);
////7
//var server=prompt("请输入含q的字符串");
//var server_on=server.replace("q","");
//console.log("删除输入的字符串中的q后为"+server_on);
//8
//var eight=[66,80,35,99,54];
//var eight_on=0;
//for(var i=0;i<eight.length;i++){
//    eight_on+=eight[i];
//}
//console.log(eight_on/5);
////9
//var nine=[];
//var nine_max=0;
//for(var i=1;i<=10;i++){
//    nine[i-1]=parentInt(prompt("输入第"+i+"个同学的成绩"));
//    if(nine[i-1]>nine_max){nine_max=nine[i-1];}
//}
//console.log("最大值为"+nine_max);
////10
//var ten=[66,80,35,99,54];
//var ten_min=ten[0];
//for(var i=0;i<5;i++){
//    if(ten[i]<ten_min){ten_min=ten[i];}
//}
//console.log("最大值为"+nine_min);
////11
//var elever=[66,80,35,99,54];
//var elever_on=elever.indexOf("35");
//console.log(elever_on);

var elever=[66,80,30,9,5];
elever.sort();
console.log(elever);
var ele=["aaasdfs","baasdfab","daefasd","c","fff","edsafeaf","hh","oo","zz","dbdb","aaab"];
ele.sort();
console.log(ele);
var on=[12,2,13].sort(function(a,b){
    a = String(a);
    b = String(b);
    if (a < b)
    {
        return -1;
    }else if(a > b)
    {
        return 1;
    }else{
        return 0;
    }
}
);
console.log(on);
// => [12, 13, 2]

var one=[12,2,13].sort(function(a,b){
        if (a < b)
        {
            return -1;
        }else if(a > b)
        {
            return 1;
        }else{
            return 0;
        }
    }
);
console.log(one);
// => [2, 12, 13]

var nm=[12,2,13].sort(function(a,b){
    return a - b;
});
console.log(nm);