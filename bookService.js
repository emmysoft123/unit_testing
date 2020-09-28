  const bookService = {

checkValue: x => x,
isNull: () => null,
CreateUser :() => {
  const user ={firstName:"emeka"};
   user['LastName'] = "peter";
   return user;
}
};
const bookArray = (arr,len) =>{
  const bookArray = [];

  //loop through arrayis
  arr.forEach(val =>{
    //get last element
    if (last || last.length === len){
      bookArray.push([val]);
    }
    else{
      last.push(val);
    }
  });
  return bookArray;
}

module.exports = bookService;
