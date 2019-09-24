import React from "react";
import { shallow } from "enzyme";
import PostFeed from "./../components/feed/PostFeed";

describe("PostFeed", () => {
  it("fetches a list of posts", done => {
    const mockSuccessResponse = [
      {
        userId: 1,
        id: 1,
        title: "Test title 1",
        body: "Test post 1"
      }
    ];

    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise
    });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

    const wrapper = shallow(<PostFeed />);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts"
    );

    process.nextTick(() => {
      expect(wrapper.state()).toEqual({
        getPostsSuccess: true,
        posts: mockSuccessResponse
      });

      global.fetch.mockClear();
      done();
    });
  });
});
