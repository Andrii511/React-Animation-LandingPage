import React from "react";
import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry";
import "../styles/Litepaper.scss";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function Litepaper() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageHeight, setPageHeight] = useState(400);
  const [pageWidth, setPageWidth] = useState(400);
  const ref = useRef(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const handlePrevClick = () => {
    pageNumber > 0 && setPageNumber((prev) => prev - 1);
  };
  const handleNextClick = () => {
    pageNumber < numPages && setPageNumber((prev) => prev + 1);
  };

  useEffect(() => {
    if (ref) {
      const scrollHeight = ref.current.scrollHeight;
      const scrollWidth = ref.current.scrollWidth;

      setPageHeight(scrollHeight);
      setPageWidth(scrollWidth);
    }
  }, []);
  const pageProps = {
    height: pageHeight,
    width: pageWidth,
  };
  const currentProp = pageHeight < pageWidth ? "height" : "width";
  return (
    <div className="litepaper h-screen items-center justify-between gap-4 flex flex-col w-full bg-black pt-10 lg:pt-24">
      <div ref={ref} className="h-full w-full xl:hidden">
        <Document
          className="w-full h-full flex  justify-center"
          file="assets/OtakuOriginsLitepaper.pdf#view=fitW"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <div className="relative page-container ">
            <Page
              {...{ [currentProp]: pageProps[currentProp] }}
              pageNumber={pageNumber}
            />{" "}
            {pageNumber < numPages && (
              <div
                onClick={handleNextClick}
                className="page-button next-page text-white"
              >
                Next Page
              </div>
            )}
            <div className="pagination">
              {pageNumber}/{numPages}
            </div>
            {pageNumber > 1 && (
              <div
                onClick={handlePrevClick}
                className="page-button prev-page text-white"
              >
                Prev Page
              </div>
            )}
          </div>
        </Document>
      </div>
      <div className="w-full h-full hidden xl:block">
        <embed
          className=""
          title="comic-book"
          width="100%"
          height="100%"
          src="/assets/OtakuOriginsLitepaper.pdf#view=fitH"
        />
      </div>
    </div>
  );
}

export default Litepaper;
