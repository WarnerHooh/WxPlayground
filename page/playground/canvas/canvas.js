// init ctx config
const ctx = wx.createContext();
ctx.setStrokeStyle("#ff0000");
ctx.setLineWidth(3);

Page({
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {
  },
  // move actions collection
  movements: [],
  // track a serie of new actions stack
  onTouchStart: function({touches}) {
    let {pageX, pageY} = touches[0];
    this.movements.push([[pageX, pageY]]);
  },
  // everytime moving put action into current actions stack
  onTouchMove: function({touches}) {
    let {pageX, pageY} = touches[0],
    	  movementsIndex = this.movements.length - 1;

    this.movements[movementsIndex].push([pageX, pageY]);

    this.movements.forEach((movements, i) => {
      let [start, ...moves] = this.movements[i];
      ctx.moveTo(...start);
      moves.forEach(move => {
        ctx.lineTo(...move);
      })
    });
    
    ctx.stroke();

    wx.drawCanvas({
      canvasId: 'firstCanvas',
      actions: ctx.getActions()
    })
  },

  onTouchEnd: function(e) {
  }
})