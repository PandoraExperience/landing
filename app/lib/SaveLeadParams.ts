'use client';

import { useEffect } from 'react';

const SaveLeadParams = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const leadData: Record<string, string> = {};

    params.forEach((value, key) => {
      leadData[key] = value;
    });

    if (Object.keys(leadData).length > 0) {
      fetch('/api/save-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ lead: leadData })
      });
    }
  }, []);

  return null;
}

export default SaveLeadParams;
