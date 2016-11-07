/**
 * Created by Administrator on 2016/9/23 0023.
 */
(function(){
    var monsters=function(_animal,_blood,_att){
        this.blood=_blood;
        this.att=_att;
        animal.call(this,_animal);
    };
    inherit(animal,monsters);
    window.monsters=monsters;
})();
(function(){
    var magic_monsters=function(_animal,_blood,_att,_margickind){
        this.skill="魔法："+_margickind;
        monsters.call(this,_animal,_blood,_att);
    };
    inherit(monsters,magic_monsters);
    window.magic_monsters=magic_monsters;
})();
(function(){
    var phy_monsters=function(_animal,_blood,_att,_phyadd){
        this.skill="物理攻击类型："+_phyadd;
        monsters.call(this,_animal,_blood,_att);
    };
    inherit(monsters,phy_monsters);
    window.phy_monsters=phy_monsters;
})();