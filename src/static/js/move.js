function move(ele, styles, duration, callback) {
  window.requestAnimationFrame = window.requestAnimationFrame || function (fn) {
    return setTimeout(fn, 1000 / 60)
  };
  window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout
  var cssJSON = ele.currentStyle || getComputedStyle(ele)
    var initial = {},
      disparity = {}
    for (var key in styles) {
      initial[key] = parseFloat(cssJSON[key])
      disparity[key] = styles[key] - initial[key]
      if (!disparity[key]) {
        delete disparity[key];
        delete initial[key];
      }
    }
    var start = new Date();
    (function fn() {
      var prop = (new Date() - start) / duration;
      prop >= 1
        ? prop = 1
        : requestAnimationFrame(fn)
      for (var key in initial) {
        if (key == 'opacity') {
          var val = initial[key] + disparity[key] * prop
          ele.style[key] = val
          ele.style.filter = 'alpha(opacity=' + val * 100 + ')';
        }
        ele.style[key] = initial[key] + disparity[key] * prop + 'px'
      }
      if (prop === 1) 
        callback && callback.bind(ele)
    })()
  }