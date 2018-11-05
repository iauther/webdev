/*
 *  written by guohui, all right be reserved. 
 *  chengdu/sichuan/china. iauther@163.com
 *  2018/11/3 16:08:28
*/

function Area(x,y,w,h)
{
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}

function tStyle(font,size,width,color,bold)
{
    this.font = font;
    this.size = size;
    this.color = color;
    this.width = width;
    this.bold = bold;
}




var Widget=(function() {
    var _proto=Widget.prototype;
    
    //常数类
    var STAGE       = Laya.Stage;
    var EVENT       = Laya.Event;
    var WEBGL       = Laya.WebGL;
    var BROWSER     = Laya.Browser;
    
	var Utils       = Laya.Utils;
	var ClassUtils  = Laya.ClassUtils;
	
	//事件类
	var Log         = Laya.Log;
	var Timer       = Laya.Timer;
	var Handler     = Laya.Handler;
	var Loader      = Laya.Loader;
	var Socket      = Laya.Socket;
	var Mouse       = Laya.Mouse;
	var Keyboard    = Laya.Keyboard;
	
	//var Dragging  = Laya.Dragging;
	//var Ease      = Laya.Ease;
	//var HitArea   = Laya.HitArea;
	var MouseManager = Laya.MouseManager;
	var TouchManager = Laya.TouchManager;
	var KeyBoardManager = Laya.KeyBoardManager;
	
	//资源类
	var Font        = Laya.Font;
	var Color       = Laya.Color;
	var Bitmap      = Laya.Bitmap;
	var Resource    = Laya.Resource;
	var Dictionary  = Laya.Dictionary;
	var LocalStorage  = Laya.LocalStorage;
	var LoaderManager = Laya.LoaderManager;
	//var ResourceManager = Laya.ResourceManager;
	
	//控件类
	var Box         = Laya.Box;
	var Text        = Laya.Text;
	var List        = Laya.List;
    var Clip        = Laya.Clip;
    var Label       = Laya.Label;
    var Image       = Laya.Image;
    var Panel       = Laya.Panel;
    var Label       = Laya.Label;
    var Input       = Laya.Input;
    var Button      = Laya.Button;
    var Dialog      = Laya.Dialog;
    var ComboBox    = Laya.ComboBox;
    var CheckBox    = Laya.CheckBox;
    var ColorPicker = Laya.ColorPicker;
    var ProgressBar = Laya.ProgressBar;
    var TextInput   = Laya.TextInput;
    var HScrollBar  = Laya.HScrollBar;
	var VScrollBar  = Laya.VScrollBar;
    var TextArea    = Laya.TextArea;
    var RadioGroup  = Laya.RadioGroup;
    
    //抽象类
    var Texture     = Laya.Texture;
    var Graphics    = Laya.Graphics;
    var Sprite      = Laya.Sprite;
    var Filter      = Laya.Filter;
    var Stage       = Laya.stage;
    
    //动画类
    var Ease        = Laya.Ease;
    var Tween       = Laya.Tween;
    var TimeLine    = Laya.TimeLine;
    var Animation   = Laya.Animation;
    var FrameAnimation   = Laya.FrameAnimation;
    var EffectAnimation  = Laya.EffectAnimation;
    var GraphicAnimation = Laya.GraphicAnimation;
    
	//LayaRender
	var Render      = Laya.Render;
	var Context     = Laya.Context;
	var RenderContext = Laya.RenderContext;
	
	
	//声音类
    //var Sound = Laya.Sound
    //var SoundManager = Laya.SoundManager
    //var AudioSound = Laya.AudioSound
	//var SoundChannel = Laya.SoundChannel
	//var AudioSoundChannel = Laya.AudioSoundChannel;
    //var WebAudioSoundChannel = Laya.WebAudioSoundChannel;
    
    
    //sp = new Sprite();
    //Stage.addChild(sp);
    //sp.graphics.drawLine
    //sp.scale(scaleValue, scaleValue);
    //Stage.addChild(sp);
	//sp.pivot(55, 72);
	//sp.size();
    
    Laya.init(BROWSER.clientWidth, BROWSER.clientHeight, WEBGL);
    Stage.alignV = STAGE.ALIGN_MIDDLE;
    Stage.alignH = STAGE.ALIGN_CENTER;
	Stage.scaleMode = STAGE.SCALE_SHOWALL;
	Stage.screenMode = STAGE.SCREEN_HORIZONTAL;//STAGE.SCREEN_VERTICAL;
	Stage.bgColor = "#232628";
    
    _proto.Line=function() {
        
    }
    
    _proto.Rect=function() {
        
    }
    
    _proto.Circle=function() {
        
    }

    _proto.Tips=function() {
        
    }

    _proto.Progress=function() {
        
    }
    
    _proto.Box=function() {
        
    }
    
    _proto.ListBox=function() {
        
    }
    
    _proto.Dialog=function() {
        
    }
    
    _proto.CheckBox=function() {
        
    }
    
    _proto.ComboBox=function() {
        
    }
    
    _proto.Tree=function() {
        
    }
    
    _proto.ScrollBar=function() {
        
    }
    
    _proto.Button=function(parent,area,txt,skin) {
        var btn = new Button(skin);
        
        btn.pos(area.x, area.y);
        btn.size(area.w, area.h);
        
        parent.addChild(hs);
    }

    _proto.Select=function() {
        
    }

    _proto.MultiSelect=function() {
        
    }

    _proto.HSlider=function (parent,area,min,max,val,tik,skin,fn) {
        var hs = new HSlider();
        
        hs.skin = skin;
        hs.width = area.w;
		hs.pos(area.x,area.y);
		hs.min = min;
		hs.max = max;
		hs.value = val;
		hs.tick = 1;

		hs.changeHandler = new Handler(this,onChange);
		parent.addChild(hs);
		
		function onChange(value) {
    		console.log("HSlider:" + value);
    	}
    }
    
    _proto.VSlider=function (parent,area,min,max,val,tik,skin,fn) {
        var vs = new VSlider();
        
        vs.skin = skin;
        vs.height = area.h;
		vs.pos(area.x,area.y);
		vs.min = min;
		vs.max = max;
		vs.value = val;
		vs.tick = tik;

		vs.changeHandler = new Handler(this,onChange);
		parent.addChild(vs);
		
		function onChange(value) {
    		console.log("VSlider:" + value);
    	}
    }

    _proto.Label=function(parent,area,txt,tStyle) {
        var la = new Label();
        
        la.font = tStyle.font;
		la.text = txt;
		la.fontSize = tStyle.size;
		la.color = tStyle.color;
        
        parent.addChild(la);
    }

    _proto.TextArea=function(parent,area,txt,skin,tStyle) {
        var ta = new TextArea(txt);
        
        ta.skin = skin;
        ta.font = tStyle.font;
        ta.fontSize = tStyle.size;
        ta.bold = tStyle.bold;
        ta.color = tStyle.color;
        ta.pos(area.x, area.y);
        ta.size(area.w, area.h);

        //ta.padding = "70,8,8,8";
        parent.addChild(ta);
    }
    
    _proto.Menu=function() {
        
    }
    
    _proto.Table=function() {
        
    }
    
    _proto.Window=function() {
        
    }
    
    //Stage.addChild(btn);
})()





















