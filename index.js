const calculateWindow = (input, size, index) => {
  const window = []
  for (let i=index; i>index-size && i>=0; i--) {
    window.push(input[i])
  }
  return window
}
console.log(calculateWindow([0,1,3,4,9], 3, 2))
