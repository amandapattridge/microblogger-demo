import React from "react";
import { shallow } from "enzyme";
import CreatePost from "./../components/create-post/CreatePost";

describe("PostFeed", () => {
  it("posts a list of posts", done => {
    const mockPost = {
      userId: "1",
      title: "",
      body: "Mock post body"
    };
    const mockSuccessResponse = {
      ok: true
    };

    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise
    });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

    const wrapper = shallow(<CreatePost />);
    const instance = wrapper.instance();

    wrapper.setState({ post: mockPost }, () => {
      instance.validatePostForm();
    });

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        body: JSON.stringify(wrapper.state().post)
      }
    );

    process.nextTick(() => {
      expect(wrapper.state()).toEqual({
        post: mockPost,
        isUserIdValid: true,
        isBodyValid: true,
        isFormValid: true,
        postSuccess: true,
        postError: false
      });

      global.fetch.mockClear();
      done();
    });
  });
});
