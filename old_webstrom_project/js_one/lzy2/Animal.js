/**
 * Created by Administrator on 2016/9/23 0023.
 */
(function(){
    var animal=function(_animal){
        this.type="动物:"+_animal;
        this.speak=function(){
            console.log("111");
        }
    };
    window.animal=animal;
})();