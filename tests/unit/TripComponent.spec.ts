import { mount } from "@vue/test-utils";
import TripComponent from "@/views/components/TripComponent.vue";

describe("TripComponent.vue", () => {
  it("renders folder view", () => {
    const mockRoute = {};
    const wrapper = mount(TripComponent, {
      global: {
        mocks: {
          $route: mockRoute,
        },
      },
    });
    expect(wrapper.text()).toContain("S 00");
  });
});
