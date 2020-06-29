
    var getId = function (id) {
        return document.getElementById(id);
    }
    var addEvent = function (obj,event,fun) {
        if (obj.addEventListener){
            obj.addEventListener(obj,event,fun);
        }
    }