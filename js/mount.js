const data = {
  title: 'Wet de SHIP',
  battlefield: new Battlefield(),
  types: [
    new Schlachtschiff(),
    new Kreuzer(),
  ],
};

const mount = new Vue({
  el: '#mount',
  data: data,
});
