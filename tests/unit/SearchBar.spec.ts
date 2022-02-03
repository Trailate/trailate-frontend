import { mount } from "@vue/test-utils";
import SearchBar from "@/views/Searchbar.vue";

describe("SearchBar.vue", () => {
  it("renders folder view", () => {
    const mockRoute = {};
    const wrapper = mount(SearchBar, {
      global: {
        mocks: {
          $route: mockRoute,
        },
      },
    });
    expect(wrapper.text()).toBeDefined();
  });
});
