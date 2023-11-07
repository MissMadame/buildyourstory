
document.addEventListener('DOMContentLoaded', function() {

  var exclude1 = document.getElementById('exclude1'),
      exclude2 = document.getElementById('exclude2'),
      exclude3 = document.getElementById('exclude3'),
      exclude4 = document.getElementById('exclude4'),
      exclude5 = document.getElementById('exclude5'),
      exclude6 = document.getElementById('exclude6'),
      exclude7 = document.getElementById('exclude7'),
      exclude8 = document.getElementById('exclude8'),
      exclude9 = document.getElementById('exclude9'),
      exclude10 = document.getElementById('exclude10'),
      exclude11 = document.getElementById('exclude11'),
      exclude12 = document.getElementById('exclude12'),
      within = document.getElementById('region'),
      exclusion1 = new Exclusion(exclude1, within),
      exclusion2 = new Exclusion(exclude2, within),
      exclusion3 = new Exclusion(exclude3, within),
      exclusion4 = new Exclusion(exclude4, within),
      exclusion5 = new Exclusion(exclude5, within),
      exclusion6 = new Exclusion(exclude6, within),
      exclusion7 = new Exclusion(exclude7, within),
      exclusion8 = new Exclusion(exclude8, within),
      exclusion9 = new Exclusion(exclude9, within),
      exclusion10 = new Exclusion(exclude10, within),
      exclusion11 = new Exclusion(exclude11, within),
      exclusion12 = new Exclusion(exclude12, within),
      startX, startY, startLeft, startTop;

  let boolArray = new Array(12).fill(false);

  var topImage = document.getElementById("topImage-container");
  exclude1.style.top = "-"+(topImage.getBoundingClientRect().height + 15)+'px';

  exclude3.style.top = "-"+(topImage.getBoundingClientRect().height + 15)+'px';

  exclude8.style.top = "-"+(topImage.getBoundingClientRect().height + 15)+'px';

  exclude10.style.top = "-"+(topImage.getBoundingClientRect().height + 15)+'px';
  

  exclude1.addEventListener('mousedown', function(e) {
    startX = e.clientX;
    startY = e.clientY;
    startLeft = intStyle(exclude1, 'left');
    startTop = intStyle(exclude1, 'top');
    window.addEventListener('mousemove', watchMove);
    document.onselectstart = function() {
        return false;
    };
  });

  exclude2.addEventListener('mousedown', function(e) {
    startX = e.clientX;
    startY = e.clientY;
    startLeft = intStyle(exclude2, 'left');
    startTop = intStyle(exclude2, 'top');
    window.addEventListener('mousemove', watchMove);
    document.onselectstart = function() {
        return false;
    };
  });

  exclude2.addEventListener('touchstart', function(e) {
    startX = e.clientX;
    startY = e.clientY;
    startLeft = intStyle(exclude2, 'left');
    startTop = intStyle(exclude2, 'top');
    window.addEventListener('touchmove', watchMove);
    document.onselectstart = function() {
        return false;
    };
  });

  exclude3.addEventListener('mousedown', function(e) {
    startX = e.clientX;
    startY = e.clientY;
    startLeft = intStyle(exclude3, 'left');
    startTop = intStyle(exclude3, 'top');
    window.addEventListener('mousemove', watchMove);
    document.onselectstart = function() {
        return false;
    };
  });

  exclude4.addEventListener('mousedown', function(e) {
    startX = e.clientX;
    startY = e.clientY;
    startLeft = intStyle(exclude4, 'left');
    startTop = intStyle(exclude4, 'top');
    window.addEventListener('mousemove', watchMove);
    document.onselectstart = function() {
        return false;
    };
  });

  exclude5.addEventListener('mousedown', function(e) {
    startX = e.clientX;
    startY = e.clientY;
    startLeft = intStyle(exclude5, 'left');
    startTop = intStyle(exclude5, 'top');
    window.addEventListener('mousemove', watchMove);
    document.onselectstart = function() {
        return false;
    };
  });

  exclude6.addEventListener('mousedown', function(e) {
    startX = e.clientX;
    startY = e.clientY;
    startLeft = intStyle(exclude6, 'left');
    startTop = intStyle(exclude6, 'top');
    window.addEventListener('mousemove', watchMove);
    document.onselectstart = function() {
        return false;
    };
  });

  exclude7.addEventListener('mousedown', function(e) {
    startX = e.clientX;
    startY = e.clientY;
    startLeft = intStyle(exclude7, 'left');
    startTop = intStyle(exclude7, 'top');
    window.addEventListener('mousemove', watchMove);
    document.onselectstart = function() {
        return false;
    };
  });

  exclude8.addEventListener('mousedown', function(e) {
    startX = e.clientX;
    startY = e.clientY;
    startLeft = intStyle(exclude8, 'left');
    startTop = intStyle(exclude8, 'top');
    window.addEventListener('mousemove', watchMove);
    document.onselectstart = function() {
        return false;
    };
  });

  exclude9.addEventListener('mousedown', function(e) {
    startX = e.clientX;
    startY = e.clientY;
    startLeft = intStyle(exclude9, 'left');
    startTop = intStyle(exclude9, 'top');
    window.addEventListener('mousemove', watchMove);
    document.onselectstart = function() {
        return false;
    };
  });

  exclude10.addEventListener('mousedown', function(e) {
    startX = e.clientX;
    startY = e.clientY;
    startLeft = intStyle(exclude10, 'left');
    startTop = intStyle(exclude10, 'top');
    window.addEventListener('mousemove', watchMove);
    document.onselectstart = function() {
        return false;
    };
  });

  exclude11.addEventListener('mousedown', function(e) {
    startX = e.clientX;
    startY = e.clientY;
    startLeft = intStyle(exclude11, 'left');
    startTop = intStyle(exclude11, 'top');
    window.addEventListener('mousemove', watchMove);
    document.onselectstart = function() {
        return false;
    };
  });

  exclude12.addEventListener('mousedown', function(e) {
    startX = e.clientX;
    startY = e.clientY;
    startLeft = intStyle(exclude12, 'left');
    startTop = intStyle(exclude12, 'top');
    window.addEventListener('mousemove', watchMove);
    document.onselectstart = function() {
        return false;
    };
  });

  window.addEventListener('mouseup', function() {
      window.removeEventListener('mousemove', watchMove);
      document.onselectstart = null;
  });


  function getNumberFromId(id) {
    const match = id.match(/exclude(\d+)/);
    
    return match ? match[1] : null;
  }

  function reflowAll(str) {
    const num = parseInt(str, 10);

    if (num >= 1 && num <= 12) {
      boolArray[num - 1] = true;
    }

    // if(boolArray[0]) exclusion1.reflow();
    // if(boolArray[1]) exclusion2.reflow();
    // if(boolArray[2]) exclusion3.reflow();
    // if(boolArray[3]) exclusion4.reflow();
    // if(boolArray[4]) exclusion5.reflow();
    // if(boolArray[5]) exclusion6.reflow();
    // if(boolArray[6]) exclusion7.reflow();
    // if(boolArray[7]) exclusion8.reflow();
    // if(boolArray[8]) exclusion9.reflow();
    // if(boolArray[9]) exclusion10.reflow();
    // if(boolArray[10]) exclusion11.reflow();
    // if(boolArray[11]) exclusion12.reflow();

    if(num == 1) exclusion1.reflow();
    if(num == 2) exclusion2.reflow();
    if(num == 3) exclusion3.reflow();
    if(num == 4) exclusion4.reflow();
    if(num == 5) exclusion5.reflow();
    if(num == 6) exclusion6.reflow();
    if(num == 7) exclusion7.reflow();
    if(num == 8) exclusion8.reflow();
    if(num == 9) exclusion9.reflow();
    if(num == 10) exclusion10.reflow();
    if(num == 11) exclusion11.reflow();
    if(num == 12) exclusion12.reflow();
  }
  
  function watchMove(e) {
    e.target.style.left = (startLeft + e.clientX - startX) + 'px';
    e.target.style.top = (startTop + e.clientY - startY) + 'px';
    if (e.preventDefault) e.preventDefault();
    e.stopPropagation();
    
    reflowAll(getNumberFromId(e.target.id));

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