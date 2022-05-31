let orderGif = document.getElementById('order');

const executeOrder = () => {
    orderGif.style.display = 'none';

    let orderIdInput = document.getElementById('order-id').value;

    if(!orderIdInput.length){
        alert("please enter a valid order ID");
        return;
    }
    createNewOrder(orderIdInput);

    document.getElementById('order-id').innerText = 'Biryani Order Placed';

    chefReceived(orderIdInput)
        .then(riceSoaked)
        .then(chickenMarinated)
        .then(chickenFrying)
        .then(firstLayerAdded)
        .then(secondLayerAdded)
        .then(biryaniCooking)
        .then(biryaniCooked)
        .then(packed)
        .then(receivedatCounter)
        .then(() => document.getElementById('orderIdInput').innerText = 'Order Ready!')
        .catch((err) => console.log(err));
}
const chefReceived = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Chef received'
			resolve(orderNumber)
		}, 2000)
	})
}

const riceSoaked = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'rice soaked'
			resolve(orderNumber)
		}, 10000)
	})
}

const chickenMarinated = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
	 		document.getElementById(orderNumber).innerText = 'Chicken Marinated with all Spices'
			resolve(orderNumber)
		}, 10000)
	})
}
const chickenFrying = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Frying Chicken in oil with spices'
			resolve(orderNumber)
		}, 10000)
	})
}

const firstLayerAdded = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'First Layer added'
			resolve(orderNumber)
		}, 15000)
	})
}

const secondLayerAdded = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Second layer added'
			resolve(orderNumber)
		}, 15000)
	})
}

const biryaniCooking = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Biryani is cooking'
			resolve(orderNumber)
		}, 15000)
	})
}

const biryaniCooked = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Biryani Cooked'
			resolve(orderNumber)
		}, 15000)
	})
}

const packed = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Your biryani is packed'
			resolve(orderNumber)
		}, 20000)
	})
}
const receivedatCounter = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Order Received at counter'
			resolve(orderNumber)
		}, 20000)
	})
}

let parentDiv = document.getElementById('parent-div');

const createNewOrder = (orderIdInput) =>{
    let colDiv = document.createElement('div')
	let cardDiv = document.createElement('div')
	let cardHeaderDiv = document.createElement('div')
	let cardBodyDiv = document.createElement('div')
	let cardTitleH5 = document.createElement('h5')
	let cardTextP = document.createElement('p')
	let cardOrderStatusSpan = document.createElement('span')
	let cardButtonA = document.createElement('a')
	let cardFooterDiv = document.createElement('div')

    let cardHeaderDivText = document.createTextNode('Order ID: ' + orderIdInput)
	let cardTitleH5Text = document.createTextNode('Bill Amount: $500')
	let cardTextPText = document.createTextNode('Biryani Order Placed')
	let cardButtonAText = document.createTextNode('Cancel Order')
	let cardOrderStatusText = document.createTextNode('Biryani is on the way')

    parentDiv.appendChild(colDiv)
	colDiv.appendChild(cardDiv)
	cardDiv.appendChild(cardHeaderDiv)
	cardDiv.appendChild(cardBodyDiv)
	cardDiv.appendChild(cardFooterDiv)
	cardBodyDiv.appendChild(cardTitleH5)
	cardBodyDiv.appendChild(cardTextP)
	cardOrderStatusSpan.appendChild(cardOrderStatusText)
	cardBodyDiv.appendChild(cardOrderStatusSpan)
	cardFooterDiv.appendChild(cardButtonA)
	cardTitleH5.appendChild(cardTitleH5Text)

    cardTextP.appendChild(cardTextPText)
	cardButtonA.appendChild(cardButtonAText)
	cardHeaderDiv.appendChild(cardHeaderDivText)
	cardOrderStatusSpan.appendChild(cardOrderStatusText)

	colDiv.classList = 'col-md-4 col-xs-12 order-block'
	cardDiv.classList = 'card text-center'
	cardHeaderDiv.classList = 'card-header'
	cardBodyDiv.classList = 'card-body'
	cardFooterDiv.classList = 'card-footer'
	cardTitleH5.classList = 'card-title'
	cardTextP.classList = 'card-text'
	cardButtonA.classList = 'btn btn-danger cancel-button'
	cardOrderStatusSpan.classList = 'badge rounded-pill bg-success order-status'

	cardOrderStatusSpan.id = orderIdInput

	cardButtonA.addEventListener('click', () => {
		colDiv.style.display = 'none';
    })
}