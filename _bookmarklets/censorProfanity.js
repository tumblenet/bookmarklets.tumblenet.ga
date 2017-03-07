---
layout: bookmarklets
---

Main: function() {
  if (window.isProfanity === undefined || window.isProfanity.fn.jquery < v) {
    var done = false;
    var scriptIsProfanity = document.createElement("script");
    scriptIsProfanity.src = "https://github.com/vandie/isProfanity/raw/master/isProfanity.js";
    scriptIsProfanity.onload = scriptIsProfanity.onreadystatechange = function(){
      if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
        done = true;
        this.lookThroughWords(document.body, /[\u0600-\u06FF]+/);
      }
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  } else {
    this.lookThroughWords(document.body, /[\u0600-\u06FF]+/);
  }
},

LookThroughWords: function(node) {
  var child;

  switch (node.nodeType) {
    case 1: // Element
      for (child = node.firstChild;
           child;
           child = child.nextSibling) {
        this.LookThroughWords(child);
      }
      break;

    case 3: // Text node
      //handleText(node, targetRe);
      //isProfanity(node,function(t){
          // t will equal true if it contains a swear word and false if not
      //});
      
      console.log(node.nodeValue);
      break;
  }
},
