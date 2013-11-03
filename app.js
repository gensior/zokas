({
  max_width: 600,
  max_height: 400,
  gimmeMax: function () {
    'use strict';
    return this.max_width+"x"+this.max_height;
  },
  init: function () {
    'use strict';
    console.log(this.gimmeMax());
  }
}).init();