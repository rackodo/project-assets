export function Modify(Game) {
	// Update Info Page
	fetch('https://assets.rackodo.dev/usf-clicker/text/modInfo.txt')
		.then((response) => response.text().then(
			function(text) {
				Game.updateLog = text + Game.updateLog
			}
		)
	)

	// Update Images
	Game.Loader.Replace('perfectCookie.png', 'https://media.discordapp.net/attachments/1169961839816364042/1174109281407209592/littleguy-removebg-preview.png?ex=6566657a&is=6553f07a&hm=b31e3e1e57cf0d76d0ca1110fd9dd488e286d7bd1068dd2e3564163e08ef91dd&=')
}