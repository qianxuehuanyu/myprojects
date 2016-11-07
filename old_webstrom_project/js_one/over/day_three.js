/**
 * Created by Administrator on 2016/9/14 0014.
 */

//
////完整版
//var chooseHero = prompt("请选择你喜欢的英雄:1.张英才2.刘玉静3.张力4.曹静");
//var chooseMonster = prompt("请选择你的对手:1.青蛙 2.蚂蚁 3.七星瓢虫 4.大灰狼");
//
////英雄的初始血量和攻击力
//var heroBlood = 0;
//var heroATT = 0;
//
////怪物的初始血量 和攻击力
//var monsterBlood = 0;
//var monsterATT = 0;
//
////选择英雄的
//switch (chooseHero){
//    case "张英才":
//        heroBlood = 300;
//        heroATT = 5;
//        break;
//    case "刘玉静":
//        heroBlood = 260;
//        heroATT = 6;
//        break;
//    case "张力":
//        heroBlood = 230;
//        heroATT = 8;
//        break;
//    case "曹静":
//        heroBlood = 200;
//        heroATT = 10;
//        break;
//    default:
//}
//console.log("您选择的英雄是"+chooseHero+"拥有"+heroBlood+"滴血"+"攻击力是"+heroATT);
//
////选择怪物
//switch (chooseMonster){
//    case "青蛙":
//        monsterBlood = 100;
//        monsterATT = 8;
//        break;
//    case "蚂蚁":
//        monsterBlood = 200;
//        monsterATT = 10;
//        break;
//    case "七星瓢虫":
//        monsterBlood = 240;
//        monsterATT = 5;
//        break;
//    case "大灰狼":
//        monsterBlood = 300;
//        monsterATT = 2;
//        break;
//    default:
//}
//console.log("您选择的对手是"+chooseMonster+"拥有"+monsterBlood+"滴血"+"攻击力是"+monsterATT);
//
//var lastSkill = 0;
//while (1){
//    var heroSkill = prompt("请选择您要使用的技能:1.耳刮子 2.佛山无影腿 3.如来神掌 4.九阴白骨爪");
//    heroATT -= lastSkill;
//    var skillName = "";
//    switch (heroSkill){
//        case "1":
//            lastSkill = 10;
//            skillName = "耳刮子";
//            break;
//        case "2":
//            lastSkill = 50;
//            skillName = "佛山无影腿";
//            break;
//        case "3":
//            lastSkill = 80;
//            skillName = "如来神掌";
//            break;
//        case "4":
//            lastSkill = 100;
//            skillName = "九阴白骨爪";
//            break;
//        default:
//            lastSkill = 0;
//    }
//    heroATT += lastSkill;
//
//
//    if (heroBlood<=0||monsterBlood<=0){
//        //修复小bug 修复出现负数的情况
//        heroBlood = heroBlood<=0?0:heroBlood;
//        monsterBlood = monsterBlood<=0?0:monsterBlood;
//        break;
//    }
//    heroBlood -= monsterATT;
//    console.log(chooseMonster+"攻击了"+chooseHero);
//    console.log(chooseHero+"还剩"+heroBlood+"滴血");
//
//    monsterBlood -= heroATT;
//    console.log(chooseHero+"使用"+"技能"+skillName+"攻击了"+chooseMonster);
//    console.log(chooseMonster+"还剩"+monsterBlood+"滴血");
//
//}
