montageDefine("3bb6b83","ui/moviestrip.reel/image.reel/image",{dependencies:["montage/ui/component"],factory:function(e,n,t){var s=e("montage/ui/component").Component;n.Image=s.specialize({_src:{value:null},src:{set:function(e){e!==this._src&&(this._src=e,this.needsDraw=!0)}},draw:{value:function(){this._src?this._element.style.backgroundImage="url("+this._src+")":this._element.style.backgroundImage="url(assets/image/no-poster.jpg)"}}})}});