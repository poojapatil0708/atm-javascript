let account = {
    pin: 0000,
    balance: window.localStorage.getItem('balance') ? window.localStorage.getItem('balance') : 0
}

const onPinSubmit = () => {
    let pin = document.getElementById('pin').value
    if (parseInt(pin) === account.pin) {
        window.location.href = 'options.html'
        document.getElementById('pinError').innerHTML = ''
    } else {
        document.getElementById('pinError').innerHTML = 'invalid PIN'
    }
}

const onClickBalance = () => {
    window.location.href = 'balance.html'
}

const showBalance = () => {
    document.getElementById('checkBalance').innerHTML = 'Your Balance Amount is: ' + account.balance

}

const goHome = () => {
    window.location.href = 'atm.html'
}

const onClickWithdraw = () => {
    window.location.href = 'withdraw.html'
}

const withdraw = () => {
    let wAmount = document.getElementById('w-amount').value
    if (parseInt(wAmount) < account.balance) {
        account.balance = account.balance - wAmount
        window.localStorage.setItem('balance', account.balance)
        document.getElementById('w-container').innerHTML = 'Please Collect Your Cash'
        document.getElementById('w-container').style.color = 'green'

    } else {
        document.getElementById('w-container').innerHTML = 'Not Enough Balance'
        document.getElementById('w-container').style.color = 'red'
    }

}

const onClickDeposit = () => {
    window.location.href = 'deposit.html'
}

const deposit = () => {
    let dAmount = document.getElementById('d-amount').value
    account.balance = parseInt(account.balance) + parseInt(dAmount)
    window.localStorage.setItem('balance', account.balance)
    document.getElementById('d-container').innerHTML = 'Deposited Successfully, Current Balance ' + account.balance
    document.getElementById('d-container').style.color = 'green'
}

