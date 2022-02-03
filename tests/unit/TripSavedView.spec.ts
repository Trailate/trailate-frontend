import { mount } from "@vue/test-utils";
import TripSavedView from "@/views/TripSavedView.vue";

describe("TripSavedView.vue", () => {
  it("renders folder view", () => {
    const mockRoute = {};
    const wrapper = mount(TripSavedView, {
      global: {
        mocks: {
          $route: mockRoute,
        },
      },
    });
    expect(wrapper.text()).toBeDefined();
  });
});
