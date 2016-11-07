/**
 * Created by Administrator on 2016/9/13 0013.
 */
//var jijie=prompt("输入一个季节，单个字：春夏秋冬");
//var i=1;
//while(i>0){
//switch (jijie){
//    case "春":{
//        console.log("春天万物复苏");
//        i--;
//    }
//        break;
//    case "夏":{
//        console.log("夏天万物生长");
//        i--;
//    }
//        break;
//    case "秋":{
//        console.log("秋天万物寂寥");
//        i--;
//    }
//        break;
//    case "冬":{
//        console.log("冬天万物凋零");
//        i--;
//    }
//        break;
//    default:{
//        jijie=prompt("输入错入重新输入一个季节，单个字：春夏秋冬");
//    }
//}}
////
//var on="";
//for(var i=1;i<=10000;i++){
//    if(i%2==0){
//        on=on+" , "+i;
//    }
//}
//console.log(on);
////
//var sum=0;
//for(var i=1;i<=10000;i++){
//    if(i%2==0){
//        sum+=i;
//    }
//    if(sum>10000){
//        console.log(sum+","+i+",");
//        console.log("找到最完美的数字");
//        break;
//    }
//}
////
//var right=0;
//for(var i=1;i<=100;i++){
//    if(i==33||i==44||i==55){
//        console.log(i);
//        continue;
//    }
//    right+=i;
//}
//console.log(right);

//5
//var server1=0;
//var server2=1;
//for(var i=1;i<=10000;i++){
//    server1+=i;
//    server2*=i;
//}
//console.log(server1);
//console.log(server2);
//
//
//for(var i=1;i<=100;i++){
//    if(i==22){
//        console.log(i);
//    }else if(i==55){
//        console.log(i);
//    }else if(i==70){
//        console.log(i);
//    }
//}
//
//
//
//var one="";
//for(var i=1;i<=5;i++){
//    for(var n=1;n<=i;n++){
//        one=one+i;
//    }
//    console.log(one);
//    one="";
//}
//
//
//
//var eight1=0;
//var eight2="";
//for(var i=1;i<=10;i++){
//    for(var n=1;n<=i;n++){
//        eight1=i*n;
//        eight2=eight2+n+"*"+i+"="+eight1+";";
//    }
//    console.log(eight2);
//    eight2="";
//}

//9
//var money=0;
//var onbdy=0
//for(var i=1;i<=10;i++){
//    var people=parseInt(prompt("第"+i+"位顾客,您点几道菜？(1-5道)"));
//    if(people<=5&&people>=1){
//        for(var n=1;n<=people;n++){
//            onbdy=parseInt(prompt("第"+i+"位顾客,您的第"+n+            "道菜是？红烧鸡块（输入1）、小炒肉（输入2））、土豆丝（输入3）、红烧肉（输入4）炒豆角（）输入5"));
//            if(onbdy==1){
//                money+=25;
//            }else if(onbdy==2){
//                money+=20;
//            }else if(onbdy==3){
//                money+=15;
//            }else if(onbdy==4){
//                money+=25;
//            }else if(onbdy==5){
//                money+=17;
//            }else if(onbdy==111){
//                break;
//            } else{
//                n--;
//                console.log("点菜错误重新点菜！");
//            }
//    }
//    }else if(onbdy==111){
//        break;
//    }else {
//        i--;
//        console.log("菜的数量应该在1-5，输入错误请重新输入");
//    }
//}
//console.log(money);
//
//
//var money=0;
//var rich=0;
//var onbdy=0
//for(var day=1;day<=30;day++) {
//    for (var i = 1; i <= 10; i++) {
//        var people = parseInt(prompt("第" + i + "位顾客,您点几道菜？(1-5道)"));
//        if (people <= 5 && people >= 1) {
//            for (var n = 1; n <= people; n++) {
//                onbdy = parseInt(prompt("第" + i + "位顾客,您的第" + n + "道菜是？红烧鸡块（输入1）、小炒肉（输入2））、土豆丝（输入3）红烧肉（输入4）炒豆角（输入5)"+")"));
//                if (onbdy == 1) {
//                    money += 25;
//                    rich+=15;
//                } else if (onbdy == 2) {
//                    money += 20;
//                    rich+=12;
//                } else if (onbdy == 3) {
//                    money += 15;
//                    rich+=11;
//                } else if(onbdy==4){
//                    money+=10;
//                }else if(onbdy==5){
//                    money+=7;
//                }else if(onbdy==111) {
//                    break;
//                } else{
//                    n--;
//                    console.log("点菜错误重新点菜！");
//                }
//            }
//        }else if(onbdy==111) {
//            break;
//        } else {
//            i--;
//            console.log("菜的数量应该在1-5，输入错误请重新输入");
//        }
//    }
//}
//rich=rich-80000/365*30;
//console.log(rich);
////
var hero1=100;
var hero2=200;
var hero3=300;
var beast1=100;
var beast2=200;
var beast3=300;
var ch=prompt("选择你的英雄1,2,3");
var onhero=0;
var onbeast=0;
switch (ch){
    case "1":{
        onhero=100;
    }break;
    case "2":{
        onhero=200;
    }break;
    case "3":{
        onhero=300;
    }break;
    default:{
        console.log("英雄选择错误！被选择默认英雄！");
        onhero=100;
    }
}
console.log("英雄选择完成！");
var cb=prompt("选择你的对手-怪物们：1,2,3");
switch (cb){
    case "1":{
        onbeast=100;
    }break;
    case "2":{
        onbeast=200;
    }break;
    case "3":{
        onbeast=300;
    }break;
    default:{
        console.log("选择的对手错误！被匹配默认对手！");
        onbeast=100;
    }
}
console.log("对手：怪物们准备就绪！");
var timeon=1;
console.log("回合开始！");
while(timeon!=0) {
    var htouch = prompt("你的回合！选择释放的技能！1或2或3");
    switch (htouch) {
        case "1":
        {
            onbeast = onbeast - 100;
            console.log("对怪物造成了100点伤害，怪物剩余血量为" + onbeast);
        }
            break;
        case "2":
        {
            onbeast = onbeast - 200;
            console.log("对怪物造成了200点伤害，怪物剩余血量为" + onbeast);
        }
            break;
        case "3":
        {
            onbeast = onbeast - 300;
            console.log("对怪物造成了300点伤害，怪物剩余血量为" + onbeast);
        }
            break;
        default:
        {
            console.log("选择的技能错误！你的回合被结束了！");
        }
    }
    if (onbeast <= 0) {
        console.log("怪物被杀死了！你获得了胜利！你的英雄等级+1！您获得了称号：战斗者！……");timeon=0;
    }else{
        console.log("怪物的回合！");
    switch (htouch) {
        case "1":
        {
            onhero = onhero - 50;
            console.log("怪物对你造成了50点伤害，你的剩余血量为" + onhero);
        }
            break;
        case "2":
        {
            onhero = onhero - 40;
            console.log("怪物对你造成了40点伤害，你的剩余血量为" + onhero);
        }
            break;
        case "3":
        {
            onhero = onhero - 30;
            console.log("怪物对你造成了30点伤害，你的剩余血量为" + onhero);
        }
            break;
        default:
        {
            onhero = onhero - 30;
            console.log("怪物对你造成了30点伤害，你的剩余血量为" + onhero);
        }
    }}
    console.log("本回合结束！");
    if (onhero <= 0) {
        console.log("菜鸟，你怎么可以被怪兽干掉！");
        timeon=0;
    }
    console.log("新回合开始！");
}
















