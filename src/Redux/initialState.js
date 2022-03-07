const initialState ={

    posts: [
      {
        id: '1',
        title: 'Main Article title',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date('02-02-2022'),
        author: 'John Doe'
      },
  
      {
        id: '2',
        title: 'First Article title',
        shortDescription: 'Short description of the article...',
        content: 'First content of the article',
        publishedDate: new Date('07-07-2022'),
        author: 'John Doe'
      },
  
      {
        id: '3',
        title: 'Second Article title',
        shortDescription: 'Short description of the article...',
        content: 'Second content of the article',
        publishedDate: new Date('05-03-2020'),
        author: 'John Doe'
      },
  
      {
        id: '4',
        title: 'Third Article title',
        shortDescription: 'Short description of the article...',
        content: 'Third Main content of the article',
        publishedDate: new Date('06-03-2020'),
        author: 'John Doe'
      }
  
    ]
  }
  
  export default initialState;