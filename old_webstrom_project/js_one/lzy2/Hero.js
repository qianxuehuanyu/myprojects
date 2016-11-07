/**
 * Created by Administrator on 2016/9/23 0023.
 */
(function(){
    var heros=function(_animal,_blood,_att){
        this.blood=_blood;
        this.att=_att;
        animal.call(this,_animal);
    };
    inherit(animal,heros);
    window.heros=heros;
})();
(function(){
    var magic_heros=function(_animal,_blood,_att,_margickind){
        this.skill="魔法："+_margickind;
        heros.call(this,_animal,_blood,_att);
    };
    inherit(heros,magic_heros);
    window.magic_heros=magic_heros;
})();
(function(){
    var phy_heros=function(_animal,_blood,_att,_phyadd){
        this.skill="物理攻击类型："+_phyadd;
        heros.call(this,_animal,_blood,_att);
    };
    inherit(heros,phy_heros);
    window.phy_heros=phy_heros;
})();