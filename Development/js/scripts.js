let number =['one','two','three','four'];
number.forEach(logger);
function logger(value){
   console.log(value);
}
let hots=[41,42,43,44,45,46,37,38];
let over40 =hots.filter(hottestDays);
console.log(over40)
function hottestDays(value){ 
    return value > 40 ;
}
let books = [ { 
                  name: 'book1',
                   id: 2,
                },
                { 
                  name:"book2",
                  id: 4,
                },
                { 
                    name:"book3",
                    id: 7,
                  }
 
];
getBookById(books, 7)
 function getBookById(  books, id  ) 
 {
    
    for ( i of books  )
    {
       if(i.id==id)
       {
         
        console.log("متوفر")
        
       }
      
      }

    }
    let done = [] ;
     let pel = [] ;
     let bag = [] ;
     while (done != "انتهيت")
     {
          done =prompt("ادخل انتهيت عند الانتهاء من التسوق");
      
         let item =prisefloatprompt('السلعة ');
         let price =prsefloatprompt(" السعر  ");

         pel ={
           price: price,
           item:item,
       };
       bag.push(pel);
     }

   

function print(pel)
{
   console.log("الفاتورة ")
   console.log("**********")
   console.log(pel)
};
