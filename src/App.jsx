import './App.css';

function App(data) {
  // code here
  let i_data=data.prop;

    return(
      <>
      <h1>Kalvium Gallary using Function</h1>
      <div className='body'> 
        {i_data.map(({id,img})=>{
          return(
            <img key={id} src={img} alt="elephant" />
          )
        })}
      </div>
      </>
      
    )

}

export default App;
