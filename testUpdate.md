---
  layout: null
permalink: /testUpdate.js
---
var updatedVer = "{{ site.version }}";
if(version != updatedVer) {
alert("This bookmarklet is old please update");
  window.location.replace("http://bookmarlets.tumblenet.me");
}
