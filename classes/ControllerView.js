const K8 = require('k8mvc');

const Controller = K8.require('Controller');
const ControllerMixinView = K8.require('controller-mixin/View');

class ControllerView extends Controller{
  constructor(request, response){
    super(request, response);
    this.tpl = null;

    this.addMixin(this.mixinView = new ControllerMixinView(this));
  }
}

module.exports = ControllerView;