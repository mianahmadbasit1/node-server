import express from 'express'
const app= express();
const port =4000;
app.get('/',(req,res)=>{
    res.send('heloo world ahmad')
});


app.listen(port, () => 
{ 
    console.log(`Server running on port ${port} 🔥`)
});