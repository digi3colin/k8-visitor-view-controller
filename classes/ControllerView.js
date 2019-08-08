const K8 = require('k8mvc');

const Controller = K8.require('Controller');
const ControllerMixinMultiDomainThemeView = K8.require('controller-mixin/MultiDomainThemeView');

class ControllerView extends Controller{
  constructor(request, response){
    super(request, response);
    this.tpl = null;

    this.addMixin(new ControllerMixinMultiDomainThemeView(this));
  }
}

module.exports = ControllerView;