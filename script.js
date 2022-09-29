let numberOfOrders = 0;
 
const executeOrder = () => {
	numberOfOrders++

	let todaysDate = new Date()
	let orderIdInput = `MP${todaysDate.getFullYear()}-${todaysDate.getMonth() + 1}-${todaysDate.getDate()}-${todaysDate.getHours()}:${todaysDate.getMinutes()}:${todaysDate.getSeconds()}0000${numberOfOrders}`

	
    if(!orderIdInput.length || orderIdInput.length <= 5){
        alert("please enter a valid order ID");
		resetFeilds();
		return;
    }
	
    createNewOrder(orderIdInput);

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

	resetFeilds();
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
	 		document.getElementById(orderNumber).innerText = 'Chicken Marinated'
			resolve(orderNumber)
		}, 5000)
	})
}
const chickenFrying = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Chicken is frying'
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


let parentDiv = document.getElementById('card-wrapper')

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
	let timeDateDiv = document.createElement('div');
	

	let date = new Date().toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	  });

	let billAmount = Math.ceil(Math.random() * 42) + 10;
	let quantity = Math.ceil(Math.random() * 3);

    let cardHeaderDivText = document.createTextNode('Order ID: ' + orderIdInput)
	let cardTitleH5Text = document.createTextNode('Bill Amount: $' + billAmount)
	let cardTextPText = document.createTextNode('Biryani Order Placed')
	let cardTextPTextQuantity = document.createTextNode('Quantity: ' + quantity)
	let cardDateTimeText = document.createTextNode(date)
	let cardButtonAText = document.createTextNode('Cancel Order')
	let cardOrderStatusText = document.createTextNode('Biryani is on the way')

    parentDiv.appendChild(colDiv)
	colDiv.appendChild(cardDiv)
	cardDiv.appendChild(cardHeaderDiv)
	cardDiv.appendChild(cardBodyDiv)
	cardDiv.appendChild(timeDateDiv)
	cardDiv.appendChild(cardFooterDiv)
	cardHeaderDiv.appendChild(cardHeaderDivText)
	cardBodyDiv.appendChild(cardTitleH5)
	cardBodyDiv.appendChild(cardTextPTextQuantity)
	cardBodyDiv.appendChild(cardTextP)
	cardBodyDiv.appendChild(cardOrderStatusSpan)
	cardFooterDiv.appendChild(cardButtonA)
	cardTitleH5.appendChild(cardTitleH5Text)
    cardTextP.appendChild(cardTextPText)
	cardButtonA.appendChild(cardButtonAText)
	timeDateDiv.appendChild(cardDateTimeText)

	
	cardOrderStatusSpan.appendChild(cardOrderStatusText)

	colDiv.classList = 'col-md-4 order-block'
	cardDiv.classList = 'card text-center'
	cardHeaderDiv.classList = 'card-header'
	cardBodyDiv.classList = 'card-body'
	cardFooterDiv.classList = 'card-footer'
	cardTitleH5.classList = 'card-title'
	cardTextP.classList = 'card-text'
	cardButtonA.classList = 'btn btn-danger cancel-button'
	cardButtonA.addEventListener('click', () => {
		colDiv.style.display = 'none'

		document.getElementById('cancelMsg').style.display = 'block'

		document.getElementById('cancel-button').addEventListener('click', () => {
			document.getElementById('cancelMsg').style.display = 'none'
		})

		resetFeilds();
    })
	timeDateDiv.classList = 'card-footer'
	cardOrderStatusSpan.classList = 'badge rounded-pill bg-success order-status'

	cardOrderStatusSpan.id = orderIdInput
}