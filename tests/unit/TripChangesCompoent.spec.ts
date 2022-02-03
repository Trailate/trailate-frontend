import { mount } from "@vue/test-utils";
import TripChangesComponent from "@/views/components/TripChangesComponent.vue";

describe("TripChangesComponent.vue", () => {
  it("renders folder view", () => {
    const mockRoute = {};
    const wrapper = mount(TripChangesComponent, {
      global: {
        mocks: {
          $route: mockRoute,
        },
      },
    });
    expect(wrapper.text()).toContain("Wochentage");
    expect(wrapper.text()).toContain("Save Changes");
  });
});
