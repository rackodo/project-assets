fetch('https://assets.rackodo.dev/usf-clicker/text/modInfo.txt')
	.then((response) => response.text().then(
		function(text) {
			Game.updateLog = text + Game.updateLog
		}
	)
)