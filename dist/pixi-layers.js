/*! Project:astar, Create:FWS 2019.10.29 15:21, Update:FWS 2019.10.31 19:30 */ 
var pixi_display;!function(e){Object.assign(PIXI.Container.prototype,{render:function(e){if(!this._activeParentLayer||this._activeParentLayer==e._activeLayer){if(!this.visible)return void(this.displayOrder=0);this.displayOrder=e.incDisplayOrder(),this.worldAlpha<=0||!this.renderable||(e._activeLayer=null,this.containerRenderWebGL(e),e._activeLayer=this._activeParentLayer)}},renderCanvas:function(e){if(!this._activeParentLayer||this._activeParentLayer==e._activeLayer){if(!this.visible)return void(this.displayOrder=0);this.displayOrder=e.incDisplayOrder(),this.worldAlpha<=0||!this.renderable||(e._activeLayer=null,this.containerRenderCanvas(e),e._activeLayer=this._activeParentLayer)}},containerRenderWebGL:PIXI.Container.prototype.render,containerRenderCanvas:PIXI.Container.prototype.renderCanvas})}(pixi_display||(pixi_display={})),Object.assign(PIXI.DisplayObject.prototype,{parentLayer:null,_activeParentLayer:null,parentGroup:null,zOrder:0,zIndex:0,updateOrder:0,displayOrder:0,layerableChildren:!0,isLayer:!1}),PIXI.ParticleContainer?PIXI.ParticleContainer.prototype.layerableChildren=!1:PIXI.ParticleContainer&&(PIXI.ParticleContainer.prototype.layerableChildren=!1);var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),pixi_display;!function(e){var t=PIXI.utils,r=function(e){function t(t,r){var i=e.call(this)||this;return i._activeLayer=null,i._activeStage=null,i._activeChildren=[],i._lastUpdateId=-1,i.useRenderTexture=!1,i.useDoubleBuffer=!1,i.sortPriority=0,i.clearColor=new Float32Array([0,0,0,0]),i.canDrawWithoutLayer=!1,i.canDrawInParentStage=!0,i.zIndex=0,i.enableSort=!1,i._tempResult=[],i._tempZero=[],i.useZeroOptimization=!1,i.zIndex=t,i.enableSort=!!r,"function"==typeof r&&i.on("sort",r),i}return __extends(t,e),t.prototype.doSort=function(e,r){if(this.listeners("sort",!0))for(var i=0;i<r.length;i++)this.emit("sort",r[i]);this.useZeroOptimization?this.doSortWithZeroOptimization(e,r):r.sort(t.compareZIndex)},t.compareZIndex=function(e,t){return e.zOrder<t.zOrder?-1:e.zOrder>t.zOrder?1:e.updateOrder-t.updateOrder},t.prototype.doSortWithZeroOptimization=function(e,t){throw new Error("not implemented yet")},t.prototype.clear=function(){this._activeLayer=null,this._activeStage=null,this._activeChildren.length=0},t.prototype.addDisplayObject=function(e,t){this.check(e),t._activeParentLayer=this._activeLayer,this._activeLayer?this._activeLayer._activeChildren.push(t):this._activeChildren.push(t)},t.prototype.foundLayer=function(e,r){this.check(e),null!=this._activeLayer&&t.conflict(),this._activeLayer=r,this._activeStage=e},t.prototype.foundStage=function(e){this._activeLayer||this.canDrawInParentStage||this.clear()},t.prototype.check=function(e){if(this._lastUpdateId<t._layerUpdateId)this._lastUpdateId=t._layerUpdateId,this.clear(),this._activeStage=e;else if(this.canDrawInParentStage){for(var r=this._activeStage;r&&r!=e;)r=r._activeParentStage;if(this._activeStage=r,null==r)return void this.clear()}},t.conflict=function(){t._lastLayerConflict+5e3<Date.now()&&(t._lastLayerConflict=Date.now(),console.log("PIXI-display plugin found two layers with the same group in one stage - that's not healthy. Please place a breakpoint here and debug it"))},t._layerUpdateId=0,t._lastLayerConflict=0,t}(t.EventEmitter);e.Group=r}(pixi_display||(pixi_display={}));var pixi_display;!function(e){var t=PIXI.interaction.InteractionManager;Object.assign(t.prototype,{_queue:[[],[]],_displayProcessInteractive:function(e,t,r,i,n){if(!t||!t.visible)return 0;var a=0,s=i=t.interactive||i;t.hitArea&&(s=!1),t._activeParentLayer&&(n=!1);var o=t._mask;r<Infinity&&o&&(o.containsPoint(e)||(n=!0)),r<Infinity&&t.filterArea&&(t.filterArea.contains(e.x,e.y)||(n=!0));var u=t.children;if(t.interactiveChildren&&u)for(var l=u.length-1;l>=0;l--){var h=u[l],d=this._displayProcessInteractive(e,h,r,s,n);if(d){if(!h.parent)continue;a=d,r=d}}return i&&(n?t.interactive&&this._queueAdd(t,0):(r<t.displayOrder&&(t.hitArea?(t.worldTransform.applyInverse(e,this._tempPoint),t.hitArea.contains(this._tempPoint.x,this._tempPoint.y)&&(a=t.displayOrder)):t.containsPoint&&t.containsPoint(e)&&(a=t.displayOrder)),t.interactive&&this._queueAdd(t,a===Infinity?0:a))),a},processInteractive:function(e,t,r,i,n){var a=null,s=null;e.data&&e.data.global?(a=e,s=a.data.global):s=e,this._startInteractionProcess(),this._displayProcessInteractive(s,t,i?0:Infinity,!1),this._finishInteractionProcess(a,r)},_startInteractionProcess:function(){this._eventDisplayOrder=1,this._queue||(this._queue=[[],[]]),this._queue[0].length=0,this._queue[1].length=0},_queueAdd:function(e,t){var r=this._queue;if(t<this._eventDisplayOrder)r[0].push(e);else{if(t>this._eventDisplayOrder){this._eventDisplayOrder=t;for(var i=r[1],n=0,a=i.length;n<a;n++)r[0].push(i[n]);r[1].length=0}r[1].push(e)}},_finishInteractionProcess:function(e,t){for(var r=this._queue,i=r[0],n=0,a=i.length;n<a;n++)e?t&&t(e,i[n],!1):t(i[n],!1);i=r[1];for(var n=0,a=i.length;n<a;n++)e?(e.target||(e.target=i[n]),t&&t(e,i[n],!0)):t(i[n],!0);var s=this.delayedEvents;if(s&&s.length){e.stopPropagationHint=!1;var o=s.length;this.delayedEvents=[];for(var u=0;u<o;u++){var l=s[u],h=l.displayObject,d=l.eventString,p=l.eventData;p.stopsPropagatingAt===h&&(p.stopPropagationHint=!0),this.dispatchEvent(h,d,p)}}}})}(pixi_display||(pixi_display={}));var pixi_display;!function(e){var t=function(){function e(e){this.layer=e,this.renderTexture=null,this.doubleBuffer=null,this.currentBufferIndex=0,this._tempRenderTarget=null,this._tempRenderTargetSource=new PIXI.Rectangle}return e.prototype.initRenderTexture=function(e){var t=e?e.screen.width:100,r=e?e.screen.height:100,i=e?e.resolution:PIXI.settings.RESOLUTION;this.renderTexture=PIXI.RenderTexture.create({width:t,height:r,resolution:i}),this.layer.group.useDoubleBuffer&&(this.doubleBuffer=[PIXI.RenderTexture.create({width:t,height:r,resolution:i}),PIXI.RenderTexture.create({width:t,height:r,resolution:i})])},e.prototype.getRenderTexture=function(){return this.renderTexture||this.initRenderTexture(),this.renderTexture},e.prototype.pushTexture=function(e){var t=e.screen;this.renderTexture||this.initRenderTexture(e);var r=this.renderTexture,i=this.layer.group,n=this.doubleBuffer;if(r.width===t.width&&r.height===t.height&&r.baseTexture.resolution===e.resolution||(r.baseTexture.resolution=e.resolution,r.resize(t.width,t.height),n&&(n[0].baseTexture.resolution=e.resolution,n[0].resize(t.width,t.height),n[1].baseTexture.resolution=e.resolution,n[1].resize(t.width,t.height))),this._tempRenderTarget=e.renderTexture.current,this._tempRenderTargetSource.copyFrom(e.renderTexture.sourceFrame),e.batch.flush(),i.useDoubleBuffer){var a=n[this.currentBufferIndex];a.baseTexture._glTextures[e.CONTEXT_UID]||(e.renderTexture.bind(a,undefined,undefined),e.texture.bind(a),i.clearColor&&e.renderTexture.clear(i.clearColor)),e.texture.unbind(r),r.baseTexture._glTextures=a.baseTexture._glTextures,r.baseTexture.framebuffer=a.baseTexture.framebuffer,a=n[1-this.currentBufferIndex],e.renderTexture.bind(a,undefined,undefined)}else e.renderTexture.bind(r,undefined,undefined);i.clearColor&&e.renderTexture.clear(i.clearColor);var s=e.filter.defaultFilterStack;s.length>1&&(s[s.length-1].renderTexture=e.renderTexture.current)},e.prototype.popTexture=function(e){e.batch.flush();var t=e.filter.defaultFilterStack;t.length>1&&(t[t.length-1].renderTexture=this._tempRenderTarget),e.renderTexture.bind(this._tempRenderTarget,this._tempRenderTargetSource,undefined),this._tempRenderTarget=null;var r=this.renderTexture,i=this.layer.group,n=this.doubleBuffer;if(i.useDoubleBuffer){e.texture.unbind(r),this.currentBufferIndex=1-this.currentBufferIndex;var a=n[this.currentBufferIndex];r.baseTexture._glTextures=a.baseTexture._glTextures,r.baseTexture.framebuffer=a.baseTexture.framebuffer}},e.prototype.destroy=function(){this.renderTexture&&(this.renderTexture.destroy(),this.doubleBuffer&&(this.doubleBuffer[0].destroy(!0),this.doubleBuffer[1].destroy(!0)))},e}();e.LayerTextureCache=t;var r=function(r){function i(t){void 0===t&&(t=null);var i=r.call(this)||this;return i.isLayer=!0,i.group=null,i._activeChildren=[],i._tempChildren=null,i._activeStageParent=null,i._sortedChildren=[],i._tempLayerParent=null,i.insertChildrenBeforeActive=!0,i.insertChildrenAfterActive=!0,null!=t?(i.group=t,i.zIndex=t.zIndex):i.group=new e.Group(0,!1),i._tempChildren=i.children,i}return __extends(i,r),i.prototype.beginWork=function(e){var t=this._activeChildren;this._activeStageParent=e,this.group.foundLayer(e,this);var r=this.group._activeChildren;t.length=0;for(var i=0;i<r.length;i++)r[i]._activeParentLayer=this,t.push(r[i]);r.length=0},i.prototype.endWork=function(){for(var e=this.children,t=this._activeChildren,r=this._sortedChildren,i=0;i<t.length;i++)this.emit("display",t[i]);if(r.length=0,this.insertChildrenBeforeActive)for(var i=0;i<e.length;i++)r.push(e[i]);for(var i=0;i<t.length;i++)r.push(t[i]);if(!this.insertChildrenBeforeActive&&this.insertChildrenAfterActive)for(var i=0;i<e.length;i++)r.push(e[i]);this.group.enableSort&&this.doSort()},Object.defineProperty(i.prototype,"useRenderTexture",{get:function(){return this.group.useRenderTexture},set:function(e){this.group.useRenderTexture=e},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"useDoubleBuffer",{get:function(){return this.group.useDoubleBuffer},set:function(e){this.group.useDoubleBuffer=e},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"clearColor",{get:function(){return this.group.clearColor},set:function(e){this.group.clearColor=e},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"sortPriority",{get:function(){return this.group.sortPriority},set:function(e){this.group.sortPriority=e},enumerable:!0,configurable:!0}),i.prototype.getRenderTexture=function(){return this.textureCache||(this.textureCache=new t(this)),this.textureCache.getRenderTexture()},i.prototype.updateDisplayLayers=function(){},i.prototype.doSort=function(){this.group.doSort(this,this._sortedChildren)},i.prototype._preRender=function(e){return(!this._activeParentLayer||this._activeParentLayer==e._activeLayer)&&(this.visible?(this.displayOrder=e.incDisplayOrder(),!(this.worldAlpha<=0||!this.renderable)&&(this.children!==this._sortedChildren&&this._tempChildren!=this.children&&(this._tempChildren=this.children),this._boundsID++,this.children=this._sortedChildren,this._tempLayerParent=e._activeLayer,e._activeLayer=this,!0)):(this.displayOrder=0,!1))},i.prototype._postRender=function(e){this.children=this._tempChildren,e._activeLayer=this._tempLayerParent,this._tempLayerParent=null},i.prototype.render=function(e){this._preRender(e)&&(this.group.useRenderTexture&&(this.textureCache||(this.textureCache=new t(this)),this.textureCache.pushTexture(e)),this.containerRenderWebGL(e),this._postRender(e),this.group.useRenderTexture&&this.textureCache.popTexture(e))},i.prototype.destroy=function(e){this.textureCache&&(this.textureCache.destroy(),this.textureCache=null),r.prototype.destroy.call(this,e)},i}(PIXI.Container);e.Layer=r,r.prototype.renderCanvas=function(e){this._preRender(e)&&(this.containerRenderCanvas(e),this._postRender(e))}}(pixi_display||(pixi_display={}));var pixi_display;!function(e){var t=function(t){function r(){var e=t.call(this)||this;return e.isStage=!0,e._tempGroups=[],e._activeLayers=[],e._activeParentStage=null,e}return __extends(r,t),r.prototype.clear=function(){this._activeLayers.length=0,this._tempGroups.length=0},r.prototype.destroy=function(e){this.clear(),t.prototype.destroy.call(this,e)},r.prototype._addRecursive=function(e){if(e.visible){if(e.isLayer){var t=e;this._activeLayers.push(t),t.beginWork(this)}if(e!=this&&e.isStage){return void e.updateAsChildStage(this)}var i=e.parentGroup;null!=i&&i.addDisplayObject(this,e);var n=e.parentLayer;if(null!=n&&(i=n.group,i.addDisplayObject(this,e)),e.updateOrder=++r._updateOrderCounter,!(e.alpha<=0||!e.renderable||!e.layerableChildren||i&&i.sortPriority)){var a=e.children;if(a&&a.length)for(var s=0;s<a.length;s++)this._addRecursive(a[s])}}},r.prototype._addRecursiveChildren=function(e){if(!(e.alpha<=0)&&e.renderable&&e.layerableChildren){var t=e.children;if(t&&t.length)for(var r=0;r<t.length;r++)this._addRecursive(t[r])}},r.prototype._updateStageInner=function(){this.clear(),this._addRecursive(this);for(var e=this._activeLayers,t=0;t<e.length;t++){var r=e[t];if(r.group.sortPriority){r.endWork();for(var i=r._sortedChildren,n=0;n<i.length;n++)this._addRecursiveChildren(i[n])}}for(var t=0;t<e.length;t++){var r=e[t];r.group.sortPriority||r.endWork()}},r.prototype.updateAsChildStage=function(e){this._activeParentStage=e,r._updateOrderCounter=0,this._updateStageInner()},r.prototype.updateStage=function(){this._activeParentStage=null,e.Group._layerUpdateId++,this._updateStageInner()},r._updateOrderCounter=0,r}(e.Layer);e.Stage=t}(pixi_display||(pixi_display={}));var pixi_display;!function(e){Object.assign(PIXI.Renderer.prototype,{_lastDisplayOrder:0,_activeLayer:null,incDisplayOrder:function(){return++this._lastDisplayOrder},_oldRender:PIXI.Renderer.prototype.render,render:function(e,t,r,i,n){t||(this._lastDisplayOrder=0),this._activeLayer=null,e.isStage&&e.updateStage(),this._oldRender(e,t,r,i,n)}});var t=PIXI.CanvasRenderer;t&&Object.assign(t.prototype,{_lastDisplayOrder:0,_activeLayer:null,incDisplayOrder:function(){return++this._lastDisplayOrder},_oldRender:t.prototype.render,render:function(e,t,r,i,n){t||(this._lastDisplayOrder=0),this._activeLayer=null,e.isStage&&e.updateStage(),this._oldRender(e,t,r,i,n)}})}(pixi_display||(pixi_display={}));var pixi_display;!function(e){PIXI.display=e}(pixi_display||(pixi_display={}));