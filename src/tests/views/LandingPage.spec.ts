import { mount } from "@vue/test-utils";
import LandingPage from "../../views/LandingPage.vue";
import { expect, test } from "vitest";

test("mount component", async () => {
  expect(LandingPage).toBeTruthy();

  const wrapper = mount(LandingPage, {
    props: {
      title: "Vue3 Typescript Tailwind Starter",
    },
  });
  expect(wrapper.text()).toContain("Vue3 Typescript Tailwind Starter");
});
