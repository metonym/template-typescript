import { describe, beforeEach, expect, test, vi } from "vitest";
import Template from "../src";
import { Mode } from "../src/Template";

describe("Template", () => {
  let template: Template | null;

  beforeEach(() => {
    template = null;
  });

  test("`dev` mode", () => {
    console.log = vi.fn();
    expect(console.log).not.toHaveBeenCalled();

    template = new Template({ mode: Mode.dev });

    expect(template).toBeInstanceOf(Template);
    expect(console.log).toHaveBeenCalledWith("dev mode");
  });
});
