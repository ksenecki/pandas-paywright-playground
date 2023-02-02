import test, { expect } from '@playwright/test';
import { getPDFContents } from '@utils/pdf-handler';
import ComparePdf from 'compare-pdf';

test.describe('PDF tests', () => {
  test.only('Read pdf file', async () => {
    const pdfContents = await getPDFContents(
      './data/baselinePdfs/baseline.pdf'
    );

    for (let i = 0; i < 20; i++) {
      console.log(pdfContents.Pages[0].Texts[`${i}`].R[0].T);
    }
  });

  const config = {
    paths: {
      actualPdfRootFolder: process.cwd() + '/data/actualPdfs',
      baselinePdfRootFolder: process.cwd() + '/data/baselinePdfs',
      actualPngRootFolder: process.cwd() + '/data/actualPngs',
      baselinePngRootFolder: process.cwd() + '/data/baselinePngs',
      diffPngRootFolder: process.cwd() + '/data/diffPngs',
    },
    settings: {
      imageEngine: 'graphicsMagick',
      density: 100,
      quality: 70,
      tolerance: 0,
      threshold: 0.05,
      cleanPngPaths: false,
      matchPageCount: true,
    },
  };

  test('Simple pdf test', async ({ page }) => {
    const comparePdf = new ComparePdf(config);
    const masks = [
      { pageIndex: 1, coordinates: { x0: 35, y0: 70, x1: 145, y1: 95 } },
      { pageIndex: 1, coordinates: { x0: 185, y0: 70, x1: 285, y1: 95 } },
    ];
    let comparisonResults = await comparePdf
      .actualPdfFile('result.pdf')
      .baselinePdfFile('example.pdf')
      .addMasks(masks)
      .compare();
    console.log(comparisonResults);
    expect(comparisonResults.status).toEqual('passed');
  });

  test('Generate pdf', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/PDF');
    await page.pdf({ path: './data/baselinePdfs/page.pdf' });
  });
});
