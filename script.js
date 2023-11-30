document.addEventListener('DOMContentLoaded', function() {

  var exclude = {};
  var exclusion = {};
  var within = document.getElementById('region');
  var startX, startY, startLeft, startTop;
  var totalExclusions = 16; 

  for (var i = 0; i <= totalExclusions; i++) {
      var excludeElement = document.getElementById('exclude' + i);
      if (excludeElement) {
          exclude[i] = excludeElement;
          exclusion[i] = new Exclusion(excludeElement, within);
      }
  }


  var topImage = document.getElementById("topImage-container");
  exclude[1].style.top = "-"+(topImage.getBoundingClientRect().height + 15)+'px';

  exclude[0].style.top = "-"+(topImage.getBoundingClientRect().height + 15)+'px';

  exclude[3].style.top = "-"+(topImage.getBoundingClientRect().height + 15)+'px';

  exclude[8].style.top = "-"+(topImage.getBoundingClientRect().height + 15)+'px';

  exclude[10].style.top = "-"+(topImage.getBoundingClientRect().height + 15)+'px';

  if (window.innerWidth >= 767) {
    exclusion[7].reflow();
    exclusion[9].reflow();
  }


  var gradients = [
    'linear-gradient(#ff685e, #f48f9e, #ffffff,#ffffff,#ffffff)',
    'linear-gradient(#ffffff,#ffffff,#fffcd5,#00aeef,#00ff00)',
    'linear-gradient(#ffffff,#ffffff,#fff2005,#a4ff00,#a4ff00)',
    'linear-gradient(#ffff5e,#f48f9e,#ffffff,#ffffff,#ffffff)',
    'linear-gradient(#000000, #414042, #ffffff,#ffffff,#80ff00)',
    'linear-gradient(#000000, #414042, #ffffff,#ffffff,#80ff00)',
    'linear-gradient(#f27fb2, #d296c3, #ffe0ac,#ffffff,#ffffff)',
    'linear-gradient(#ed1c24, #ed1c24, #b9e5fb,#ffffff,#ffffff)',
    'linear-gradient(#000000, #000000, #ffffff,#f8c1d9,#f8c1d9)',
    'linear-gradient(#fab6a4, #ff6e79, #fff9b8,#ffffff,#ffff00)'
  ];

  var currentGradientIndex = 0;
  var backgroundColor = exclude[13];
  backgroundColor.addEventListener('click', function() {
      currentGradientIndex = (currentGradientIndex + 1) % gradients.length;
      document.body.style.backgroundImage = gradients[currentGradientIndex];
  });

  


  var flexItems = document.querySelectorAll('.flex-item');
  var minFontSize = 5;
  var maxFontSize = 20;

  var fontSmaller = exclude[15];
  fontSmaller.addEventListener('click', function(){
    flexItems.forEach(function(item) {
      var currentSize = parseInt(window.getComputedStyle(item).fontSize);
      var newSize = Math.max(currentSize - 1, minFontSize);
      item.style.fontSize = newSize+ 'px';
    });
  });

  var fontBigger = exclude[16];
  fontBigger.addEventListener('click', function() {
    flexItems.forEach(function(item) {
        var currentSize = parseInt(window.getComputedStyle(item).fontSize);
        var newSize = Math.min(currentSize + 1, maxFontSize);
        item.style.fontSize = newSize + 'px';
    });
  });

  var fontStyle = exclude[14];
  var fontWeights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
  var fontStretches = [
    'normal', 
    'semi-condensed', 
    'condensed', 
    'extra-condensed',
    'expanded',
  ];
  var fontStyles = ['normal', 'normal', 'normal', 'italic', 'oblique'];

  fontStyle.addEventListener('click', function(){
    var randomWeight = fontWeights[Math.floor(Math.random() * fontWeights.length)];
    var randomStretch = fontStretches[Math.floor(Math.random() * fontStretches.length)];
    var randomStyle = fontStyles[Math.floor(Math.random() * fontStyles.length)];

    flexItems.forEach(function(item){
      item.style.fontWeight = randomWeight;
      item.style.fontStretch = randomStretch;
      item.style.fontStyle = randomStyle;
    });
  })



  let readjustment = 40;

  window.onbeforeprint = function() {
    for (var i = 0; i <= totalExclusions; i++) {
      exclude[i].style.top = (parseInt(exclude[i].style.top, 10) + readjustment) + 'px';
    }
  };
  window.onafterprint = function(){
    for (var i = 0; i <= totalExclusions; i++) {
      exclude[i].style.top = (parseInt(exclude[i].style.top, 10) - readjustment) + 'px';
    }
  };
  

  function addEventListenersfor(exclude){
    exclude.addEventListener('mousedown', function(e) {
      startX = e.clientX;
      startY = e.clientY;
      startLeft = intStyle(exclude, 'left');
      startTop = intStyle(exclude, 'top');
      window.addEventListener('mousemove', watchMove);
      document.onselectstart = function() {
          return false;
      };
    });
  
    exclude.addEventListener('touchstart', function(e) {
      var touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      startLeft = intStyle(exclude1, 'left');
      startTop = intStyle(exclude, 'top');
      window.addEventListener('touchmove', watchMove, { passive: false });
      document.onselectstart = function() {
          return false;
      };
      e.preventDefault();
    });
  }

  for (var i = 0; i <= totalExclusions; i++) {
    addEventListenersfor(exclude[i])
  }


  window.addEventListener('mouseup', function() {
      window.removeEventListener('mousemove', watchMove);
      document.onselectstart = null;
  });


  function getNumberFromId(id) {
    const match = id.match(/exclude(\d+)/);
    
    return match ? match[1] : null;
  }


  function watchMove(e) {
    var moveX, moveY;

    if (e.type === 'touchmove') {
        if (e.preventDefault) e.preventDefault();
        var touch = e.touches[0];
        moveX = touch.clientX;
        moveY = touch.clientY;
    } else {
        moveX = e.clientX;
        moveY = e.clientY;
    }

    var newLeft = startLeft + moveX - startX;
    var newTop = startTop + moveY - startY;

    e.target.style.left = newLeft + 'px';
    e.target.style.top = newTop + 'px';
    
    e.stopPropagation();
    
    exclusion[parseInt(getNumberFromId(e.target.id), 10)].reflow();

    return false;
  }

  
  function intStyle(element, property) {
      var value = document.defaultView.getComputedStyle(element, null)[property];
      
      return (value) ? parseInt(value, 10) : 0;
  }
});


//
// EXCLUSION CODE
//

(function() {
  var nonWhitespace = /\S+/,
      wrapClass = 'exclusion-wrapper',
      newlineClass = 'exclusion-newline';
  
  function Exclusion(exclude, region) {
      this.exclude = exclude;
      this.region = region || document;
      this.initialise();
  }
  
  Exclusion.prototype = {
      nextID: 0,
      
      getWordAtPoint: function(x, y) {
          this.exclude.style.visibility = 'hidden';
          var element = document.elementFromPoint(x, y);
          this.exclude.style.visibility = 'visible';
          
          return (element && element.nodeName == 'SPAN' && element.className.indexOf(wrapClass) > -1) ? element : null;
      },
      
      initialise: function() {
          var wrapped = wrapWords(this.region);
          this.region.parentNode.replaceChild(wrapped, this.region);
          this.region = wrapped;
          this.spans = this.region.getElementsByClassName(wrapClass);
          
          // this.reflow();
      },
      
      uninitialise: function() {
          var span = this.spans[0];
          
          while (span) {
              span.parentNode.replaceChild(span.firstChild, span);
              span = this.spans[0];
          }
          
          this.region.normalize();
      },
      
      reflow: function() {
          if (this.padded && this.padded.length > 0) {
              for (var i = 0, imax = this.padded.length; i < imax; i++) {
                  this.padded[i].style.paddingLeft = '0';
              }
          }
          
          if (this.newline && this.newline.length > 0) {
              for (var i = 0, imax = this.newline.length; i < imax; i++) {
                  this.newline[i].className = wrapClass;
              }
          }
          
          this.padded = [];
          this.newline = [];
          
          var excludeOffset = offsetMargin(this.exclude),
              span = this.getWordAtPoint(excludeOffset.left, excludeOffset.top),
              spanIndex = 0,
              spanOffset,
              updatedOffset;
          
          if (!span) {
              for (var max = this.spans.length; spanIndex < max; spanIndex ++) {
                  span = this.spans[spanIndex];
                  spanOffset = this.originalOffset(span);
                  if (spanOffset.bottom > excludeOffset.top && spanOffset.right > excludeOffset.left) {
                      break;
                  }
              }
              
              if (!span) return;
              
          } else {
              spanOffset = this.originalOffset(span);
              spanIndex = Array.prototype.indexOf.call(this.spans, span);
          }
          
          do {
                  
              if (spanOffset.right > excludeOffset.left) {
                  span.style.paddingLeft = (excludeOffset.left - spanOffset.left + excludeOffset.width) + 'px';
                  
                  updatedOffset = offset(span);
                  
                  if (updatedOffset.top > spanOffset.top) { // reflowed onto new line
                      span.style.paddingLeft = '0';
                      span.className = newlineClass;
                      this.newline.push(span);
                  } else {
                      this.padded.push(span);
                  }
                  
              }
              
              span = this.spans[++spanIndex];
              spanOffset = offset(span);
              
          } while (span && spanOffset.top < excludeOffset.bottom);
          
      },
      
      originalOffset: function(element) {
          if (!element._originalOffset) {
              element._originalOffset = offset(element);
          }
          
          return element._originalOffset;
      }
  };
  
  window.Exclusion = Exclusion;
  
  //
  // Helper functions
  //
  
  // Get the top, left, top and bottom offsets of an element,
  // INCLUDING MARGINS.
  function offsetMargin(element) {
      var marginLeft = intStyle(element, 'marginLeft'),
          marginRight = intStyle(element, 'marginRight'),
          marginTop = intStyle(element, 'marginTop'),
          marginBottom = intStyle(element, 'marginBottom');
      
      if (!element) {
          return {
              left: -1,
              right: -1,
              top: -1,
              bottom: -1,
              height: 0,
              width: 0
          };
      } else {
          var box = element.getBoundingClientRect();
          
          return {
              left: box.left - marginLeft,
              right: box.right + marginLeft,
              top: box.top - marginTop,
              bottom: box.bottom + marginBottom,
              height: box.height + marginTop + marginBottom,
              width: box.width + marginLeft + marginRight
          };
          
      }
  }
  
  // Get the top, left, top and bottom offsets of an element,
  // NOT including margins.
  function offset(element) {
      
      if (!element) {
          return {
              left: -1,
              right: -1,
              top: -1,
              bottom: -1,
              height: 0,
              width: 0
          };
      } else {
          var box = element.getBoundingClientRect();
          
          return {
              left: box.left,
              right: box.right,
              top: box.top,
              bottom: box.bottom,
              height: box.height,
              width: box.width
          };
      }
  }
  
  // Get style property as an integer.
  function intStyle(element, property) {
      var value = document.defaultView.getComputedStyle(element, null)[property];
      
      return (value) ? parseInt(value, 10) : 0;
  }
  
  // Wrap all text in an element (and its child elements) in spans.
  function wrapWords(element) {
      var node,
          wrapHTML,
          wrapFragment,
          wrapContainer,
          wordWrapStartTag = '<span class="' + wrapClass + '">';
      
      element.normalize();
      
      for (var i = 0, imax = element.childNodes.length; i < imax; i++) {
          node = element.childNodes[i];
          
          if (node.nodeType == Node.TEXT_NODE && nonWhitespace.test(node.data)) {
              wrapHTML = wordWrapStartTag + node.data.split(/\s+/).join('</span> ' + wordWrapStartTag) + '</span>';
              
              if (node.previousSibling) {
                  node.previousSibling.insertAdjacentHTML('afterend', wrapHTML);
                  element.removeChild(node);
                  
              } else {
                  wrapFragment = document.createDocumentFragment();
                  wrapContainer = document.createElement('div');
                  wrapContainer.insertAdjacentHTML('beforeend', wrapHTML);
                  
                  while (wrapContainer.firstChild) {
                      wrapFragment.appendChild(wrapContainer.firstChild);
                  }
                  
                  element.replaceChild(wrapFragment, node);
              }

          } else if (node.nodeType == Node.ELEMENT_NODE) {
              
              if (node.nodeName == 'IMG') {
                  var wrap = document.createElement('span');
                  span.className = wrapClass;
                  span.appendChild(node);
                  element.replaceChild(span, node);
                  
              } else {
                  wrapWords(node);
              }
          }
      }

      return element;
  }
  
})();