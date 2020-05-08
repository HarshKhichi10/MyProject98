import React from 'react';
import logo from './logo.svg';
import './App.css';
import './section1.css'
import $ from 'jquery'
import BBC from './bbc2.png'
import China from './china3.webp'
import Trump from './trump2.jpeg'
import Iraq from './Iraq.jpeg'
import Turkey from './Turkey.jpg'
import Music from './music.jpeg'
import Professor from './professor1.webp'
import { Grid , Cell } from 'react-mdl'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <>
    <div className="App">
    <div className="Main-header">
    <div className="header-elements">   
    <div className="mono-header">
      < img src={BBC} style={{marginRight:'100%', marginTop:'.5%'}}/> 
    </div> 
        
        <div style={{width: '15px',display:'inline', textAlign:'left'}}>
              <div style={{marginLeft:'100%',fontSize: '20px',marginTop:'60%'}}> <p style={{fontSize: '20px'}} class="fa fa-user-circle" aria-hidden="true">
              </p></div> 
       </div>
       <div style={{marginLeft:'3.5%',marginTop: '.9%' ,display:'inline',marginRight:'10%', textAlign:'left',width: '10px'}}>    
          <p style={{display:'inline',fontFamily:"'Open Sans', sans-serif",fontSize:'13px', fontWeight:'bold'}}> Signin </p> 
       </div>
        
      <div className='link1' style={{borderLeft:'1px solid gray',fontFamily:"'Open Sans', sans-serif", marginLeft: '1.5%',padding:'13px',textAlign:'center'}}>  
      Home
      </div> 
      <div  className='link2' style={{borderLeft:'1px solid gray',fontFamily:"'Open Sans', sans-serif", marginLeft: '1.5%',padding:'13px',textAlign:'center'}}>
      News</div>
      <div  className='link3' style={{borderLeft:'1px solid gray',fontFamily:"'Open Sans', sans-serif", marginLeft: '1.5%',padding:'13px',textAlign:'center'}}>
      Sports</div>
      <div  className='link4' style={{borderLeft:'1px solid gray',fontFamily:"'Open Sans', sans-serif", marginLeft: '1.5%',padding:'13px',textAlign:'center'}}>
      Reel</div>       
      <div  className='link5' style={{borderLeft:'1px solid gray',fontFamily:"'Open Sans', sans-serif", marginLeft: '1.5%',padding:'13px',textAlign:'center'}}>
      Worklife</div>     
      <div  className='link6'style={{borderLeft:'1px solid gray',fontFamily:"'Open Sans', sans-serif", marginLeft: '1.5%',padding:'13px',textAlign:'center'}}>
      Travel</div>
      <div  className='link7' style={{borderLeft:'1px solid gray',fontFamily:"'Open Sans', sans-serif", marginLeft: '1.5%',padding:'13px',textAlign:'center'}}>
      Future</div>
      <div  className='link8' style={{borderLeft:'1px solid gray',fontFamily:"'Open Sans', sans-serif", marginLeft: '1.5%',padding:'13px',textAlign:'center'}}>
      Culture</div>
      <div style={{borderLeft:'1px solid gray',fontFamily:"'Open Sans', sans-serif", marginLeft: '1.5%',padding:'13px',textAlign:'center',marginRight:'5%'}}>
      </div>

      <div style={{borderLeft:'1px solid gray'}} className="searchtop">
    
     <input type="text" style={{marginTop: '5.5%',height: '21px', backgroundColor:'#efefef', color:'white'}} placeholder="Search"/>
     <div style={{marginLeft: '98%', marginTop: '-13%', fontSize:'20px',color:'gray'}}>    
      <p  class="fa fa-search" aria-hidden="true"></p>
     </div>

     </div>  
     </div> 
          </div>
          
          
          <div style={{marginTop:'-2.2%'}} className='link9'>          
          <div class="container" >
  <button type="button" style={{backgroundColor:'white',fontFamily:"'Open Sans', sans-serif", marginRight:'-65%',border:'none',color:"gray"}}data-toggle="collapse" data-target="#demo">More<i style={{marginTop:'-15%',marginLeft:'.04%'}}class="fa fa-sort-desc" aria-hidden="true"></i></button>
  <div  id="demo" class="collapse">
     <div style={{marginLeft:'-6%',textAlign:'left',marginTop:'1.5%',fontFamily:"'Open Sans', sans-serif"}}>
      <h2 style={{display:'inline',fontSize:'40px', marginRight:'12%',fonSize:'12px',fontWeight:'bold'}}>More </h2> 
      <h6 style={{display:'inline', marginRight:'12%',fonSize:'12px',fontWeight:'bold'}}>Music  </h6> 
      <h6 style={{display:'inline', marginRight:'12%',fonSize:'12px',fontWeight:'bold'}}>Tv </h6>
      <h6 style={{display:'inline', marginRight:'12%',fonSize:'12px',fontWeight:'bold'}}>Weather </h6>
      <h6 style={{display:'inline', marginRight:'12%',fonSize:'12px',fontWeight:'bold'}}>Sounds </h6>
      
  </div></div>
</div>

</div>





  <div className="Navbar">
   <div style={{fontFamily:"'Open Sans', sans-serif",lineHeight:'8em'}}>   <h3>News </h3> 
      </div>

   <div className='nav-links'>
   <p style={{borderBottom:'5px solid white'}}className="ins-navlink">Home</p> 
   <p className="ins-navlink">Vedio</p>
   <p className="ins-navlink">World</p>
   <p className="ins-navlink">Asia</p>
   <p className="ins-navlink">Uk</p>
   <p className="ins-navlink">Business</p>
   <p className="ins-navlink">Tech</p>
   <p className="ins-navlink">Science</p>
   <p className="ins-navlink">Stones</p>
   <p className="ins-navlink">Entertainment & Arts</p>
   <p className="ins-navlink">Health</p>
   <p className="ins-navlink">World News Tv</p>
   <p className="ins-navlink">Vedio</p>
   <p className="ins-navlink">In Pictures</p>
   <p className="ins-navlink">Reality Check</p>
   <p className="ins-navlink">Newsbeal</p>
     
</div>

 </div>
 <div className="more-btn2" style={{marginTop:'-2.6%'}}>          
          <div  class="container" >
  <button  type="button" style={{backgroundColor:'#C21A09',fontSize:'13px', marginRight:'-105%',border:'none',color:"white"}}data-toggle="collapse" data-target="#demo1">More <i style={{marginTop:'4%'}} class="fa fa-sort-desc" aria-hidden="true"></i></button>
  <div  id="demo1" class="collapse">
     <div style={{marginLeft:'-8%',fontFamily:"'Open Sans', sans-serif",textAlign:'left',marginTop:'1%',borderBottom: '3px solid #C21A09',height:'80px' ,width:'1285px',backgroundColor:'black', color:'white'}}> 
    <div style={{lineHeight:'3em',padding: '20px'}}>      
      <p className="intext"style={{display:'inline',marginRight:'8%', fontSize:'18px', width:'420px'}}>Reality check  </p> 
      <div style={{display:'inline',marginRight:'3%',borderLeft:'1px solid gray'}}></div>
      <p className="intext" style={{display:'inline',marginRight:'8%', fontSize:'18px', width:'420px'}}> News Reads </p>
      <div style={{display:'inline',marginRight:'3%',borderLeft:'1px solid gray'}}></div>
      <p className="intext" style={{display:'inline',marginRight:'8%', fontSize:'18px', width:'420px'}}>Special Reports </p>
      <div style={{display:'inline',marginRight:'3%',borderLeft:'1px solid gray'}}></div>
      <p className="intext" style={{display:'inline',marginRight:'8%', fontSize:'18px', width:'420px'}}>Long Reads </p>
      </div>

  </div></div>
</div>

</div>
   
 <div style={{padding: '25px'}}>
<Grid>
   <Cell col={3} style={{textAlign:'justify'}}>
      <div  style={{width:'200px',fontFamily:"'Open Sans', sans-serif",height:'80px', marginTop:'-9%'}}>
     <h4 style={{marginTop:'-2.5%',fontsize:'44px',padding:'5px',color:'red', textTransform:'uppercase',fontWeight:'600'}}><i class="fa fa-dot-circle-o" aria-hidden="true"></i> Live</h4> 
      <h4 className="hvr-ele" style={{fontWeight: '600', marginTop:'-9%',fontSize:'26px'}}>  Democrats undoing election, says Trump laywers
      </h4>
      <p  style={{lineHeight:'1.3em'}}> In two hours of arguments, the Trump team accused the Democrats of bringing a water thin impeachment case.  </p>
      <p>US & Canada </p>     
      </div>
        
   </Cell>
   <Cell col={5}>
   <div style={{marginTop:'-5%'}}>
   <img src={Trump} style={{height:'280px',width:'450px', marginLeft:'-39%'}}/>     
   </div>
     </Cell>   
     
   <Cell col={3} >
   <div className="hvr-ele" style={{marginTop: '-8%',fontFamily:"'Open Sans', sans-serif", marginLeft:'-40%',width:'200px',textAlign:'justify'}}>
   <img src={China} style={{width:'220px' , height:'130px'}}/>
   <h6 className="hvr-ele" style={{fontWeight:'bold',color:'black',lineHeight:'1.3em',fontSize:'15px',marginTop:'3%'}}>China Virus Spread is accelrating, Xi Warns</h6>
   <p  style={{marginTop:'-1%',fontSize:'15px',lineHeight:'1.3em'}}> China's President tells a high-level meeting that the country faces a "grave situation"</p> 
   <p> <i class="fa fa-clock-o" aria-hidden="true"></i> 2h | China </p>  
  
   </div>   
</Cell>
   </Grid> 
   </div>
  <div style={{textAlign:'left',fontFamily:"'Open Sans', sans-serif",marginTop:'-3.5%'}}><ul style={{fontSize:'13px',fontWeight:'bold'}}>
  <li className="hvr-ele"  style={{display:'inline',padding:'5px',marginRight:'7%'}}>All you need to know</li>
<li className="hvr-ele"  style={{display:'inline',marginRight:'7%'}}>Trump's  Ukraine Story</li>
<li className="hvr-ele" style={{display:'inline',marginRight:'7%'}}>Your Question Answred</li></ul></div>
    </div>


<Grid>

<Cell col={2}>
  <div className="hvr-ele" style={{marginLeft:'15%',width: '100%',fontFamily:"'Open Sans', sans-serif"}}>
<img src={Iraq} style={{width:'220px' , height:'130px'}}/>
   <h6  style={{fontWeight:'bold',color:'black',lineHeight:'1.3em',fontSize:'15px',marginTop:'3%'}}>Iraq security forces enters Baghdad</h6>
   <p style={{marginTop:'-1%',fontSize:'15px',lineHeight:'1.3em'}}> China's President tells a high-level meeting that the country faces a "grave situation"</p> 
   <p> <i class="fa fa-clock-o" aria-hidden="true"></i> 2h | Iraq </p>  
   </div>
</Cell>
<Cell col={2}>
<div className="hvr-ele" style={{marginLeft:'25%',width: '100%',fontFamily:"'Open Sans', sans-serif"}}>
<img src={Turkey} style={{width:'220px' , height:'130px'}}/>
   <h6  style={{fontWeight:'bold',color:'black',lineHeight:'1.3em',fontSize:'15px',marginTop:'3%'}}>Massive Earthquake Hits Tuekey</h6>
   <p style={{marginTop:'-1%',fontSize:'15px',lineHeight:'1.3em'}}> China's President tells a high-level meeting that the country faces a "grave situation"</p> 
   <p> <i class="fa fa-clock-o" aria-hidden="true"></i> 2h | Turkey </p>    
 </div>
</Cell>
<Cell col={2}>
<div className="hvr-ele" style={{marginLeft:'35%',width: '100%',fontFamily:"'Open Sans', sans-serif"}}>
<img src={Music} style={{width:'220px' , height:'130px'}}/>
   <h6 className="hvr-ele" style={{fontWeight:'bold',color:'black',lineHeight:'1.3em',fontSize:'15px',marginTop:'3%'}}>Does County Music recognize its roots ?</h6>
   <p style={{marginTop:'-1%',fontSize:'15px',lineHeight:'1.3em'}}> China's President tells a high-level meeting that the country faces a "grave situation"</p> 
   <p> <i class="fa fa-clock-o" aria-hidden="true"></i> 2h | Music </p>  
  </div>
  
</Cell>
<Cell col={2}>
<div className="hvr-ele" style={{marginLeft:'45%',width: '100%',fontFamily:"'Open Sans', sans-serif"}}>
<img src={Professor} style={{width:'220px' , height:'130px'}}/>
   <h6 className="hvr-ele" style={{fontWeight:'bold',color:'black',lineHeight:'1.3em',fontSize:'15px',marginTop:'3%'}}>I didn't want to wait to be hit : Prof Shaun</h6>
   <p style={{marginTop:'-1%',fontSize:'15px',lineHeight:'1.3em'}}> China's President tells a high-level meeting that the country faces a "grave situation"</p> 
   <p> <i class="fa fa-clock-o" aria-hidden="true"></i> 2h | Professor </p>  
  
  </div>
</Cell>
<Cell col={2}>
<div  className="hvr-ele" style={{marginLeft:'59%',width: '100%', fontFamily:"'Open Sans', sans-serif",borderTop: '1px solid lightgrey'}}>
<h6 className="hvr-ele" style={{fontWeight:'bold',color:'black',lineHeight:'1.3em',fontSize:'15px',marginTop:'3%'}}>Trump makes history, attending anti-abortion rally  </h6>
   <p> <i class="fa fa-clock-o" aria-hidden="true"></i> 2h | Us& Canada </p>  
   <h6 className="hvr-ele" style={{fontWeight:'bold',color:'black',lineHeight:'1.3em',fontSize:'15px',marginTop:'3%'}}>Cars with hidden drugs sold at police station.  </h6>
   <p> <i class="fa fa-clock-o" aria-hidden="true"></i> 2h | Asia </p>  
  
  </div>
</Cell>

</Grid>

</>
);
}

export default App;
