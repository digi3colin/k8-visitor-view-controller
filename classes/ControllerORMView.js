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
    this.addMixin(this.mixinORM = new ControllerMixinORM(this));
    this.addMixin(this.mixinView = new ControllerMixinMultiDomainThemeView(this));
    this.addMixin(this.mixinORMReadByHandle = new ControllerMixinORMReadByHandle(this));
  }

  action_index(){
    const instances = this.mixinORM.action_index();
    this.tpl = this.mixinView.getView(this.templates.index, {instances : instances});
  }

  action_read(){
    const instance = this.mixinORM.action_read();
    this.tpl = this.mixinView.getView(this.templates.read, {instance: instance});
  }

  action_read_by_handle(){
    const instance = this.mixinORMReadByHandle.action_read_by_handle();
    this.tpl = this.mixinView.getView(this.templates.read, {instance: instance});
  }
}

module.exports = ControllerORMView;