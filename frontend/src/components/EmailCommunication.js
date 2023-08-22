import React, { useState } from 'react';

function EmailCommunication() {
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = () => {
    // Code to send email goes here
  };

  return (
    <div>
      <input type="email" value={sender} onChange={e => setSender(e.target.value)} placeholder="Sender" />
      <input type="email" value={recipient} onChange={e => setRecipient(e.target.value)} placeholder="Recipient" />
      <input type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" />
      <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" />
      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
}

export default EmailCommunication;
