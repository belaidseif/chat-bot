import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {name:'bot', msg:'Hello', pos:"start"},
        {name:'bot', msg:'How are you', pos:"end"},
        {name:'client', msg:'Hello', pos:"only" },
        {name:'bot', msg:'Can I help you', pos:"only" },
    ])
    const sendMessage = e => {
        e.preventDefault();
        if(messages[messages.length-1].name === 'client'){
            if(messages[messages.length-1].pos === 'only'){
                messages[messages.length-1].pos = 'start'
                setMessages([...messages, {name: 'client', msg: input, pos: 'end'}])
            }else{
                messages[messages.length-1].pos = 'middle'
                setMessages([...messages, {name: 'client', msg: input, pos: 'end'}])
            }
        }else{
            setMessages([...messages, {name: 'client', msg: input, pos: 'only'}])
        }
        setInput('')
    }
    const updateInput = e => {
        setInput(e.target.value)
    }
  return (
    <div className="App">
      <div className="container">
        <div className="header">
            <div className="icon">
                <img src={'robot.png'} alt=""/>
            </div>
            <div className="bot-name">Mr Robot</div>
        </div>
        <div className="body">
            <div className="msg"><div className="server without-icon start"><img src="robot.png" alt=""/> world How are you How are you How are you How are you How are you</div></div>
            <div className="msg"><div className="server icon end"><img src="robot.png" alt=""/> How are you How are you How are you How are you How are you </div></div>
            <div className="msg"><div className="client end">world world </div></div>
            
             {messages.map((msg, i) => (
                 <div className="msg" key={i}><div 
                 className={
                     msg.name=='bot'? msg.pos === 'start' || msg.pos ==='middle'? 'server without-icon '+msg.pos : 'server icon '+msg.pos:'client '+msg.pos
                    
                    }
                ><img src="robot.png" alt=""/>{msg.msg}</div></div>
             ))}
        </div>
        <div className="footer">
            <form onSubmit={sendMessage}>
                <div className="input">
                    <input type="text" placeholder="Aa" value={input} onChange={updateInput} />
                </div>
                <div className="send">
                    <button type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
                    
                </div>
            </form>
        </div>
    </div>
    </div>
  );
}

export default App;
