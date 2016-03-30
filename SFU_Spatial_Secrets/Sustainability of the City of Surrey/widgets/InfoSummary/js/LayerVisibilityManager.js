// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","jimu/LayerInfos/LayerInfos"],function(k,g,l,m){return k(null,{_layerList:{},_map:null,_initalLayerVisibility:{},_opLayers:null,_parent:null,constructor:function(b){this._map=b.map;this._layerList=b.configLayerList;this._parent=b.parent;this.setOpLayers(this._map);this.storeInitalVisibility();this.setInitalVisibility()},setOpLayers:function(b){b.itemId&&m.getInstance(b,b.itemInfo).then(g.hitch(this,function(a){this._opLayers=a}))},
setInitalVisibility:function(){for(var b in this._layerList){var a=this._layerList[b];"ClusterLayer"===a.type&&(a.layerObject.setVisibility&&a.layerObject.setVisibility(!0),a.layerObject.visible=!0,a.layerObject._parentLayer&&(a.layerObject._parentLayer.setVisibility&&a.layerObject._parentLayer.setVisibility(!1),a.layerObject._parentLayer.hasOwnProperty("visibility")&&(a.layerObject._parentLayer.visibility=!1)));var d;a.layerObject.layerInfos?d=a.layerObject:a.li&&"undefined"!==typeof a.li.parentLayerID&&
(d=this._map.getLayer(a.li.parentLayerID));if(d&&d.visibleLayers){var e=g.clone(d.visibleLayers);d.layerInfos&&(0<d.layerInfos.length&&a.li&&("undefined"!==typeof a.li.subLayerId&&-1===e.indexOf(a.li.subLayerId)?"ClusterLayer"!==a.type&&e.push(a.li.subLayerId):-1<e.indexOf(a.li.subLayerId)&&"ClusterLayer"===a.type&&e.splice(e.indexOf(a.li.subLayerId),1)),e&&d.setVisibleLayers(e),d.setVisibility&&d.setVisibility(!0),d.hasOwnProperty("visible")&&(d.visible=!0))}}},storeInitalVisibility:function(){this._initalLayerVisibility=
{};l.forEach(this._opLayers._operLayers,g.hitch(this,function(b){if("ArcGISFeatureLayer"===b.layerType||"ArcGISMapServiceLayer"===b.layerType||"undefined"===typeof b.layerType)if(b.layerObject&&this.shouldCheck(b))this._initalLayerVisibility[b.id]={type:b.layerType,layerObject:b.layerObject,visible:b.layerObject.visible,visibleSubLayers:g.clone(b.layerObject.visibleLayers)};else if(b.featureCollection)for(var a=0;a<b.featureCollection.layers.length;a++){var d=b.featureCollection.layers[a];this.shouldCheck(d)&&
(this._initalLayerVisibility[d.id]={type:d.layerType,layerObject:d.layerObject,visible:"undefined"!==typeof d.layerObject.visible?d.layerObject.visible:d.visibility,pl:b})}else b.layers&&(this._initalLayerVisibility[b.id]={type:b.layerType,layerObject:b.layerObject,visible:b.layerObject.visible,visibleSubLayers:g.clone(b.layerObject.visibleLayers)})}))},shouldCheck:function(b){return this._layerList?!(b.id in this._layerList):!0},setLayerVisibility:function(b,a){var d=[];if(b)for(var e in b){var c=
b[e];if(-1===d.indexOf(c.id))if(c.visibleSubLayers)c.layerObject.setVisibleLayers(c.visibleSubLayers);else if("undefined"===typeof c.pl)c.layerObject.setVisibility(a?!1:c.visible);else{var f=g.clone(c.layerObject.visibleLayers);if(c.layerObject.layerInfos){if(0<c.layerObject.layerInfos.length)for(var k in b){var h=b[k];h.li&&h.li.subLayerId&&-1===f.indexOf(h.li.subLayerId)&&f.push(h.li.subLayerId)}a?(f=this._initalLayerVisibility[c.layerObject.id],f.visibleSubLayers&&(c.layerObject.setVisibleLayers(f.visibleSubLayers),
c.layerObject.setVisibility&&c.layerObject.setVisibility(!0))):(f&&c.layerObject.setVisibleLayers(f),c.layerObject.setVisibility&&c.layerObject.setVisibility(!0))}else c.layerObject.setVisibility&&c.layerObject.setVisibility(a?!1:c.visible),c.pl.hasOwnProperty("visibility")&&(c.pl.visibility=a?!1:c.visible)}}},resetLayerVisibility:function(){this.setLayerVisibility(this._initalLayerVisibility,!1);this._initalLayerVisibility={};var b={},a;for(a in this._layerList)"ClusterLayer"===this._layerList[a].type&&
(b[a]=this._layerList[a],this._layerList[a].pl&&(this._layerList[a].pl.setVisibility&&this._layerList[a].pl.setVisibility(!0),this._layerList[a].pl.hasOwnProperty("visibility")&&(this._layerList[a].pl.visibility=!0)));0<Object.keys(b).length&&this.setLayerVisibility(b,!0);this._layerList={}}})});