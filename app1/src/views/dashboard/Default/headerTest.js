import React, { useCallback, useEffect, useMemo, useState } from 'react';
import 'assets/scss/header-hack.css'

export const defaultAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const TextHackedEffectComponent = ({
  defaultText,
  timeOut = 50,
  alphabet = defaultAlphabet,
}) => {
  const [textHackedEffectComponentIteration, setTextHackedEffectComponentIteration] = useState(0); // Initialize it here
  const [text, setText] = useState('');
  const textLength = useMemo(() => text.length - 1, [text]);

  const generateRandomText = useCallback((size) => {
    let randomText = '';

    for (let i = 0; i < size; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      randomText += alphabet[randomIndex];
    }

    return randomText;
  }, [alphabet]);

  const handleMouseEnter = () => {
    setText(generateRandomText(defaultText.length));
    setTextHackedEffectComponentIteration(1 / 3);
  };

  useEffect(() => {
    if (textHackedEffectComponentIteration === undefined) {
      return;
    }
    setTimeout(() => {
      if (textHackedEffectComponentIteration >= textLength) {
        setTextHackedEffectComponentIteration(textLength);
        setText(defaultText);
        return;
      }
      const futurText = text
        .split('')
        .map((_letter, index) => {
          if (index < textHackedEffectComponentIteration) {
            return defaultText[index];
          }

          return alphabet[Math.floor(Math.random() * alphabet.length)];
        })
        .join('');
      setText(futurText);
      setTextHackedEffectComponentIteration(textHackedEffectComponentIteration + 1 / 3);
    }, timeOut);
  }, [textHackedEffectComponentIteration, textLength, defaultText, alphabet, timeOut]);

  return (
    <span
      className='span'
      style={{ textTransform: 'uppercase' }}
      onMouseEnter={handleMouseEnter}
    >
      {text}
    </span>
  );
};

export default TextHackedEffectComponent;
