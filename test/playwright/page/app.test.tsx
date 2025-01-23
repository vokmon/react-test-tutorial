import { beforeEach, describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import App from "@/App";

describe("Test e2e with playwright", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should mount the component correctly", async () => {
    
    await expect.element(page.getByText("Hello, View!")).toBeInTheDocument();
    await expect.element(page.getByTestId("counter-value")).toHaveTextContent("0");
    await expect.element(page.getByRole("button")).toHaveTextContent("Increment");
    await expect.element(page.getByRole("heading", { name: 'Patricia Lebsack' })).toBeVisible();
    await expect.element(page.getByText("Julianne.OConner@kory.org")).toBeVisible()
  });


  it("should increment the number when clicking button", async () => {
    await expect.element(page.getByTestId("counter-value")).toHaveTextContent("0");
    await page.getByRole("button").click();
    await expect.element(page.getByTestId("counter-value")).toHaveTextContent("1");
  });
});
