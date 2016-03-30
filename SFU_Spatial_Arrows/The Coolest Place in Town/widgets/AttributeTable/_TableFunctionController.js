// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/Evented dojo/_base/html dojo/on dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/Toolbar dijit/form/Button dijit/DropDownMenu dijit/MenuItem dijit/form/ToggleButton dijit/form/DropDownButton jimu/dijit/Popup jimu/dijit/Filter jimu/dijit/Message ./_FeatureTable ./_RelationshipTable".split(" "),function(m,c,n,h,k,p,q,r,s,f,t,d,u,v,w,x,l,g,y){return m([p,q,r,n],{templateString:"\x3cdiv\x3e\x3c/div\x3e",_handlers:[],_resourceManager:null,
zoomButton:null,exportButton:null,selectionMenu:null,refreshButton:null,matchingCheckBox:null,matchingMap:!0,nls:null,postCreate:function(){var a=new s({},h.create("div")),b=new t;this.showSelectedRecords=new d({label:this.nls.showSelectedRecords,iconClass:"esriAttributeTableSelectPageImage",onClick:c.hitch(this,this._showSelectedRecords)});b.addChild(this.showSelectedRecords);this.showRelatedRecords=new d({label:this.nls.showRelatedRecords,iconClass:"esriAttributeTableSelectAllImage",onClick:c.hitch(this,
this._showRelatedRecords)});b.addChild(this.showRelatedRecords);this.filter=new d({label:this.nls.filter,iconClass:"esriAttributeTableFilterImage",onClick:c.hitch(this,this._showFilter)});b.addChild(this.filter);this.columns=new d({label:this.nls.columns,iconClass:"esriAttributeTableColumnsImage",onClick:c.hitch(this,this._toggleColumns)});b.addChild(this.columns);this.hideExportButton||(this.exportButton=new d({label:this.nls.exportFiles,showLabel:!0,iconClass:"esriAttributeTableExportImage",onClick:c.hitch(this,
this._onExportFiles)}),b.addChild(this.exportButton));this.selectionMenu=new v({label:this.nls.options,iconClass:"esriAttributeTableOptionsImage",dropDown:b});a.addChild(this.selectionMenu);this.matchingCheckBox=new u({checked:this.filterByMapExtent?!0:!1,showLabel:!0,label:this.nls.filterByExtent,onChange:c.hitch(this,function(a){this.matchingMap=a;this.activeTable&&(this.activeTable.cancelThread(),this.activeTable.set("matchingMap",a),this.activeTable.startQuery())})});this.matchingMap=this.filterByMapExtent;
a.addChild(this.matchingCheckBox);this.zoomButton=new f({label:this.nls.zoomto,iconClass:"esriAttributeTableZoomImage",onClick:c.hitch(this,this._zoomTo)});a.addChild(this.zoomButton);b=new f({label:this.nls.clearSelection,iconClass:"esriAttributeTableClearImage",onClick:c.hitch(this,this._clearSelection,!1)});a.addChild(b);this.refreshButton=new f({label:this.nls.refresh,showLabel:!0,iconClass:"esriAttributeTableRefreshImage",onClick:c.hitch(this,this._refresh)});a.addChild(this.refreshButton);this.closeButton=
new f({title:this.nls.closeMessage,iconClass:"esriAttributeTableCloseImage",onClick:c.hitch(this,this._onCloseBtnClicked)});h.addClass(this.closeButton.domNode,"close-button");a.addChild(this.closeButton);h.place(a.domNode,this.domNode);a.startup();this.inherited(arguments)},startup:function(){this.resetButtonStatus()},setResourceManager:function(a){this._resourceManager=a},setMap:function(a){this.map=a},active:function(){this.activeTable&&this.activeTable.active()},deactive:function(){this.activeTable&&
this.activeTable.deactive()},setActiveTable:function(a,b){this.activeTable&&(this.activeTable.cancelThread(),this.activeTable.deactive(),this._unbindEvent());if(a){this.activeTable=a;this.activeTable.active();this.activeTable.changeHeight(b.h);if(this.matchingMap||!this.matchingMap&&this.activeTable.matchingMap||!this.activeTable.tableCreated||this.activeTable instanceof y)this.activeTable.set("matchingMap",this.matchingMap),this.activeTable.startQuery(b);this._bindEvent();this.checkMapInteractiveFeature()}this.resetButtonStatus()},
getActiveTable:function(){return this.activeTable},changeHeight:function(a){this.activeTable&&this.activeTable.changeHeight(a)},checkMapInteractiveFeature:function(){if(this.activeTable){var a=this.activeTable,b=this.activeTable.layerInfo;b&&(b.isShowInMap()?(a&&a.showGraphic(),(a=a.getSelectedRows())&&0<a.length?this.zoomButton.set("disabled",!1):this.zoomButton.set("disabled",!0)):(a&&a.hideGraphic(),this.zoomButton.set("disabled",!0)))}},resetButtonStatus:function(){var a=this.activeTable;if(a){var b=
a.getSelectedRows();a.showSelected?this.showSelectedRecords.set("label",this.nls.showAllRecords):this.showSelectedRecords.set("label",this.nls.showSelectedRecords);a.tableCreated&&b&&0<b.length?this.showSelectedRecords.set("disabled",!1):this.showSelectedRecords.set("disabled",!0);this.showRelatedRecords.set("disabled",!0);if(c.getObject("layerInfo",!1,a)&&a instanceof g&&a.isSupportQueryToServer()&&b&&0<b.length){this._relatedDef&&!this._relatedDef.isFulfilled()&&this._relatedDef.cancel();var e=
a.layerInfo.getRelatedTableInfoArray();this._relatedDef=e;e.then(c.hitch(this,function(b){if(this.domNode){var c=a.getSelectedRows();a.tableCreated&&(b&&0<b.length&&c&&0<c.length)&&this.showRelatedRecords.set("disabled",!1)}}))}a.tableCreated&&a instanceof g&&a.isSupportQueryToServer()?this.filter.set("disabled",!1):this.filter.set("disabled",!0);a instanceof g?this.matchingCheckBox.set("disabled",!1):this.matchingCheckBox.set("disabled",!0);a.tableCreated?this.columns.set("disabled",!1):this.columns.set("disabled",
!0);this.hideExportButton||(b&&0<b.length?this.exportButton.set("label",this.nls.exportSelected):this.exportButton.set("label",this.nls.exportAll),a.tableCreated?this.exportButton.set("disabled",!1):this.exportButton.set("disabled",!0));a.tableCreated&&a instanceof g&&b&&0<b.length?a.layerInfo.isShowInMap()?this.zoomButton.set("disabled",!1):this.zoomButton.set("disabled",!0):this.zoomButton.set("disabled",!0)}else this.showSelectedRecords.set("disabled",!0),this.showRelatedRecords.set("disabled",
!0),this.matchingCheckBox.set("disabled",!0),this.filter.set("disabled",!0),this.columns.set("disabled",!0),this.hideExportButton||this.exportButton.set("disabled",!0),this.zoomButton.set("disabled",!0)},destroy:function(){this._unbindEvent();this.nls=this.matchingCheckBox=this.refreshButton=this.selectionMenu=this.exportButton=this.zoomButton=this.activeTable=null;this._filterPopup&&this._filterPopup.domNode&&(this._filterPopup.close(),this._filterPopup=null);this.inherited(arguments)},_bindEvent:function(){this._handlers.push(k(this.activeTable,
"data-loaded",c.hitch(this,"_onTableDataLoaded")));this._handlers.push(k(this.activeTable,"row-click",c.hitch(this,"_onTableRowClick")));this._handlers.push(k(this.activeTable,"clear-selection",c.hitch(this,"_onTableClearSelection")))},_unbindEvent:function(){for(;0<this._handlers.length;){var a=this._handlers.pop();a&&a.remove&&a.remove()}},_onTableDataLoaded:function(){this.resetButtonStatus()},_onTableRowClick:function(){this.resetButtonStatus();var a=this._resourceManager.featureTableSet,b;for(b in a){var c=
a[b];c!==this.activeTable&&c.clearSelection(!1)}},_onTableClearSelection:function(){this.resetButtonStatus()},_showSelectedRecords:function(){this.activeTable&&(this.activeTable.toggleSelectedRecords(),this.activeTable.showSelected?this.showSelectedRecords.set("label",this.nls.showAllRecords):this.showSelectedRecords.set("label",this.nls.showSelectedRecords));this.emit("show-selected-records",{layerInfoId:c.getObject("layerInfo.id",!1,this.activeTable)?this.activeTable.layerInfo.id:null})},_showRelatedRecords:function(){this.emit("show-related-records",
{layerInfoId:c.getObject("layerInfo.id",!1,this.activeTable)?this.activeTable.layerInfo.id:null,objectIds:this.activeTable?this.activeTable.getSelectedRows():null})},_showFilter:function(){this.activeTable&&(this.activeTable.showRefreshing(!0),this.activeTable.getLayerDefinition().then(c.hitch(this,function(a){if(this.domNode){a=c.clone(a);var b=this.activeTable,e=b.getFilterableFields();a.fields=e;var d=new x({noFilterTip:this.nls.noFilterTip,style:"width:100%;margin-top:22px;"});this._filterPopup=
new w({titleLabel:this.nls.filter,width:720,height:485,content:d,buttons:[{label:this.nls.ok,onClick:c.hitch(this,function(){var a=d.toJson();a&&a.expr?(b.setFilterObj(a),b.clearSelection(!1),b.startQuery(),this._filterPopup.close(),this._filterPopup=null):new l({message:this.nls.setFilterTip})})},{label:this.nls.cancel}]});(e=b.getFilterObj())?d.buildByFilterObj(b.layer.url,e,a):d.buildByExpr(b.layer.url,null,a)}}),c.hitch(this,function(a){this.domNode&&console.error(a)})).always(c.hitch(this,function(){this.activeTable.showRefreshing(!1)})));
this.emit("show-filter",{layerInfoId:c.getObject("layerInfo.id",!1,this.activeTable)?this.activeTable.layerInfo.id:null})},_toggleColumns:function(){this.activeTable&&this.activeTable.toggleColumns();this.emit("toggle-columns",{layerInfoId:c.getObject("layerInfo.id",!1,this.activeTable)?this.activeTable.layerInfo.id:null})},_onExportFiles:function(){if(this.activeTable)var a=new l({message:this.nls.exportMessage,titleLabel:this.nls.exportFiles,autoHeight:!0,buttons:[{label:this.nls.ok,onClick:c.hitch(this,
function(){this._exportToCSV();a.close()})},{label:this.nls.cancel}]});this.emit("export-csv",{layerInfoId:c.getObject("layerInfo.id",!1,this.activeTable)?this.activeTable.layerInfo.id:null})},_exportToCSV:function(){this.activeTable.exportToCSV()},_zoomTo:function(){this.activeTable&&this.activeTable.zoomTo()},_clearSelection:function(){this.activeTable&&this.activeTable.clearSelection(!0)},_refresh:function(){this.activeTable&&this.activeTable.refresh()},_onCloseBtnClicked:function(){this.emit("click-close")}})});