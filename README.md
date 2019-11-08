This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For the subject of Microcontrollers of the course of Engineering on University of Pernambuco, this repository is responsible for the backend of an application that integrates a MongoDB database, an ESP and a 20x4 display.
The objective is to be a fun project: an eletronic display that shows random jokes continuously on a push of a button. On buttonpress, the displayed changes as another joke is pulled from the database.

# Colaborators

## Control and Automation Engineering
Amanda Filizola

Victor Silva
## Electrical-Electrotechnical Engineering
Mateus Freire

# Available API

All API requests are made to "http://localhost:3333/piadas".

## POST a joke

when on localhost:

The object is a JSON with only one property, "piada", with the string that contains the joke.

```
{
	"piada": "knock knock. Who's there? Mustache. Mustache who? I mustache you a question, but I’ll shave it for later."
}
```

## GET a joke

No need to pass parameters, only to make a request with GET method to the url. Just pay attention as this is NOT RETURNED ON JSON. it is plain text. THIS IS SUPER RANDOM AND FUN! 
You never know what you're going to get next!

## DELETE a joke

Not funny enough for you? get that _id and pass on the body of a delete request!

```
{
	"_id":"5dc4d7f3d956033a1824ea0c"
}
```
