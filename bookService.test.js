



const bookService = require('./bookService');

test ('Readers should enter there names',() =>{
  usernames =['emeka','osita','Readers'];
  expect(usernames).toContain('Readers');
});

//expected to throw false
//test('should be false', () =>{
//  expect(bookService.checkValue(undefined)).toBefalse();
//});

//
test('there is no Chemistry_book in our library',() =>{
  expect('library').not.toMatch(/Chemistry_book/)
});
test('select from a list of option in library',() =>{
  expect('1-4').not.toMatch(/list/)
});

test ('should be null if not in the library', () =>{
  expect (bookService.isNull()).toBeNull();
});
  test ('bookArray function exists',() => {
    expect(bookService).toBeDefined();
  });
  test ('books contain an array with 5 values with length 1',() =>{
    const name = ["physics","biology","agric","Geography","economics"];
    const len = 1;
    const bookArr = bookArray(name, len);
    expect(bookArr).toEqual([["physics"],["biology"],["agric"],["Geography"],["economics"]])
  });
