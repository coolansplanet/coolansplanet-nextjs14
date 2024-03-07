import mockAboutPage from "./__mocks__/aboutPage";
import mockFooter from "./__mocks__/footer";
import mockHomepageCover from "./__mocks__/homepageCover";
import mockPublications from "./__mocks__/publications";
import "@testing-library/jest-dom";
//import mockPublicationItem from "__mocks__/publicationItem";

jest.mock("./helpers/provider", () => {
  const aboutPage = mockAboutPage;
  const footer = mockFooter;
  const homepageCover = mockHomepageCover;
  const publications = mockPublications;
  //const publicationItem = mockPublicationItem;

  const generateMockRequest = ({
    data = {},
    milliseconds = 300,
    customCallback,
  }) => {
    return jest.fn(
      (args) =>
        new Promise((res, rej) => {
          const callback = !!customCallback
            ? customCallback(res, rej, args)
            : () => res({ data });

          setTimeout(callback, milliseconds);
        })
    );
  };

  return {
    getPublications: generateMockRequest(publications),
    getAboutPageData: generateMockRequest(aboutPage),
    getHomePageCover: generateMockRequest(homepageCover),
    getFooterData: generateMockRequest(footer),
  };
});
