function sendTo(iOSURL, androidURL, websiteURL) {
  var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false );
  if (iOS && iOSURL){
  	window.location.href = iOSURL;
  }
  var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
  if (isAndroid && androidURL){
  	window.location.href = androidURL;
  }
  window.location.href = websiteURL;
}
