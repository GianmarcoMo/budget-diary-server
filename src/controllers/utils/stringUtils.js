function isEmpty(inputString) {
  try {
    const inputStringLength = inputString.length;
  
    const isLengthEqualsToZero = inputStringLength === 0;
  
    return isLengthEqualsToZero;  
  }catch(error){
    console.error("Error in check if string is empty");
    return false;
  }
}

module.exports = { isEmpty };
