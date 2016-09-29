const AnimationDuration = 800,
      AnimationAssets = [
          {
              image: "../resources/draft1.png",
              mode: "scaleToFill"
          }, {
              image: "../resources/draft2.png",
              mode: "scaleToFill"
          }, 

      ];

let animation = wx.createAnimation({
    transformOrigin: "50% 50%",
    duration: AnimationDuration,
    timingFunction: "ease-in",
    delay: 0
});

Page({
  data:{
      animationData: {},
      animationAssets: AnimationAssets,
  },
  onTap: function({currentTarget}) {
    var idx = + currentTarget.dataset['idx'];

    animation.translateY((idx) * -100 + '%').step();

    this.setData({
        animationData: animation.export()
    });

    if(idx === AnimationAssets.length) {
        animation.translateY(0).step({duration: 0});
        setTimeout(() => {
            this.setData({
                animationData: animation.export()
            })
        }, AnimationDuration)
    }
  }
})