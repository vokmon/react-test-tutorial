import { beforeEach, describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import App2 from "@/App2";

describe("Test e2e with playwright", () => {
  beforeEach(() => {
    render(<App2 />);
  });


  it("should mount Bear component correctly", async () => {
    const bearComponent = page.getByTestId("bear");
    await expect.element(bearComponent).toBeVisible();
    await expect.element(bearComponent.getByRole("heading", {name: "0 around here..."})).toBeVisible();
  })
});
