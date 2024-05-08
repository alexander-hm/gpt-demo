import React from 'react';
import OpenAI from 'openai';

function Controls(props) {
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const generate = async () => {
    console.log('generating: ', document.getElementById('text-input').value);
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: document.getElementById('text-input').value },
      ],
      model: 'gpt-3.5-turbo',
    });

    console.log('completion: ', completion);

    document.getElementById('transcription-output').innerHTML = completion.choices[0].message.content;
  };

  return (
    <div id="controls">
      <div id="user-input">
        <input type="text" id="text-input" />
        <button type="button" onClick={generate}>Submit</button>
      </div>
      <p id="transcription-output" />

    </div>
  );
}

export default Controls;
