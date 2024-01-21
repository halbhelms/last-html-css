document.querySelectorAll('.confirmation-options input[type="radio"]').forEach(option => {
  option.addEventListener('change', showIcon)
})

function showIcon(e) {
  document.querySelectorAll('.confirmation-options input[type="radio"]').forEach(option => {
    option.parentElement.classList = ''
  })
  
  e.target.parentElement.classList.add('chosen')
}

