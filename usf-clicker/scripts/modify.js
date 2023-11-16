export function Modify(Game) {
	// Update Info Page
	fetch('https://assets.rackodo.dev/usf-clicker/text/modInfo.html')
		.then((response) => response.text().then(
			function(text) {
				Game.updateLog = text + Game.updateLog
			}
		)
	)

	// Update Images
	fetch('https://assets.rackodo.dev/usf-clicker/text/fileList.txt')
	.then(response => response.text())
	.then((data) => {
		data = data.split("\n")
		data.pop()
		data.forEach(element => {
			Game.Loader.Replace(element, `https://assets.rackodo.dev/usf-clicker/images/${element}`)
		});
	})

	var newCss = document.createElement('style');
	newCss.type = 'text/css';
	// Add icons file
	newCss.innerHTML = 'body .icon,body .crate,body .usesIcon{background-image:url("https://assets.rackodo.dev/usf-clicker/images/icons.png")}' +
    '.product .icon,.product .icon.off,.tinyProductIcon{background-image:url("https://assets.rackodo.dev/usf-clicker/images/buildings.png")}';

	document.head.appendChild(newCss);

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

		console.log("Language loaded!")
		for (let i = 0; i < Game.ObjectsById.length; i++) {
			Game.ObjectsById[i].dname = loc(Game.ObjectsById[i].dname, 'USF')
			Game.ObjectsById[i].desc = loc(Game.ObjectsById[i].desc, 'USF')
			Game.ObjectsById[i].single = loc(Game.ObjectsById[i].single, 'USF')
			Game.ObjectsById[i].plural = loc(Game.ObjectsById[i].plural, 'USF')
			Game.ObjectsById[i].bsingle = loc(Game.ObjectsById[i].bsingle, 'USF')
			Game.ObjectsById[i].bplural = loc(Game.ObjectsById[i].bplural, 'USF')
			console.log(Game.ObjectsById[i])
			Game.ObjectsById[i].refresh()
		}
	},"what the fuck")


// 	// Replace Draw
// 	Game.Draw=function()
// 	{
// 		Game.DrawBackground();Timer.track('end of background');
		
// 		if (!Game.OnAscend)
// 		{
			
// 			var str=Beautify(Math.round(Game.cookiesd));
// 			if (Game.cookiesd>=1000000)//dirty padding
// 			{
// 				var spacePos=str.indexOf(' ');
// 				var dotPos=str.indexOf('.');
// 				var add='';
// 				if (spacePos!=-1)
// 				{
// 					if (dotPos==-1) add+='.000';
// 					else
// 					{
// 						if (spacePos-dotPos==2) add+='00';
// 						if (spacePos-dotPos==3) add+='0';
// 					}
// 				}
// 				str=[str.slice(0,spacePos),add,str.slice(spacePos)].join('');
// 			}
			
// 			str=loc("%1 cookie",{n:Math.round(Game.cookiesd),b:str});
// 			let newStr = str.toString().split("")
// 			newStr.splice(newStr.length - 7, 7)
// 			newStr = newStr.join("") + "shugats"

// 			str = newStr

// 			if (str.length>14) str=str.replace(' ','<br>');
			
// 			if (Game.prefs.monospace) str='<span class="monospace">'+str+'</span>';
// 			str=str+'<div id="cookiesPerSecond"'+(Game.cpsSucked>0?' class="wrinkled"':'')+'>'+loc("per second:")+' '+Beautify(Game.cookiesPs*(1-Game.cpsSucked),1)+'</div>';
// 			l('cookies').innerHTML=str;
// 			Timer.track('cookie amount');
			
// 			for (var i in Game.Objects)
// 			{
// 				var me=Game.Objects[i];
// 				if (me.onMinigame && me.minigame.draw && !me.muted && !Game.onMenu) me.minigame.draw();
// 			}
// 			Timer.track('draw minigames');
			
// 			if (Game.drawT%5==0)
// 			{
// 				//if (Game.prefs.monospace) {l('cookies').className='title monospace';} else {l('cookies').className='title';}
// 				var lastLocked=0;
// 				for (var i in Game.Objects)
// 				{
// 					var me=Game.Objects[i];
					
// 					//make products full-opacity if we can buy them
// 					var classes='product';
// 					var price=me.bulkPrice;
// 					if (Game.cookiesEarned>=me.basePrice || me.bought>0) {classes+=' unlocked';lastLocked=0;me.locked=0;if (me.id==19){Game.Win('Cookie Clicker');}} else {classes+=' locked';lastLocked++;me.locked=1;}
// 					if ((Game.buyMode==1 && Game.cookies>=price) || (Game.buyMode==-1 && me.amount>0)) classes+=' enabled'; else classes+=' disabled';
// 					if (lastLocked>2) classes+=' toggledOff';
// 					me.l.className=classes;
// 					//if (me.id>0) {l('productName'+me.id).innerHTML=Beautify(me.storedTotalCps/Game.ObjectsById[me.id-1].storedTotalCps,2);}
// 				}
				
// 				//make upgrades full-opacity if we can buy them
// 				var lastPrice=0;
// 				for (var i in Game.UpgradesInStore)
// 				{
// 					var me=Game.UpgradesInStore[i];
// 					if (!me.bought)
// 					{
// 						var price=me.getPrice();
// 						var canBuy=me.canBuy();//(Game.cookies>=price);
// 						var enabled=(l('upgrade'+i).className.indexOf('enabled')>-1);
// 						if ((canBuy && !enabled) || (!canBuy && enabled)) Game.upgradesToRebuild=1;
// 						if (price<lastPrice) Game.storeToRefresh=1;//is this upgrade less expensive than the previous one? trigger a refresh to sort it again
// 						lastPrice=price;
// 					}
// 					if (me.timerDisplay)
// 					{
// 						var T=me.timerDisplay();
// 						if (T!=-1)
// 						{
// 							if (!l('upgradePieTimer'+i)) l('upgrade'+i).innerHTML=l('upgrade'+i).innerHTML+'<div class="pieTimer" id="upgradePieTimer'+i+'"></div>';
// 							T=(T*144)%144;
// 							l('upgradePieTimer'+i).style.backgroundPosition=(-Math.floor(T%18))*48+'px '+(-Math.floor(T/18))*48+'px';
// 						}
// 					}
					
// 					//if (me.canBuy()) l('upgrade'+i).className='crate upgrade enabled'; else l('upgrade'+i).className='crate upgrade disabled';
// 				}
// 			}
// 			Timer.track('store');
			
// 			if (Game.PARTY)//i was bored and felt like messing with CSS
// 			{
// 				var pulse=Math.pow((Game.T%10)/10,0.5);
// 				Game.l.style.filter='hue-rotate('+((Game.T*5)%360)+'deg) brightness('+(150-50*pulse)+'%)';
// 				Game.l.style.webkitFilter='hue-rotate('+((Game.T*5)%360)+'deg) brightness('+(150-50*pulse)+'%)';
// 				Game.l.style.transform='scale('+(1.02-0.02*pulse)+','+(1.02-0.02*pulse)+') rotate('+(Math.sin(Game.T*0.5)*0.5)+'deg)';
// 				Game.wrapper.style.overflowX='hidden';
// 				Game.wrapper.style.overflowY='hidden';
// 			}
			
// 			Timer.clean();
// 			if (Game.prefs.animate && ((Game.prefs.fancy && Game.drawT%1==0) || (!Game.prefs.fancy && Game.drawT%10==0)) && Game.AscendTimer==0 && Game.onMenu=='') Game.DrawBuildings();Timer.track('buildings');
			
// 			Game.textParticlesUpdate();Timer.track('text particles');
// 		}
		
// 		Game.NotesDraw();Timer.track('notes');
		
// 		Game.runModHook('draw');
		
// 		Game.drawT++;
// 		//if (Game.prefs.altDraw) requestAnimationFrame(Game.Draw);
// 	}
}