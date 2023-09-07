const express=require('express');
const path =require('path');
const app =express();   
const bodyParser=require('body-parser');
const port=process.env.port || 80;
// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname,'view')));
// Route handler for contact form submission
app.post('/submit',(req, res) => {
  const {Name, Email, Password, Phone} =req.body;
  // Here, you can process the form data, send emails, save to a database, etc.
  console.log('Form Data:', Name, Email, Password, Phone);
  // Redirect the user back to the contact page or a thank you page
  res.redirect('/contact.html');
});
app.use(express.static(path.join(__dirname,'view')));
app.get('/:page',(req,res)=> {
  const requestedPage =req.params.page;
  const validPages =['shop','blog','contact','about','cart'];
  if(validPages.includes(requestedPage)){
res.sendFile(path.join(__dirname,'view',`${requestedPage}.html`));
}
else{
res.sendFile(path.join(__dirname,'view','index.html')); }
}) ;
app.listen(port,()=>{ 
console.log(`Server is running on port ${port}`);
});