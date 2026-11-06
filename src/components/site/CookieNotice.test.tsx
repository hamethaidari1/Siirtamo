import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { CookieNotice } from "./CookieNotice";

function renderNotice() {
  const router = createRouter({
    routeTree: createRootRoute({ component: CookieNotice }),
    history: createMemoryHistory(),
  });
  return render(<RouterProvider router={router as never} />);
}

const notice = () => screen.findByRole("region", { name: "Evästeilmoitus" });

describe("CookieNotice", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.stubGlobal(
      "ResizeObserver",
      class {
        observe() {}
        disconnect() {}
      },
    );
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it("shows until dismissed and stays dismissed on the next visit", async () => {
    const first = renderNotice();
    await notice();

    fireEvent.click(screen.getByRole("button", { name: "Selvä" }));
    expect(screen.queryByRole("region", { name: "Evästeilmoitus" })).toBeNull();
    expect(localStorage.getItem("siirtamo-cookie-notice-seen")).toBe("1");
    first.unmount();

    renderNotice();
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(screen.queryByRole("region", { name: "Evästeilmoitus" })).toBeNull();
  });

  it("links to the cookie section of the privacy policy", async () => {
    renderNotice();
    await notice();
    expect(screen.getByRole("link", { name: "Lue lisää" }).getAttribute("href")).toBe(
      "/tietosuojaseloste#evasteet",
    );
  });
});
