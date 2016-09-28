var ctxActionRecord = [];

var ctx = wx.createContext();
ctx.setStrokeStyle("#ff0000");
ctx.setLineWidth(3);

Page({
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {

    //使用wx.createContext获取绘图上下文context
    var context = wx.createContext()

    context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()
    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()

    //调用wx.drawCanvas，通过canvasId指定在哪张画布上绘制，通过actions指定绘制行为
    wx.drawCanvas({
      canvasId: 'firstCanvas',
      actions: context.getActions() //获取绘图动作数组
    })
  },

  onTouchStart: function(e) {
    var touch = e.touches[0];
    ctx.moveTo(touch.pageX, touch.pageY);
    // Array.prototype.push.apply(ctxActionRecord, ctx.getActions());
  },
  onTouchMove: function(e) {
    var touch = e.touches[0];
    ctx.lineTo(touch.pageX, touch.pageY);

    ctx.stroke();
    
    // Array.prototype.push.apply(ctxActionRecord, ctx.getActions());

    // wx.drawCanvas({
    //   canvasId: 'firstCanvas',
    //   actions: ctxActionRecord
    // })
    console.log(ctxActionRecord);
    
  },

  onTouchEnd: function(e) {
    console.log(e);
    // console.log(ctx.getActions());
    Array.prototype.push.apply(ctxActionRecord, ctx.getActions());
    // console.log(ctxActionRecord);
    
    wx.drawCanvas({
      canvasId: 'firstCanvas',
      actions: ctxActionRecord
    })
    // console.log(ctx.getActions())
  }
})