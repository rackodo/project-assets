fetch('https://assets.rackodo.dev/fad-clicker/text/fileList.txt')
	.then(response => response.text())
	.then((data) => {
		data = data.split("\n")
		data.pop()
		console.log(data)
	})