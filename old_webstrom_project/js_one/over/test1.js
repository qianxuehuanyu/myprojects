/**
 * Created by Administrator on 2016/9/19 0019.
 */

//考试题
//笔试题（30/5）
//1.计算"15"+5的结果
//2.JavaScript的三个组成部分
//3.JavaScript中有哪些流程控制语句和循环语句，各有什么特征
//4.什么是数组？数组的特点，数组通过什么来取值
//5.逻辑运算符有哪些？赋值运算符有哪些？ 关系运算符 有哪些？ ===与== 、!==与!= 的区别
//6.怎样开启 强制使用var的模式
//
//编程题（80/10）<要求每一道题都是一个函数>
//1.打印99乘法表
//2.给数组从大到小排序 [2,1,45,99,7,65];
//3.[[[234,3,2],[5,44,33,23,65]],[[44,55,33,11,56],[4,77,43,98],[5,3,77,98,68]]]; 找出数组中所有33所
//在位置
//4.写一个函数 输入任意数组 查找出 数组中的最小值
//5.删除输入的所有w
//6.[66,80,35,99,54]求数组的平均分数
//7.帮公交车写一个函数  出入用户坐车的公里数，函数帮计算出对应的车费。（0-3公里每公里5元 4-6公里每公
//里3元 6公里以上每公里2元）
//8.给数组从小到大排序 [5,7,4,9,1,6]


//笔试题=======================================
/*
*1."155"
*2.ECMAScript,DOM,BOM,
*3.流程控制：if else/ switch ；循环语句：while/do while/ for/ for in;
* 流程控制语句的特征是：通过条件判断的结果true或者false来运行不同的程序；
* 循环语句的特点是：有相应的循环条件，在满足循环条件时不断重复执行相应的代码，直到条件不满足才跳出循环；
*4.数组是一连串数据的集合；数组的特点是所有数据都依次占据数组中的一个位置，其中的数据的数据类型可以不同；数组通过下标来取值，从0开始，一直到数组的长度-1；
*5.逻辑：&&,||,!;   赋值：=,+=,-=,*=,/=;   关系：==,===,>=,<=,!=,!==,<,>;
* ===与==，区别在于==不要求数据的数据类型相同，如果数据的Unicode编码相同就可以相同，而===需要两边的数据类型也相同;
* ！==和！=,区别在于！=表示两个数据的值不相同，不对数据的类型进行要求，即如果数据类型不同不会对判断有影响，只根据两者的Unicode编码取值进行判断，而！==则是如果两边数据类型不相同也会被判断为true
*6.使用use strict;
*
* */
"use strict";
//编程===============================
//1
function one(){
    var one_on="";
    var one_in=0;
    for(var i=1;i<10;i++){
        for(var j=1;j<=i;j++){
            one_in=i*j;
            one_on=one_on+j+"*"+i+"="+one_in+";";
        }
        console.log(one_on);
        var one_on="";
    }
}
one();
//2
var two_list=[2,1,45,99,7,65];
function two(){
    two_list.sort(function (a,b) {
        return b-a;
    })
    console.log("从大到小排序");
    console.log(two_list);
}
two();
//3
var three_list=[[[234,3,2],[5,44,33,23,65]],[[44,55,33,11,56],[4,77,43,98],[5,3,77,98,68]]];
function three(){
    var three_on="33的位置有：";
    for(var key1 in three_list){
        for(var key2 in three_list[key1]){
            for(var key3 in three_list[key1][key2]){
                if(three_list[key1][key2][key3]==33){
                    three_on=three_on+"three_list["+key1+"]["+key2+"]["+key3+"];";
                }
            }
        }
    }
    console.log(three_on);
}
three();
//4
function four(){
    var four_char=prompt("请输入一个数组，全部为数值，数据之间用英文逗号“,”隔开，例：111,222,333,66");
    var four_list=four_char.split(",");
    var four_min=parseInt(four_list[0]);
    for(var key in four_list){
        four_list[key]=parseInt(four_list[key]);
        if(four_min>four_list[key]){
            four_min=four_list[key];
        }
    }
    console.log(four_char+"数组中的最小值为："+four_min);
}
four();
//5
function five(){
    var five_char=prompt("输入要去掉“w”的字符串");
    var five_list=five_char.split("");
    for(var key in five_list){
        if(five_list[key]=="w"){
            five_list[key]="";
            key--;
        }
    }
    five_char=five_list.join("");
    console.log(five_char+"去掉后的字符串为："+five_char);
}
five();
//6
var six_list=[66,80,35,99,54];
function six(){
    var six_sum=0;
    for(var key in six_list){
        six_sum+=six_list[key];
    }
    console.log(six_list+"平均分数为："+six_sum/5);
}
six();
//7
var server_num=parseFloat(prompt("输入用户坐车的公里数"));
function server(server_km){
    var money=0;
    if(server_km>0&&server_km<=3){
        money=parseInt(server_km)*5;
    }else if(server_km>3&&server_km<=6){
        money=3*5+parseInt(server_km-3)*3;
    }else if(server_km>6){
        money=3*5+3*3+parseInt(server_km-6)*2;
    }else if(server_km<=0){
        console.log("公里数输入错误，公里数需要大于0！等于0时用户未乘车！");
    }
    console.log("公里数为"+server_km+";车费为："+money);
}
server(server_num);
//8
var eight_list=[5,7,4,9,1,6];
function eight(){
    eight_list.sort(function (a,b) {
        return a-b;
    });
    console.log("从小到大排序");
    console.log(eight_list);
}
eight();























