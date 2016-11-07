/**
 * Created by Administrator on 2016/9/20 0020.
 */
// 0.创建3个对象{name:xx,age:xx,score:[3个分数]} 通过函数 找到有分数不及格的同学
//var one_one={name:o_o,age:19,score:[66,78,89]};
//var one_two={name:o_t,age:18,score:[60,70,82]};
//var one_three={name:o_h,age:19,score:[56,79,80]};
//function one(){
//    var one_on=[one_one,one_two,one_three];
//    for(var key in one_on){
//        for(var num in one_on[key].score){
//            if(one_on[key].score[num]<60){
//                console.log(one_on[key].name+"同学有分数不及格。");
//            }
//        }
//    }
//}
//one();
// 1.将输入的字符串通过,号 转换成数组 依次输出每一个元素
//var two_on=prompt("请输入一个数组，全部为数值，数据之间用英文逗号“,”隔开，例：111,222,333,66");
//function two(){
//    console.log(two);
//    var two_list=two_on.split(",");
//    for(var key in two_list){
//        console.log(two_list[key]);
//    }
//}
//two();
// 2.文字接龙 第一次输入一个成语  第二次输入成语的第一个字 必须是后一个的第一个字
//function three(){
//    var i= 1;
//    var j=0;
//    var three_on=prompt("输入第一个成语，接龙游戏开始，在后面的过程中想要结束游戏请输入0000。");
//    var three_list=three_on.split("");
//    while(j==0){
//        console.log(three_on);i++;var front_end=three_list[3];
//        var front=three_list;
//        three_on=prompt("输入第"+i+"个成语");
//        three_list=three_on.split("");
//        var behind_start=three_list[0];
//        if(three_list[0]==0&&three_list[1]==0&&three_list[2]==0&&three_list[3]==0){
//            j=1;
//        }
//        if(front_end!=behind_start){
//            console.log("接龙错误请重新输入,"+front.join("")+"接下去");
//            three_list=front;i--;
//        }
//    }
//}
//three();
// 3.石头剪子布的游戏 逻辑 石头赢剪子  剪子赢布 布赢石头 用户对电脑（电脑是随机出的）
//function four(){
//    var four_on=prompt("剪刀：1  、石头：2  、 布：3 ；输入你的选择（数字） ");
//    var four_in=parseInt(Math.random()*3)+1;
//    if(four_on==four_in){
//        console.log(four_on+":"+four_in+"  平局")
//    }else if((four_on-four_in)==1||(four_on-four_in)==-2){
//        console.log(four_on+":"+four_in+"  你获胜")
//    }else{
//        console.log(four_on+":"+four_in+"  你输了")
//    }
//}
//four();
// 4.[55,2,55,2,78,99,55,63] 从小到大排序 删除数组中相同的元素
//function five(){
//    var five_on=[];
//    var five_in=[];
//    var five_list=[55,2,55,2,78,99,55,63];
//    for(var i=0;i<five_list.length;i++){
//        for(var j=i+1;j<five_list.length;j++){
//            if(five_list[i]==five_list[j]){
//                five_in.push(j);
//                //第i个和i后面的所有元素进行对比，把后面元素中和i相等的下标赋值给数组five_in
//            }
//        }
//    }
//    for(var j=0;j<five_list.length;j++){
//        var nocope=1;
//        for(var i=0;i<five_in.length;i++){
//            //判断five_list中是否有和[j]元素值相等的元素，只要有一个就反馈nocope为0，
//            //一个都没有反馈为1，nocope为1时在外层循环中为空数组five_on加入[j]元素
//            if(five_in[i]!=j){
//                nocope*=1;
//            }else{
//                nocope*=0;
//            }
//        }
//        if(nocope==1){
//        five_on.push(five_list[j])}
//    }
//    //排序
//    five_on.sort(function (a,b) {
//        return a-b;
//    });
//    console.log(five_on);
//}
//five();
//function five_try(){
//    var five_list=[55,2,55,2,78,99,55,63];
//    five_list.sort(function (a,b) {
//        return a-b;
//    });
//
//    for(var i=0;i<five_list.length;i++){
//        if((five_list[i]-five_list[i+1])==0){
//            five_list.splice(i,1);
//            i--;
//        }
//    }
//    console.log(five_list);}
//five_try();
//5.一瓶啤酒3块钱 5个瓶子换一瓶啤酒 写一个函数 输入啤酒数量和酒瓶的数量 可以得到需要支付的总额和啤酒瓶 以及余下的酒瓶
//function six(){
//    var pipe_num=parseInt(prompt("输入啤酒数量"));
//    var pipe_bon=parseInt(prompt("输入啤瓶数量"));
//    var num_money=parseInt(pipe_bon/5)-pipe_num;
//    var money=(num_money>0?0:Math.abs(num_money))*3;
//    var lost=pipe_bon-(num_money>0?pipe_num:parseInt(pipe_bon/5))*5;
//    var pipeb_in=pipe_bon-lost;
//console.log("需要支付的金额为："+money+"和需要的啤酒瓶为："+pipeb_in+";剩余酒瓶："+lost);
//}
//six();
/*
function six_try(){
    var pipe_num=parseInt(prompt("输入啤酒数量"));
    var pipe_bon=parseInt(prompt("输入啤瓶数量"));
    var money=0;
    var lost=0;
    var num_money=0;
    var pipe_in=0;
    if((pipe_bon+pipe_num)%5==1){
        num_money=(pipe_bon+pipe_num-1)/5-pipe_num;
        money=(num_money>0?0:Math.abs(num_money))*3;
        lost=1;
    }

}
*/


// 6.判断一个字符串中出现次数最多的字符，统计这个次数
//function server(){
//    var server_char=prompt("输入一段字符");
//    var server_list=server_char.split("");
//    var again=0;
//    var max={char:"",num:0};
//    for(var i=0;i<server_list.length;i++){
//        for(var j=i+1;j<server_list.length;j++){
//            if(server_list[i]==server_list[j]){
//                again++;
//            }
//        }
//        if(again>max.num){
//            max.char=server_list[i];
//            max.num=again;
//        }
//        again=0;
//    }
//    console.log(max.char+"出现次数最多，为："+max.num+"次");
//}
//server();
// 7.清空数组 var arr=[1,2,3,4,5,6,7];
function eight(){
    var arr=[1,2,3,4,5,6,7];
    var i=0;
    while(i<arr.length) {
        arr.pop();
        console.log(arr);
    }
}
eight();
// 8.篮球从5米高的地方掉下来，每次弹起的高度是原来的30%，经过几次弹起，篮球的高度是0.1米。
function nine(){
    var i=0;
    var height=5;
    while(height!=0.1){
        height=parseInt(parseFloat(height*0.3)*10)/10;
        i++;
    }
    console.log("经过"+i+"次弹起")
}
nine();
// 9.在函数中随意传入一个数组，把数组其他元素删除，只保留最后一个
//function nine(){
//    var arr=prompt("输入数组或者用逗号隔开");
//    var list=arr.split("");
//    var i=0;
//    while(i<arr.length-1){
//        list.shift();
//    }
//}
//nine();