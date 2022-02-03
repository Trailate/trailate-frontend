import { mount } from "@vue/test-utils";
import TripDetailView from "@/views/TripDetailView.vue";

describe("TripDetailView.vue", () => {
  it("renders folder view", () => {
    const mockRoute = {};
    const wrapper = mount(TripDetailView, {
      global: {
        mocks: {
          $route: mockRoute,
        },
      },
    });
    expect(wrapper.text()).toBeDefined();
  });
});
