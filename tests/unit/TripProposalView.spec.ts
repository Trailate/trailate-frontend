import { mount } from "@vue/test-utils";
import TripProposalView from "@/views/TripProposalView.vue";

describe("TripProposalView.vue", () => {
  it("renders folder view", () => {
    const mockRoute = {};
    const wrapper = mount(TripProposalView, {
      global: {
        mocks: {
          $route: mockRoute,
        },
      },
    });
    expect(wrapper.text()).toBeDefined();
  });
});
