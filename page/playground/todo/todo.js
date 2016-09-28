Page({
  data: {
    completedCount: 1,
    allCount: 6,
    items: [
      {id: 't1', value: 'TODO 1'},
      {id: 't2', value: 'TODO 2', completed: true},
      {id: 't3', value: 'TODO 3'},
      {id: 't4', value: 'TODO 4'},
      {id: 't5', value: 'TODO 5'},
      {id: 't6', value: 'TODO 6'},
    ]
  },
  add: function(e) {
    this.setData({
      items: this.extraLine
    })
  },
  remove: function(e) {
    if (this.extraLine.length > 0) {
      this.extraLine.pop()
      this.setData({
        content: this.extraLine
      })
    }
  },
  // toggle: function(e) {
  //   var checkedItems = e.detail.value,
  //       checkedCount = 0,
  //       isChecked;

  //   var newItems = this.data.items.map((item) => {
  //       isChecked = checkedItems.indexOf(item.name) > -1;
  //       if(isChecked) {
  //           checkedCount ++;
  //       }
  //       return Object.assign({}, item, {checked:  isChecked? 'true' : ''})
  //   })
  //   this.setData({
  //       items: newItems,
  //       completedCount: checkedCount
  //   });
  // },
  toggleTodo: function(e) {
    console.log(e.target);
    var idx = e.target.dataset['idx'],
        items = this.data.items,
        status = items[idx]['completed'];

    items[idx]['completed'] = !status;
    this.setData({
      items: items,
      completedCount: this.data.completedCount + (status ? -1 : 1)
    })
  }
})