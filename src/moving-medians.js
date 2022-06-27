const movingMedians = (input) => {
  // calculate the windowSize
  const windowSize = input.shift()

  // map the input list - mapping the index of each element to a value because we need calculate only one median for each element in the list.
  const result = input.map((_e, index) => {
    // to calculate the window (the element and n-1 predecessors), we need the input, the size of the window, and the starting point
    const window = findWindow(input, windowSize, index)
    // then we calculate the median of this window.
    return findMedian(window)
  })

  // we transform the result into the expected outcome
  return result.join()
}

const findWindow = (input, size, index) => {
  const window = []
  // start at the position in the input list and travel backwards
  // through the list, stopping if the window size is reached, or if
  // we reach the start of the list.
  // for each iteration, store the result in an array
  for (let i = index; i > index - size && i >= 0; i--) {
    window.push(input[i])
  }
  return window
}

const findMedian = (list) => {
  // sort list to find median
  const sortedList = list.sort((a, b) => a - b)
  // find middle elements of list
  const mid = Math.floor(sortedList.length / 2)
  // if list is even length
  if (sortedList.length % 2 === 0) {
    // find the middle two elements and calculate the mean
    return ((sortedList[mid - 1] + sortedList[mid]) / 2)
  } else {
    // if odd, return the middle element
    return sortedList[mid]
  }
}
module.exports = movingMedians
