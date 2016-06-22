/*基本图文组件对象*/
var H5ComponentBase = function (cfg) {
    var cfg = cfg || {};
    var id = ('h5_c_' + Math.random()).replace('.', '_');
    //把当前组件类型添加到样式中进行标记
    var cls ='';
    var component = $('<div class="h5_component" id="' + id + '">');
    cfg.text && component.text(cfg.text);
    return component;
}