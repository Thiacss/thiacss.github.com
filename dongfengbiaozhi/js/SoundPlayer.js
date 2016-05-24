/**
 * @author lufy
 */
function SoundPlayer(){
	var self = this;
	self.loadIndex = 0;
	self.get = new LSound();
	self.get.parent = self;
	self.jump = new LSound();
	self.jump.parent = self;
}
SoundPlayer.prototype.loadSound = function(){
	var self = this;
	if(self.loadIndex == 0){
		self.loadIndex++;
		self.getLoad();
	}else if(self.loadIndex == 1){
		self.loadIndex++;
		self.jump.addEventListener(LEvent.COMPLETE, self.jumpLoadComplete);
		self.jump.load("./images/pa4.mp3");
	}
};
SoundPlayer.prototype.getLoad = function () {
    var self = this;
    self.get.addEventListener(LEvent.COMPLETE, self.getLoadComplete);
    self.get.load("./images/pa4.mp3");
};
SoundPlayer.prototype.playSound = function (name) {
    var self = this;
    switch (name) {
        case "get":
            if (!self.getIsLoad) return;
            self.get.close();
            self.get.play;
            break;
        case "jump":
            if (!self.jumpIsLoad) return;
            self.jump.close();
            self.jump.play;
            break;
    }
};
SoundPlayer.prototype.getLoadComplete = function (event) {
    var self = event.currentTarget;
    self.parent.getIsLoad = true;
};
SoundPlayer.prototype.jumpLoadComplete = function(event){
	var self = event.currentTarget;
	self.parent.jumpIsLoad = true;
};
