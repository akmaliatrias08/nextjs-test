"use client";

import React, { useState } from 'react';
import { render } from 'react-dom';
import {Button, DatePicker, message} from 'antd';

export default function Home() {
  const [date, setDate] = useState(null) as any;
  const handleChange = (value: any) => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };

  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
      <Button>yo</Button>
    </div>
  );
}
