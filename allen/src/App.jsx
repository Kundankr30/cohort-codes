import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.png'
import './App.css'

function App() {
  const [count,setCount] = useState(1);
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData,setTabData] = useState({}); 
      const res1 ={
      "name":"kundan",
      "followers":"2000",
      "time":"12",
      "discription":"Ai will eat my job ,what to do now @messi advice please"
    
    }
    const res2 ={
      "name":"Messi",
      "followers":"142000",
      "time":"1",
      "discription":"@kundankumar who the fuck study cs,come play football with me , i will give you 3 rd goalkepper role "
      
    }
    const res3 ={
      "name":"ronaldo",
      "followers":"203300",
      "time":"2",
      "discription":"Fuck off @messi and @kundan , make rells"
    }
  function increase(){
    setCount(count+1);
  }
  useEffect(function(){
    console.log("send request to backend to get data for the web"+currentTab)
    setTabData(currentTab);
    //fetch("https://mpce3292139296501e9d.free.beeceptor.com" +currentTab)
    //.then(async res =>{
      //const json = await res.json();
      //setTabData("yes boy");
      // <PostComponents name="Lionel Messi" followers="20 million" time="5 min" discription="@kundankumar who the fuck study cs,come play football with me , i will give you 3 rd goalkepper role "/>
    },[currentTab]);
  return(
    <div>
  <div style={{display:"flex",textAlign:"center",gap:"1rem"}}>
    <button onClick={function(){setCurrentTab(res1)}}>Todo #1</button>
    <button onClick={function(){setCurrentTab(res2)}}>Todo #2</button>
    <button onClick={function(){setCurrentTab(res3)}}>Todo #3</button>
    </div>
    <PostComponents name={tabData.name} followers={tabData.followers} time={tabData.time} discription={tabData.discription}/>
   <div style={{textAlign:"center"}}>

   </div>
   
   </div>
 

  )
}
const cardStyle = {
  width: "320px",        // fixed width
  minHeight: "200px",    // fixed minimum height
  background: "#fff",
  borderRadius: 10,
  border: "1px solid #ddd",
  padding: 15,
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-between"
};

const headerStyle = {
  display:"flex",
  alignItems:"center",
  marginBottom:"10px"
};

function PostComponents({name,followers,time,discription}){
  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <img src={viteLogo} style={{height:50}} alt=" Vite Logo" />
        <div style={{fontSize:13,marginLeft:10,textAlign:'left'}}>
          <div><strong><a>{name}</a></strong></div>
          <div><a>{followers}</a></div>
          <div><a>{time} min ago</a></div>
        </div>
      </div>
      <div style={{fontSize:15,textAlign:'left',wordWrap:"break-word"}}>
       <a>{discription}</a>
      </div>
    </div>
  )
}

export default App
