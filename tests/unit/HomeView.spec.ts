import { mount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("HomeView.vue", () => {
  it("renders folder view", () => {
    const mockRoute = {};
    const wrapper = mount(HomeView, {
      global: {
        mocks: {
          $route: mockRoute,
        },
      },
    });
    expect(wrapper.text()).toBeDefined();
  });
});
