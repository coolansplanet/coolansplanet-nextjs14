import { render, waitFor } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer tests", () => {
  test("Displays data properly", async () => {
    const footerText = "some random footer text";
    const { getByText } = render(<Footer text={footerText} />);
    await waitFor(() => expect(getByText(footerText)).toBeInTheDocument());
  });
});
