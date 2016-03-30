// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/xhr","dojo/dom-style","dojo/_base/Color"],function(l,m,n,p,h){return l(null,{_theme:null,_styleName:"",_styleColor:null,_options:null,constructor:function(a){this._theme=a.theme;this._styleName=a.stylename;this.getStyleColor(this._styleName);this._options=a},setStyle:function(a){this._styleName=a;this.getStyleColor(this._styleName)},getStyleColor:function(a){var c=a?a:this._theme.styles[0];n.get({url:"././themes/"+this._theme.name+"/manifest.json",
handleAs:"json",load:m.hitch(this,function(b){b=b.styles;for(var a=0;a<b.length;a++){var d=b[a];if(d.name===c){this._styleColor=d.styleColor;this.updateUI(this._styleColor);break}}})})},updateUI:function(a){if(a){for(var c=this._options.updateNodes,b=0;b<c.length;b++)p.set(c[b].node,c[b].styleProp,a);this.updateClusterLayerColors(this._options.layerList)}},updateClusterLayerColors:function(a){var c=h.fromHex(this._styleColor),b=30,k;for(k in a){var d=a[k];if("ClusterLayer"===d.type&&d.layerObject.symbolData&&
d.layerObject.symbolData.clusteringEnabled&&"ThemeCluster"===d.layerObject.symbolData.clusterType){var e=c.g,f=c.b,g=c.r-b;255<g?g-=255:0>g&&(g+=255);f-=b;255<f?f-=255:0>f&&(f+=255);e-=b;255<e?e-=255:0>e&&(e+=255);b+=b;d.layerObject.setColor(h.fromArray([g,e,f,1]));d.layerObject.clusterFeatures()}}}})});