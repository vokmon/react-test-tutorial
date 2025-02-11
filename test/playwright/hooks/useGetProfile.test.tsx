import { renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useGetProfile } from "@/hooks/useGetProfile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { JSX } from "react/jsx-runtime";

describe("useGetProfile", () => {
  let wrapper: ({ children }: { children: React.ReactNode; }) => JSX.Element;
  beforeEach(() => {
    const queryClient = new QueryClient();
    wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    vi.resetAllMocks();
    vi.clearAllMocks();
  });
  it("get user profile with mock data", async () => {
    vi.spyOn(axios, "get").mockResolvedValue({data: { id: 4, name: "John", email: "john@gmail.com" }});

    const { result } = renderHook(() => useGetProfile("4"), { wrapper });
    await waitFor(() =>
      expect(result.current.data).toMatchObject({ id: 4, name: "John", email: "john@gmail.com" })
    );
  });

  it("get user profile with actual data", async () => {
    const { result } = renderHook(() => useGetProfile("4"), { wrapper });
    await waitFor(() =>
      expect(result.current.data).toMatchObject({ id: 4, name: "Patricia Lebsack", email: "Julianne.OConner@kory.org" })
    );
  });
});
