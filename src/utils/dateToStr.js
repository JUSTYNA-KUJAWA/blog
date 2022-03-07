export const dateToStr = dateObj => {
    return dateObj.toISOString().replace(/T.*/,'').split('-').reverse().join('-');
  }
  
  export default dateToStr;