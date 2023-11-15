fetch('http://localhost/foo.txt')
  .then(response => response.text())
  .then((data) => {
    console.log(data)
  })