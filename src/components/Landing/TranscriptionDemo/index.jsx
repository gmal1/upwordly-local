import React, { useState, useEffect } from 'react';
import { wordIterator } from './TextGenerator';

const TranscriptionDemo = () => {
  let captions = {
    text: '',
    addText: function (newText) {
      this.text += newText + ' ';
    },
  };

  const [text, setText] = useState(captions.text);

  useEffect(() => {
    let print = setInterval(() => {
      const data = wordIterator.next();

      if (data.done !== true) {
        captions.addText(data.word);
        setText(text + captions.text);
      } else {
        clearInterval(print);
      }

    }, 300);

    // Cleanup.
    return () => {
      clearInterval(print);
    };
  });

  return (
      <p id="transcription-text">{text}</p>
  );
};

export default TranscriptionDemo;
