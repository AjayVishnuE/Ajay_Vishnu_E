import React from 'react';
import './hellotextloop.css'; 
import Typewriter from 'typewriter-effect';

function HelloTextLoop(){
    const hello = ["നമസ്ക്കാരം!","HOLA!","HELLO!","வணக்கம்!","नमस्ते!","مرحبًا!"];
    return(
        <div className='overall-container'>
            <div className="typewriter-container">
                <span>
                    <Typewriter
                            options={{
                                strings: hello,
                                autoStart: true,
                                loop: true,
                            }}
                    />
                </span>
            </div>
        </div>
);
}

export default HelloTextLoop;