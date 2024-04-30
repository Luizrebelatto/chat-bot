import React from 'react';
import {AiChat} from '@nlux/react';
import '@nlux/themes/nova.css';
import './custom-nova-theme.css';
import { streamAdapter } from '../Chat/adapter.js';
import { user, botPictureUrl } from '../Chat/personas';
import Robot from "../assets/robo.png"

const Modal = ({ open, onClose }) => {
  if (!open) return  null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src={Robot} style={{ position: 'absolute', top: -110, left: 150 }}/>
        <button 
          style={{ 
            width: 26, 
            height: 26, 
            borderRadius: 13, 
            backgroundColor: 'orange', 
            alignItems: 'center', 
            position: 'absolute',
            border: 'none',
            left: 890,
            top: -10
          }}
        >
            <p style={{ color: 'white', textAlign: 'center' }}>X</p>
        </button>
            <div style={{  position: 'absolute', right: 200, top: 50 }}>
              <span style={{ color: "#ffffff", fontSize: 28 }}>Fale com IVO</span>
              <br/>
              <span style={{ color: "#ffffff", fontSize: 18 }}>Nosso assistente virtual</span>
              <br/>
              <div style={{ marginTop: 10 }}>
                <span style={{ color: "#ffffff", fontSize: 14 }}>Tire qualquer dúvida que você tiver</span>
                <br/>
                <span style={{ color: "#ffffff", fontSize: 14 }}>sobre as regras vigentes do MEI</span>
              </div>
            </div>
            
          <div className='modalRight'>
            <div className='btnContainer'>
              <AiChat
                className="custom-ai-chat-comp"
                adapter={streamAdapter}
                personaOptions={{
                  bot: {
                    name: 'Ivo',
                    tagline: 'Seu Assistente',
                    picture: botPictureUrl,
                  },
                  user
                }}
                promptBoxOptions={{
                  placeholder: 'Tire qualquer dúvida sobre MEI'
                }}
                layoutOptions={{
                  height: 350, maxWidth: 430
                }}
              />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Modal;
