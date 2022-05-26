AFRAME.registerComponent('box', {
    schema: {
      posX: {type: 'number', default: 1}
    },
    tick: function () {
        this.data.posX = this.data.posX + 0.01
        var p = this.el.getAttribute("position")
        p.y = this.data.posX
        p.x = this.data.posX
        p.z = this.data.posX
        this.el.setAttribute("position", {x: p.x, y:p.y, z:p.z})
      }
  });