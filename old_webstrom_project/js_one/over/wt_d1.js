/**
 * Created by Administrator on 2016/9/18 0018.
 */
//var list = [[111,44,768,345],["453","ert","twert",6543]];
//1
//for(var key in list){
//    for(var key1 in list[key]){
//        console.log(list[key][key1]);
//    }
//}
////2
//list[1].pop();
//console.log(list);
//
//for(var key in list){
//    for(var key1 in list[key]){
//        if(key==1){
//            list[key].pop();
//        }
//        console.log(list[key]);
//        console.log(list[key][key1]);
//    }
//}

//3
//for(var key in list){
//    list[key].shift();
//}
//console.log(list);

////4
//for(var key in list){
//    list[key]=list[key].slice(1,3);
//}
//console.log(list);



/*[[[234,3,2],[5,44,33,23,65]],[[44,55,33,11,56],[4,77,43,98],[5,3,77,98,68]]];
   * 1.遍历
    2.删除数组中的第二、三个元素
    3.替换每一个元素中的第二个元素的第二个元素  为6
    4.在第二个元素中的第一个元素中 添加99
   *
   *
   *
   * */
//var list=[[[234,3,2],[5,44,33,23,65]],[[44,55,33,11,56],[4,77,43,98],[5,3,77,98,68]]];
//var on="";
//for(var key1 in list){
//    for(var key2 in list[key1]){
//        for( var key3 in list[key1][key2] ){
//            on=on+ list[key1][key2][key3]+",";
//        }
//    }
//}
//console.log(on);
//on=on.replace(/,/g,"");
//console.log(on);
//2
//for(var key1 in list){
//    for(var key2 in list[key1]){
//        list[key1][key2].splice(1,2);
//    }
//    list[key1].splice(1,2);
//}
//list.splice(1,2);
//for(var key1 in list){
//    for(var key2 in list[key1]){
//        for( var key3 in list[key1][key2] ){
//            on=on+ list[key1][key2][key3]+",";
//        }
//    }
//}
//console.log(on);

//2
//list.splice(1,1);
//console.log(list);

//3
//for(var key1 in list){
//    list[key1][1][1]=6;
//}

//4
//list[1][0].push(99);


//var list1=[234,3,2];
//var list2=[5,44,33,23,65];
//list1.sort();
////
//function aa(list1,list2){
//    var sum=0;
//    for(var key in list1){
//        sum=sum+list1[key];
//    }
//    for(var key in list2){
//        sum=sum+list2[key];
//    }
//    return sum/(list1.length+list2.length);
//}
//console.log(aa([1,1,1],[3,3,3]));
