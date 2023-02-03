// @ts-ignore
import { PdfFileType } from './types';
import PDFParser from 'pdf2json';

export async function getPDFContents(
  pdfFilePath: string
): Promise<PdfFileType> {
  let pdfParser = new PDFParser();
  return new Promise((resolve, reject) => {
    pdfParser.on('pdfParser_dataError', (errData: { parserError: unknown }) =>
      reject(errData.parserError)
    );
    pdfParser.on('pdfParser_dataReady', (pdfData: PdfFileType) => {
      resolve(pdfData);
    });
    pdfParser.loadPDF(pdfFilePath);
  });
}
