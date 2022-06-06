function fazPost(url, body) {
	console.log("body=", body)
	let request = new XMLHttpRequest()
	request.open("POST", url, true)
	request.setRequestHeader("content-type", "application/json")
	request.send(JSON.stringify(body))



	request.onload = function() {
		console.log(this.responseText)
	}



	return request.responseText
}
function historico() {

	let url = "http://localhost:8080/api/evento/"
	let idUsuario = document.getElementById("idUsuario").value
	console.log(idUsuario)
	let id = document.getElementById("id").value
	let title = document.getElementById("title2").value
	let start = document.getElementById("start2").value
	let end = document.getElementById("end2").value

	let divErro = document.getElementById("erro")



	if (end < start) {


	

		const mensagemErro1 = document.createElement('h1')

		const msgErro = document.createTextNode('A Data final não pode acabar antes da data de inicio!')

		mensagemErro1.appendChild(msgErro)

		divErro.appendChild(mensagemErro1)

		end.focus()

	} else {



		console.log(id)
		console.log(title)
		console.log(start.toLocaleString())
		console.log(end.toLocaleString())





		if (usuarioLogado == null) {
			body = {
				"id": id,
				"title": title,
				"start": start,
				"end": end,
				"usuario": {
					"id": idUsuario,
				},
				"administrador": {
					"id": "",
				}
			}
			console.log(body + "usuario")

		} else {
			body = {
				"id": id,
				"title": title,
				"start": start,
				"end": end,
				"usuario": {
					"id": "",
				},
				"administrador": {
					"id": idUsuario,
				}
			}
			console.log(body + "admin")


		}





	};







	location.reload();
	fazPost(url, body)

}


