const K8 = require('k8mvc');
const Controller = K8.require('Controller');
const ControllerMixinORM = K8.require('controller-mixin/ORM');
const ControllerMixinMultiDomainThemeView = K8.require('controller-mixin/MultiDomainThemeView');

const ControllerMixinORMReadByHandle = K8.require('controller-mixin/ORMReadByHandle');
const ControllerMixinMultiDomainDB = K8.require('controller-mixin/MultiDomainDB');

class ControllerORMView extends Controller{
  constructor(request, response){
    super(request, response);

    this.templates = {
      index:'templates/index',
      read:'templates/instance',
    };

    this.addMixin(new ControllerMixinMultiDomainDB(this));
    this.addMixin(new ControllerMixinORM(this));
    this.addMixin(new ControllerMixinMultiDomainThemeView(this));
    this.addMixin(new ControllerMixinORMReadByHandle(this));
  }

  action_index(){
    this.tpl = this.getView(this.templates.index, {instances : this.instances});
  }

  action_read(){
    this.tpl = this.getView(this.templates.read, {instance: this.instance});
  }

  action_read_by_handle(){
    this.tpl = this.getView(this.templates.read, {instance: this.instance});
  }
}

module.exports = ControllerORMView;