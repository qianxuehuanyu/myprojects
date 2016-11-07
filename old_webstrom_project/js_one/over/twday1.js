/**
 * Created by Administrator on 2016/9/18 0018.
 */
/*1.✭✭✭✭给数组中的 数字 进行排序 从小到大 [44,2,100,76,52,50]
 2.✭✭✭输入三个数字  查找三个数字中的最大值  （使用函数实现）
 3.✭随机得到输入数组的  某个值  使用函数实现
 4.✭写一个英雄的数组 {name:"xx",blood:XX,ATT:XX,skills:XXX}
 5.✭写一个怪物的数组 {name:"xx",blood:XX,ATT:XX,skills:XXX}
 6.✭✭写一个选择 英雄 和 选择怪物的方法
 7.✭✭写一个选择 技能 的方法
 8.✭✭✭ 写一个互相攻击的方法
 9.✭开始游戏的方法
 10.[66,80,35,99,54]求数组的平均分数
 11.输入10个同学的分数 存入数组 并筛选出最高分
 12.[66,80,35,99,54]找出数组中的最小值
 13.[66,80,35,99,54] 查找数组中35的位置
 */
//1给数组中的 数字 进行排序 从小到大 [44,2,100,76,52,50]
var one=[44,2,100,76,52,50];
for(var i=0;i<one.length;i++){
 for(var j=i+1;j<one.length;j++){
     var change=0;
     if(one[i]>one[j]){
         change=one[i];
         one[i]=one[j];
         one[j]=change;
     }
 }
}
console.log(one);
//
//
////2输入三个数字  查找三个数字中的最大值  （使用函数实现）
//function two(a,b,c){
//    var two_max=0;
//    if(a>=b){
//        if(a>=c){
//            two_max=a;
//        }else{
//            two_max=c;
//        }
//    }else{
//        if(b>=c){
//            two_max=b;
//        }else{
//            two_max=c;
//        }
//    }
//    return two_max;
//}
//console.log(two(5,55,42));
//
//
////3随机得到输入数组的  某个值  使用函数实现
//function three(list){
//    var three_on=parseInt(Math.random()*(1-list.length)+list.length-1);
//    console.log(list[three_on]);
//}
//three([1,2,3,4,5,6,7]);


//===========================================
/*
//
//4写一个英雄的数组 {name:"xx",blood:XX,ATT:XX,skills:XXX}
var hreo_one={name:"hone",blood:100,ATT:20,skills:["1","2","3"]};
var hreo_two={name:"htwo",blood:200,ATT:60,skills:["2","3","4"]};
var hreo_three={name:"hthree",blood:300,ATT:100,skills:["3","4","5"]};
var hreos=[hreo_one,hreo_two,hreo_three];

//5写一个怪物的数组 {name:"xx",blood:XX,ATT:XX,skills:XXX}
var monster_one={name:"mone",blood:100,ATT:20};
var monster_two={name:"mtwo",blood:200,ATT:40};
var monster_three={name:"mthree",blood:300,ATT:60};
var monsters=[monster_one,monster_two,monster_three];
//6写一个选择 英雄 和 选择怪物的方法
var on_hreo;
var on_moster;
function six(){
    var cho_h=prompt("选择英雄！"+hreos[0].name+";"+hreos[1].name+";"+hreos[2].name+";输入1,2,3选择！");
    switch (cho_h) {
        case "1":
        {
            on_hreo = hreos[0];
        }
            break;
        case "2":
        {
            on_hreo = hreos[1];
        }
            break;
        case "3":
        {
            on_hreo = hreos[2];
        }
            break;
        default:{
            on_hreo = hreos[0];
            console.log("选择错误，被默认选择！")
        }
    }

    var cho_m=prompt("选择对手！"+monsters[0].name+";"+monsters[1].name+";"+monsters[2].name+";输入1,2,3选择！");
        switch (cho_m){
            case "1":{
                on_moster=monsters[0];
            }break;
            case "2":{
                on_moster=monsters[1];
            }break;
            case "3":{
                on_moster=monsters[2];
            }break;
            default:{
                on_moster=monsters[0];
                console.log("选择错误，被默认选择！")
            }
        }
    console.log("您选择的英雄为"+on_hreo.name+";blood为"+on_hreo.blood+";普攻为"+on_hreo.ATT+";技能为"+on_hreo.skills.join("和"));
    console.log("您选择的怪物对手为"+on_moster.name+";blood为"+on_moster.blood+";普攻为"+on_moster.ATT+";");
}

//7 写一个选择 技能 的方法
function server(){
    console.log("新回合开始！");
    var server_on=prompt("请选择本回合英雄技能");
    var hkill=0;
    switch(server_on){
        case "1":{
            hkill=on_hreo.ATT+30;
        }break;
        case "2":{
            hkill=on_hreo.ATT+50;
        }break;
        case "3":{
            hkill=on_hreo.ATT+70;
        }break;
        case "4":{
            hkill=on_hreo.ATT+90;
        }break;
        default:{
            hkill=on_hreo.ATT;
            console.log("技能选择错误，进行普攻");
        }
    }
    return hkill;
}
//8 写一个互相攻击的方法
function eight(eight_on){
    on_moster.blood=on_moster.blood-eight_on;
    var inomb=on_moster.blood<0?0:on_moster.blood;
    console.log("怪物受到了攻击！受到伤害"+eight_on+"点；剩余血量为"+inomb);
    on_hreo.blood=on_hreo.blood-on_moster.ATT;
    var inohb=on_hreo.blood<=0?0:on_hreo.blood;
    console.log("你受到了攻击！受到的伤害为"+on_moster.ATT+"点；剩余血量为"+inohb);
}

//9 开始游戏的方法
function nine(){
    console.log("游戏开始！");
    six();
    console.log("******回合开始！");
    while(on_hreo.blood>0&&on_moster.blood>0){
        var mlostb=server();
        eight(mlostb);
    }
    if(on_hreo.blood==0){
        console.log("你被怪物杀死了！");
    }
    if(on_moster.blood==0){
        console.log("怪物被杀死了！你获得了胜利！");
    }
}
nine();

//*/

////10
//var ten=[66,80,35,99,54];
//var ten_on=0;
//for(var i=0;i<ten.length;i++){
//    ten_on+=ten[i];
//}
//console.log(ten_on/5);
////11
//var oneone=[];
//var oneone_max=0;
//for(var i=1;i<=10;i++){
//    oneone[i-1]=parseInt(prompt("输入第"+i+"个同学的成绩"));
//    if(nine[i-1]>oneone_max){oneone_max=oneone[i-1];}
//}
//console.log("最大值为"+oneone_max);
////12
//var tentwo=[66,80,3 5,99,54];
//var tentwo_min=tentwo[0];
//for(var i=0;i<5;i++){
//    if(ten[i]<tentwo_min){tentwo_min=tentwo[i];}
//}
//console.log("最小值为"+tentwo_min);
////13
//var onethree=[66,80,35,99,54];
//var onethree_on=onethree.indexOf(35);
//console.log(onethree_on);
//
//
//


