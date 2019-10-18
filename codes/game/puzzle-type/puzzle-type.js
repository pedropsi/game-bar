///////////////////////////////////////////////////////////////////////////////
//Puzzle Type (c) Pedro PSI, 2019.
//All rights reserved
///////////////////////////////////////////////////////////////////////////////

function LoadGameHTML(){
	var frameHTML="<div class='game-supra-container'>\
	<div class='game-rotation-container'>\
		<div class='game-container'>\
			<div class='game' id='gameCanvas'>\
				<div class='top'>\
					<h1 class='goal'>Puzzle Type</h1>\
				</div>\
				<div class='middle' id='letters'>\
					<div class='credits'>by Pedro PSI (2019)</div>\
				</div>\
				<div class='bottom'>\
				</div>\
			</div>\
		</div>\
	</div>\
</div>";

	PrependElement(frameHTML,".main");
}


///////////////////////////////////////////////////////////////////////////////
// Load the game bar & options

//PS links
function ObtainBGColor(){return window.getComputedStyle(document.body)["background-color"];}
function ObtainFGColor(){return window.getComputedStyle(document.body)["color"];}

function ObtainUndo(){return false;}
function ObtainRestart(){return true;}

function ObtainStateScreens(){return LevelGoals;}
var ObtainLevelLoader=LevelLoader;

function ResizeCanvas(){return ;}


var gameModules=[
"data-game-colours",
"data-game-extras",
"data-game-moves"
]

gameModules.map(LoaderInFolder("codes/game/modules"));

function P(){
	PrepareGame();
	ResumeCapturingKeys(CaptureComboKey);
	LevelLoader();
};

LoadGameHTML();
LoadStyle(pageRoot()+"codes/game/puzzle-type/puzzle-type.css");
DelayUntil(function(){return (typeof PrepareGame!=="undefined")},P);


///////////////////////////////////////////////////////////////////////////////
//Keybinding
function ObtainKeyActionsGame(){
	return {
		"A":InstructGameKeyF("A"),
		"B":InstructGameKeyF("B"),
		"C":InstructGameKeyF("C"),
		"D":InstructGameKeyF("D"),
		"E":InstructGameKeyF("E"),
		"F":InstructGameKeyF("F"),
		"G":InstructGameKeyF("G"),
		"H":InstructGameKeyF("H"),
		"I":InstructGameKeyF("I"),
		"J":InstructGameKeyF("J"),
		"K":InstructGameKeyF("K"),
		"L":InstructGameKeyF("L"),
		"M":InstructGameKeyF("M"),
		"N":InstructGameKeyF("N"),
		"O":InstructGameKeyF("O"),
		"P":InstructGameKeyF("P"),
		"Q":InstructGameKeyF("Q"),
		"R":InstructGameKeyF("R"),
		"S":InstructGameKeyF("S"),
		"T":InstructGameKeyF("T"),
		"U":InstructGameKeyF("U"),
		"V":InstructGameKeyF("V"),
		"W":InstructGameKeyF("W"),
		"X":InstructGameKeyF("X"),
		"Y":InstructGameKeyF("Y"),
		"Z":InstructGameKeyF("Z"),
		"Escape":ObtainTitleScreenLoader,
		"Backspace":InstructGameKeyF("Backspace") /*,
		"Delete":InstructGameKeyF("Delete")*/
	};
};

function ObtainKeyActionsGameBar(){
	return {
	// Game bar menus
	"Shift E"			:RequestGameFeedback,
	"Shift F"			:RequestGameFullscreen,
	"Shift H"			:RequestHint,
	"Shift L"			:RequestLevelSelector, 
	"Shift M"			:ToggleCurrentSong
	};
};


function InstructGameKeyF(key){
	return function(ev){
		ev.preventDefault();
		
		function Action(){return GameAction(key);}
		Throttle(Action,100,"Action");
	}
}


function GameAction(key){
	if(key==="Backspace"){
		var b=BackspaceLevelActions[CurLevelName()];
		if(b)
			b();
		else
			DeleteLetterAfter();
	}
	/*else if(key==="Delete"){
		DeleteActions[CurLevelName()];
		var d=DeleteActions[CurLevelName()];
		if(d)
			d();
		else
			DeleteLetterBefore();
	}	*/
	else
		LevelActions[CurLevelName()](key);
	
	UpdateLetters();
	UpdateCaret();
	CheckWin();
};


///////////////////////////////////////////////////////////////////////////////
//Levels & Actions
var LevelGoals=["Reverse","Twice","Oppose","Increase"];

var LevelActions={
	"Reverse":function(L){
		InputLetterBefore(L);
	},
	"Twice":function(L){
		InputLetter(L);
		InputLetter(L);
	},
	"Oppose":function(A){
		var Z=String.fromCharCode((25-(A.charCodeAt()-65)%26)+65); 
		InputLetter(Z);		
	},
	"Increase":function(L){
		var M=String.fromCharCode(((L.charCodeAt()-65+1)%26)+65); 
		InputLetter(M);
	}

}


var BackspaceLevelActions={
	"Reverse":DeleteLetterBefore
}

///////////////////////////////////////////////////////////////////////////////
//Manage letters and carets

function Letters(letter,beginning,deleteletter){
	if(!Letters.array)
		Letters.array=[];

	if(!letter)
		return Letters.array;
	
	if(!deleteletter){
		if(!beginning){
			Letters.array.push(letter);
			Caret(Letters.array.length);
		}
		else{
			Letters.array.unshift(letter);
			Caret(-1);
		}
	}
	else{
		if(!beginning){
			Letters.array.pop();
			Caret(Letters.array.length);
		}
		else{
			Letters.array.shift();
			Caret(-1);
		}
	}
	
	return Letters.array;
}

function Caret(position){
	if(!Caret.array)
		Caret.array=[Letters().length]; //after last one

	if(typeof position==="undefined")
		return Caret.array;
	else
		Caret.array=[position];	
}

function UpdateCaret(){
	var p=Caret()[0];
	
	if(p===-1)
		PreAddElement(CaretHTML(),"#letters");
	if(p===Letters().length)
		AddElement(CaretHTML(),"#letters");
}

function LetterHTML(L){
	return "<div class='letter'>"+L+"</div>"
}

function CaretHTML(){
	return "<div class='letter caret'> </div>"
}


function ClearLetters(){
	Letters.array=[];
	Caret(0);
	UpdateLetters();
	UpdateCaret();
}

function UpdateLetters(){
	var letters=Letters().map(LetterHTML).join("\n");
	ReplaceElement(letters,"#letters");
}


function InputLetterBefore(letter){
	Letters(letter,true);
}

function InputLetter(letter){
	Letters(letter,false);
}

function DeleteLetterBefore(){
	Letters("any",true,true);
}

function DeleteLetterAfter(){
	Letters("any",false,true);
}


///////////////////////////////////////////////////////////////////////////////
//Game execution

function ObtainTitleScreenLoader(){
	ReplaceElement("Puzzle Type",".goal");
	Letters.array="by Pedro PSI (2019)".split("");
	UpdateLetters();
};

function LevelLoader(){
	ClearLetters();
	ReplaceElement(CurLevelName(),".goal");
}

function CurLevelName(){return LevelGoals[CurrentScreen()]};//placeholder


function CheckWin(){
	var win=Letters().join("").toUpperCase()===CurLevelName().toUpperCase();
	if(win){
		MarkWonLevel();
		NextLevel();
	}
}

/*
var superpowers={
	"A":{name:"Add"				,legend:"Add any to end"							,applyto:{"end"}										,action:A};
	"B":{name:"Beginning"		,legend:"Add any to beginning"						,applyto:{"beginning"}									,action:B};
	"C":{name:"Cut"				,legend:"Cut in half, vertical or horizontally"		,applyto:{"O","B","W","M","U","T","K","X","S"}			,action:C};
	"D":{name:"Double"			,legend:"Double"									,applyto:{"C","D","V","A","J","L","I"}					,action:D};
	"E":{name:"Expand"			,legend:"Inflate a letter"							,applyto:{"B","D","P","R"}								,action:E};
	"F":{name:"Flip"			,legend:"Flip horizontal or vertically"				,applyto:{"S","Z","V","A"}								,action:F};
	"G":{name:"Germini"			,legend:"Copy to any position"						,applyto:{"all"}										,action:G};
	"H":{name:""				,legend:""											,applyto:{	}											,action:H};
	"I":{name:"Idleness"		,legend:"Do nothing"								,applyto:{"all"}										,action:I};
	"J":{name:"Jetpack"			,legend:"Fly to another position"					,applyto:{"all"}										,action:J};
	"K":{name:"Kill"			,legend:"Delete"									,applyto:{"all"}										,action:K};
	"L":{name:"Lifeline"		,legend:"Recover lost letter"						,applyto:{"all"}										,action:L};
	"M":{name:"Minus"			,legend:"Recede next letter alphabethically"		,applyto:{"next"}										,action:M};
	"N":{name:"Near minus"		,legend:"Recede previous letter alphabethically"	,applyto:{"previous"}									,action:N};
	"O":{name:"Opposite"		,legend:"Swap with the alphabetical opposite"		,applyto:{"all"}										,action:O};
	"P":{name:"Plus"			,legend:"Advance next letter alphabethically"		,applyto:{"next"}										,action:P};
	"Q":{name:"Quasi plus"		,legend:"Advance previous letter alphabethically"	,applyto:{"previous"}									,action:Q};
	"R":{name:"Rotate"			,legend:"Rotate 90 degrees in any direction"		,applyto:{"C","U","N","Z"}								,action:R};
	"S":{name:"Swap"			,legend:"Switch pair's position"					,applyto:{"all"}										,action:S};
	"T":{name:"Tail"			,legend:"Add tail"									,applyto:{"P","O","I","N","F","V"}						,action:T};
	"U":{name:"Un-tail"			,legend:"Remove tail"								,applyto:{"R","Q","L","M","E","N"}						,action:U};
	"V":{name:""				,legend:""											,applyto:{""}											,action:V};
	"W":{name:"Wish"			,legend:"Use any other superpower"					,applyto:{"all"}										,action:W};
	"X":{name:"X-ymmetry"		,legend:"Kill any assymetric"						,applyto:{"F","J","L","P","R"}							,action:X};
	"Y":{name:""				,legend:""											,applyto:{}												,action:Y};
	"Z":{name:"Zero"			,legend:"Reset to initial letter"					,applyto:{"all"}										,action:Z};	
}
*/