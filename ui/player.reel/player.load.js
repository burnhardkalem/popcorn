montageDefine("a7936d4","ui/player.reel/player",{dependencies:["montage/ui/component"],factory:function(e,t,a){var l=e("montage/ui/component").Component,i="https://www.youtube.com/embed/%s?autoplay=1&enablejsapi=1",n="%s";t.Player=l.specialize({constructor:{value:function(){this["super"]()}},player:{value:null},handleCloseButtonAction:{value:function(){this.player.src="",this.templateObjects.overlay.hide()}},_trailerId:{value:null},openTrailer:{value:function(e){this._trailerId=e,this.templateObjects.overlay.show()}},didShowOverlay:{value:function(e){if(this._trailerId){var t=i.replace(n,encodeURIComponent(this._trailerId));this.player.src!==t&&(this.player.src=t)}e.classList.add("is-shown")}},didHideOverlay:{value:function(e){this._trailerId=null,e.classList.remove("is-shown")}}})}});