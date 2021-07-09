import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import { Exporting } from './Exporting';

export const Download = () => {
  return (
    <div>
      <PDFDownloadLink document={<Exporting />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
    </div>
  );
};
