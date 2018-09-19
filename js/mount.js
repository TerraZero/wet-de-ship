const data = {
  title: 'Wet de SHIP',
  battlefield: new Battlefield(),
  actions: [
    new ShipSelectAction(new Schlachtschiff()),
    new ShipSelectAction(new Kreuzer()),
    new ShipSelectAction(new Transporter()),
  ],
  action: null,
  hud: new Hud(),
};

const mount = new Vue({
  el: '#mount',
  data: data,
  methods: {

    cb: function (context, functionname, ...args) {
      args.unshift(this);
      return context[functionname].apply(context, args);
    },

    callable: function (callable, ...args) {
      const context = callable.context || null;
      const func = callable.func;

      args.unshift(this);
      return func.apply(context, args);
    },

  },
});
