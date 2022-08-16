# PokeTrunfo-API

  ![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
  ![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
  ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
  ![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)


---

## Resumo

Api criada para comparar status dos pokemons ao estilo super trunfo 


## Endpoints
---

|Endpoint|Nome|Função| 
|---|---|---|
|/|Index|Retorna mensagem de bem vindo
|/pokemons|Pokemons|Lista todos os pokemons, metodo GET
|/pokemon/id|Pokemon|Lista o pokemon correspondente ao id informado na URL, metodo GET
|/pokemon|Adicionar|Adiciona pokemon escrito no corpo da requisição via Json, metodo POST
|/pokemon/id|Editar|Edita o pokemon correspondente ao id informado na URL, metodo PUT, informar o json no corpo da requisição com os dados ja alterados
|/pokemon/id|Deletar|Deleta o pokemon correspondente ao id informado na URL, metodo DELETE


### Pokemons

* GET

Para listar todos os pokemons acesse a rota  {url}/pokemons

Response:

```
[
	{
		"_id": "1",
		"name": "Bulbasaur",
		"type": [
			"grass",
			"poison"
		],
		"attributes": {
			"hp": 45,
			"attack": 49,
			"defense": 49,
			"spAttack": 65,
			"spDefense": 65,
			"speed": 45
		}
	},
	{
		"_id": "2",
		"name": "Ivysaur",
		"type": [
			"grass",
			"poison"
		],
		"attributes": {
			"hp": 60,
			"attack": 62,
			"defense": 63,
			"spAttack": 80,
			"spDefense": 80,
			"speed": 60
		}
	},
	{
		"_id": "3",
		"name": "Venusaur",
		"type": [
			"grass",
			"poison"
		],
		"attributes": {
			"hp": 80,
			"attack": 82,
			"defense": 83,
			"spAttack": 100,
			"spDefense": 100,
			"speed": 80
		}
	},
	{
		"_id": "4",
		"name": "Charmander",
		"type": [
			"fire"
		],
		"attributes": {
			"hp": 39,
			"attack": 52,
			"defense": 43,
			"spAttack": 60,
			"spDefense": 50,
			"speed": 65
		}
	},
	{
		"_id": "5",
		"name": "Charmeleon",
		"type": [
			"fire"
		],
```
* POST

Para registrar pokemon acesse a rota {url}/pokemon

Request Body - Json

```
{
  "_id": number,
  "name": string,
  "type":[string],
  "attributes": {
    "hp": number,
    "attack": number,
    "defense": number,
    "special-attack": number,
    "special-defense": number,
    "speed": number
  }
}
```
### Batalha

* POST

O sistema de batalha funciona comparando o BST (BaseStatus) 1 carta pokemon de cada oponente selecionado por id, o pokemon que possui maior BST vence a partida.

Para realizar batalha de cartas acesse a rota {url}/batalhaBST

Exemplos de pokemons selecionados para a batalha:

id 150 representado pelo  `Mewtwo` e  id 25 representado pelo  `Pikachu`.

Request Body - Json
```
{
    "playerOneCard":150,
    "playerTwoCard": 25
}
```

Response:

```
{
	"Vencedor": {
		"Pokemon": "Mewtwo",
		"playerOneCard": "BST:680"
	}
}
```
Pokemon `Mewtwo` possui BST maior que `Pikachu`. Portando `Mewtwo` é o vencedor.




## Executar o projeto localmente
 
### Requisitos

[Git](https://git-scm.com/)

[Node](https://nodejs.org/en/)

[MongoDB Atlas](https://account.mongodb.com/account/login)

Editor de código de sua preferência

### Instalação 

Utilize o Git Clone no repositório em uma pasta de sua escolha

```
$ git clone https://github.com/Gclayton0207/PokeTrunfo-API
```
Navegue até a pasta do projeto utilizando comando cd

```
$ cd PokeTrunfo-API
```
Execute o comando a seguir no terminal para instalar as dependências

```
$ npm install
```

### Configurando ambiente

Para prosseguir com essa etapa é necessário ter cadastro no [MongoDB Atlas](https://account.mongodb.com/account/login).

Após realizar a configuração com Mongo, crie na raiz da pasta do projeto crie um arquivo `.env` seguindo o exemplo enviado no repositorio.

Dentro do arquivo `.env` coloque a sua conexão do MongoDB.

Em seguida utilize o comando para executar o projeto

```
$ npm run dev
```

## Desenvolvedor

[Giovanni Clayton](https://www.linkedin.com/in/giovanni-clayton/).

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
