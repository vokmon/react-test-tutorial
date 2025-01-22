import { render, screen, waitFor } from "@testing-library/react";
import UserProfile from "@/components/UserProfile";
import { describe, it, expect, vi } from "vitest";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

describe("UserProfile", () => {
  it("fetches and displays the user data", async () => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce(new Response(JSON.stringify({ id: 4, name: "John", email: "john@gmail.com" })));

    render(<UserProfile userId={4} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /john/i })
      ).toBeInTheDocument();
      expect(screen.getByText(/john@gmail.com/i)).toBeInTheDocument();
    });
  });
});
