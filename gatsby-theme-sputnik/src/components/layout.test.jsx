import * as React from "react";
import renderer from "react-test-renderer";
import { useStaticQuery } from "gatsby";
import Layout from "./layout";

beforeEach(() => {
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: "Test Title",
      },
    },
  }));
});

describe("Default Layout", () => {
  it("matches expectations", () => {
    const tree = renderer
      .create(
        <Layout>
          <span>Test Content</span>
        </Layout>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
