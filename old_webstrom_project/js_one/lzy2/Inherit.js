/**
 * Created by Administrator on 2016/9/23 0023.
 */
function inherit(supuer,sub) {
    var _prototype = Object.create(supuer.prototype);
    _prototype.constructor = sub;
    sub.prototype = _prototype;
}
