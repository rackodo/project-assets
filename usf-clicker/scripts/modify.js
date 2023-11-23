const cap = (str) => {return(str.charAt(0).toUpperCase() + str.slice(1))};

export function Modify(Game) {
	// Update Info Page
	console.log("Adding custom Info...")
	fetch('https://assets.rackodo.dev/usf-clicker/text/modInfo.html')
		.then((response) => response.text().then(
			function(text) {
				Game.updateLog = text + Game.updateLog
				console.log("Custom info added!")
			}
		)
	)

	// Update Images
	console.log("Adding custom sprites...")
	fetch('https://assets.rackodo.dev/usf-clicker/text/fileList.txt')
	.then(response => response.text())
	.then((data) => {
		data = data.split("\n")
		data.pop()
		data.forEach(element => {
			Game.Loader.Replace(element, `https://assets.rackodo.dev/usf-clicker/images/${element}`)
		});
		console.log("All sprites updated!")
	});

	console.log("Adding custom styling...")
	var newCss = document.createElement('style');
	newCss.type = 'text/css';
	// Add icons file
	newCss.innerHTML = `
	body .icon,body .crate,body .usesIcon{background-image:url("https://assets.rackodo.dev/usf-clicker/images/icons.png")}` +
    `.product .icon,.product .icon.off,.tinyProductIcon{background-image:url("https://assets.rackodo.dev/usf-clicker/images/buildings.png")}` +
	`.separatorLeft, .separatorRight {background: url(img/panelGradientTop.png) no-repeat top left,url(img/panelGradientBottom.png) no-repeat bottom left,url(https://assets.rackodo.dev/usf-clicker/images/panelVertical.png) repeat-y}` +
	`.separatorBottom, .storeSection {background: url(img/panelGradientLeft.png) no-repeat top left,url(img/panelGradientRight.png) no-repeat top right,url(https://assets.rackodo.dev/usf-clicker/images/panelHorizontal.png) repeat-x}` +
	`.panelButton {background: url(https://assets.rackodo.dev/usf-clicker/images/panelMenu3.png)}` +
	`.price:before {background: url(https://assets.rackodo.dev/usf-clicker/images/money.png)}`;
	
	document.head.appendChild(newCss);
	console.log("Custom styling added!")
	
	console.log("Loading custom text...")
	Langs = {
		'EN':{file:'EN',nameEN:'English',name:'English',changeLanguage:'Language',icon:0,w:1,isEN:true},
		'FR':{file:'FR',nameEN:'French',name:'Fran&ccedil;ais',changeLanguage:'Langue',icon:0,w:1},
		'DE':{file:'DE',nameEN:'German',name:'Deutsch',changeLanguage:'Sprache',icon:0,w:1},
		'NL':{file:'NL',nameEN:'Dutch',name:'Nederlands',changeLanguage:'Taal',icon:0,w:1},
		'CS':{file:'CS',nameEN:'Czech',name:'&#x10C;e&#x161;tina',changeLanguage:'Jazyk',icon:0,w:1},
		'PL':{file:'PL',nameEN:'Polish',name:'Polski',changeLanguage:'J&#281;zyk',icon:0,w:1},
		'IT':{file:'IT',nameEN:'Italian',name:'Italiano',changeLanguage:'Lingua',icon:0,w:1},
		'ES':{file:'ES',nameEN:'Spanish',name:'Espa&#xF1;ol',changeLanguage:'Idioma',icon:0,w:1},
		'PT-BR':{file:'PT-BR',nameEN:'Portuguese',name:'Portugu&#xEA;s',changeLanguage:'Idioma',icon:0,w:1},
		'JA':{file:'JA',nameEN:'Japanese',name:'&#x65E5;&#x672C;&#x8A9E;',changeLanguage:'&#35328;&#35486;',icon:0,w:1.5},
		'ZH-CN':{file:'ZH-CN',nameEN:'Chinese',name:'&#x4E2D;&#x6587;',changeLanguage:'&#35821;&#35328;',icon:0,w:1.5},
		'KO':{file:'KO',nameEN:'Korean',name:'&#xD55C;&#xAE00;',changeLanguage:'&#xC5B8;&#xC5B4;',icon:0,w:1.5},
		'RU':{file:'RU',nameEN:'Russian',name:'&#x420;&#x443;&#x441;&#x441;&#x43A;&#x438;&#x439;',changeLanguage:'&#1071;&#1079;&#1099;&#1082;',icon:0,w:1.2},
		'USF':{file:'USF',nameEn:'US Furries',name:'US Furries Mod',changeLanguage:'UwU',icon:0,w:1.2}
	};

	LoadLang('https://assets.rackodo.dev/usf-clicker/scripts/USF.js', function() {
		console.log("Changing building data...")
		for (let i = 0; i < Game.ObjectsById.length; i++) {
			Game.ObjectsById[i].osingle = Game.ObjectsById[i].single
			Game.ObjectsById[i].oplural = Game.ObjectsById[i].plural
			Game.ObjectsById[i].dname = loc(Game.ObjectsById[i].dname, 'USF')
			Game.ObjectsById[i].desc = loc(FindLocStringByPart(Game.ObjectsById[i].name +' quote'), 'USF')
			Game.ObjectsById[i].single = loc(Game.ObjectsById[i].single, 'USF')
			Game.ObjectsById[i].plural = loc(Game.ObjectsById[i].plural, 'USF')
			Game.ObjectsById[i].bsingle = loc(Game.ObjectsById[i].bsingle, 'USF')
			Game.ObjectsById[i].bplural = loc(Game.ObjectsById[i].bplural, 'USF')
			Game.ObjectsById[i].refresh()

			LocalizeUpgradesAndAchievs()
		}
		console.log("Building data updated!")

		for (let i = 0; i < Game.UpgradesN; i++) {
			Game.UpgradesById[i].ddesc = Game.UpgradesById[i].ddesc.replace("Grandmas","Zekes")
			Game.UpgradesById[i].ddesc = Game.UpgradesById[i].ddesc.replace("grandmas","zekes")
			Game.UpgradesById[i].ddesc = Game.UpgradesById[i].ddesc.replace("grandma","zeke")
			Game.UpgradesById[i].ddesc = Game.UpgradesById[i].ddesc.replace("Cookie","Shugat")
			Game.UpgradesById[i].ddesc = Game.UpgradesById[i].ddesc.replace("Grandmas","Zekes")
			Game.UpgradesById[i].ddesc = Game.UpgradesById[i].ddesc.replace("CpS","SpS")
			if(Game.UpgradesById[i].buildingTie != 0) {
				// Game.UpgradesById[i].ddesc = "a"
				// Game.UpgradesById[i].ddesc = Game.UpgradesById[i].ddesc.replace(cap(Game.UpgradesById[i].buildingTie.oplural)),cap(Game.UpgradesById[i].buildingTie.plural)
				Game.UpgradesById[i].ddesc = Game.UpgradesById[i].ddesc.replace(
					cap(Game.UpgradesById[i].buildingTie.oplural),
					cap(Game.UpgradesById[i].buildingTie.plural))
				// console.log(test)
			}
		}
	},"what the fuck")
	console.log("Custom text loaded!")

	Game.grandmaNames = [
		"Granny",
		"Gusher",
		"Ethel",
		"Edna",
		"Doris",
		"Maud",
		"Hilda",
		"Gladys",
		"Michelle",
		"Michele",
		"Phyllis",
		"Millicent",
		"Muriel",
		"Myrtle",
		"Mildred",
		"Mavis",
		"Helen",
		"Gloria",
		"Sheila",
		"Betty",
		"Gertrude",
		"Agatha",
		"Beryl",
		"Agnes",
		"Pearl",
		"Precious",
		"Ruby",
		"Vera",
		"Bonnie",
		"Ada",
		"Bunny",
		"Cookie",
		"Darling",
		"Gaga",
		"GamGam",
		"Memaw",
		"Mimsy",
		"Peanut",
		"Nana",
		"Nan",
		"Tootsie",
		"Shugat",
		"Kada",
		"Midley",
		"Furvus",
		"Reo",
		"Milo"
	]

	var PlaySound = function(url,vol,pitchVar)
	{
		//url : the url of the sound to play (will be cached so it only loads once)
		//vol : volume between 0 and 1 (multiplied by game volume setting); defaults to 1 (full volume)
		//(DISABLED) pitchVar : pitch variance in browsers that support it (Firefox only at the moment); defaults to 0.05 (which means pitch can be up to -5% or +5% anytime the sound plays)
		var volume=1;
		var volumeSetting=Game.volume;
		if (typeof vol!=='undefined') volume=vol;
		if (volume<-5) {volume+=10;volumeSetting=Game.volumeMusic;}
		if (!volumeSetting || volume==0) return 0;
		if (typeof Sounds[url]==='undefined')
		{
			//sound isn't loaded, cache it
			Sounds[url]=new Audio("https://assets.rackodo.dev/usf-clicker/snd/guh.mp3");
			//Sounds[url].load();
		}
		else if (Sounds[url].readyState>=2 && SoundInsts[SoundI].paused)
		{
			var sound=SoundInsts[SoundI];
			SoundI++;
			if (SoundI>=12) SoundI=0;
			//sound.currentTime=0;
			sound.volume=Math.pow(volume*volumeSetting/100,2);
			if (pitchSupport)
			{
				var pitchVar=(typeof pitchVar==='undefined')?0.05:pitchVar;
				var rate=1+(Math.random()*2-1)*pitchVar;
				sound.preservesPitch=false;
				sound.mozPreservesPitch=false;
				sound.webkitPreservesPitch=false;
				sound.playbackRate=rate;
			}
			try{sound.play();}catch(e){}
			/*
			var sound=Sounds[url].cloneNode();
			sound.volume=Math.pow(volume*volumeSetting/100,2);
			sound.onended=function(e){if (e.target){delete e.target;}};
			sound.play();*/
		}
	}
}