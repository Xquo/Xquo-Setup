const Body = document.body

exports.CreateElement = function(id, type, Text) {
	var x = document.createElement(type)
	x.id = id
	if (type == "p" || type == "button") {
		x.innerHTML = Text
	}
	return x
}

exports.AddElement = function(Child, Parent, Text) {
	if (Parent === undefined) {
		document.body.appendChild(Child)
	}
	else {
		Parent.appendChild(Child)
	}
}

function AddScript(Code) {

}

function SetText(Child, Text) {
	try { Child.innerHTML = Text } catch (error) { }
}

function StyleElement(Child, Components) {
	$.each(Components, function (key, value) {
		try {
			Child.style[key] = value;
		} catch (error) {
			console.log(error)
		}
	});
}

/*

CodeWrittenHere

*/

const TextCSS = { 
	"color": "white",
	"textAlign": "center", 
	"fontSize": "30px",
	"fontFamily": "'Outfit', sans-serif"
}

StyleElement(Body, {
	"backgroundColor": "black",
})

Parent = CreateElement("Item", "div")
StyleElement(Parent, {
	"backgroundColor": "black",
	"width": "fitContent",
	"height": "fitContent",
})
AddElement(Parent)

Child = CreateElement("Paragraph", "p", "This is cool!")
StyleElement(Child, TextCSS)
AddElement(Child, Parent)

Button = CreateElement("Button", "button", "Click ME!")
AddElement(Button)

var Counter = 1;

Button.onclick = function() {
	Counter *= 2
	SetText(Child, Counter)
}