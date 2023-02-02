export type PdfFileType = {
  Transcoder: string;
  Meta: {
    PDFFormatVersion: string;
    IsAcroFormPresent: boolean;
    IsXFAPresent: boolean;
    Producer: string;
    CreationDate: string;
    ModDate: string;
    Metadata: unknown;
  };
  Pages: {
    Width: number;
    Height: number;
    HLines: { x: number; y: number; w: number; l: number; oc: string }[];
    VLines: unknown[];
    Fills: { x: number; y: number; w: number; h: number; oc: string }[];
    Texts: {
      x: number;
      y: number;
      w: number;
      oc: string;
      sw: number;
      A: string;
      R: { T: 'string'; S: number; TS: number[] }[];
    }[];
    Fields: unknown[];
    Boxsets: unknown[];
  }[];
};
