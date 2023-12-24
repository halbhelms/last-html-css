const balances = {
  checking: 0,
  savings: 0,
  'money-market': 0
}

function displayBalances() {
  outputs.checking.innerHTML = formatBalance(balances.checking)
  outputs.savings.innerHTML = formatBalance(balances.savings)
  outputs['money-market'].innerHTML = formatBalance(balances['money-market'])
  outputs.total.innerHTML = formatBalance(balances.checking + balances.savings + balances['money-market'])
}

function processDeposit() {
  // which account are we depositing into?
  let balance = document.querySelector('select[name="deposit-to"]').value
   // how much is being deposited?
  let depositAmount = +document.querySelector('input[name="deposit-amount"]').value
  // update the balances
  balances[balance] += depositAmount
  // redisplay balances
  displayBalances()
  // reset input to blank
  document.querySelector('input[name="deposit-amount"]').value = ''
  // reset select
  document.querySelector('select[name="deposit-to"]').selectedIndex = 0
}

function processWithdrawal() {
  // which account are we withdrawing fromo?
  let balance = document.querySelector('select[name="withdraw-from"]').value
  console.log('balance', balance)
  // how much is being withdrawn?
  let withdrawalAmount = +document.querySelector('input[name="withdrawal-amount"]').value
  // is there enough in the account?
  let currentBalance = balances[balance]
  if (currentBalance >= withdrawalAmount) {
    balances[balance] -= withdrawalAmount
    displayBalances()
  } else {
    alert('You have insufficient funds in this account')
  }
  // clear out input field
  document.querySelector('input[name="withdrawal-amount"]').value = ''
  // reset select
  document.querySelector('select[name="withdraw-from"]').selectedIndex = 0
}

function processTransfer() {
  // which account are we transferring from?
  let fromBalance = document.querySelector('select[name="transfer-from"]').value
  // which account are we transferring to?
  let toBalance = document.querySelector('select[name="transfer-to"]').value

  console.log('fromBalance', fromBalance)
  console.log('toBalance', toBalance)
  // how much is the transfer for?
  let transferAmount = +document.querySelector('input[name="transfer-amount"]').value
  console.log('transferAmount', transferAmount)
  // try to make the transfer
  if (balances[fromBalance] >= transferAmount) {
    balances[toBalance] += transferAmount
    balances[fromBalance] -= transferAmount
    displayBalances()
    // reset transfer amount
    document.querySelector('input[name="transfer-amount"]').value=''
    // reset transfer from and to
    document.querySelector('select[name="transfer-from"]').selectedIndex = 0
    document.querySelector('select[name="transfer-to"]').selectedIndex = 0
  } else {
    alert('There are insufficient funds to transfer from this acount')
  }
}

function formatBalance(number) {
  return number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function stringToNumber(formattedString) {
  // Remove commas from the formatted string and convert it to a number
  return parseFloat(formattedString.replace(/,/g, ''));
}

displayBalances()