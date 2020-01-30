import { renderHook } from "@testing-library/react-hooks";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

import useFetch from "../useFetch";

describe("Fetch API successfully without errors", () => {
  let initialValue;
  let mock;
  let url;

  beforeEach(() => {
    initialValue = [];
    mock = new MockAdapter(axios);
    // Mock network call. Instruct axios-mock-adapter to return with expected data and status code of 200.
    url = "http://mock";
  });

  test("useFetch performs GET request", async () => {
    const mockData = "response";
    mock.onGet(url).reply(200, mockData);

    // Invoke custom hook
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(url, initialValue)
    );
    // initial values before fetch
    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toEqual("");

    // emulate custom fetch
    await waitForNextUpdate();

    // updated states after fetch
    expect(result.current.data).toEqual("response");
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toEqual("");
  });

  test("useFetch sets loading and fetched to false, and returns initial value and error log on network error", async () => {
    mock.onGet(url).networkError();

    // Invoke custom hook
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(url, initialValue)
    );

    expect(result.current.loading).toBeTruthy();
    expect(result.current.data).toEqual([]);
    expect(result.current.error).toEqual("");

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
    expect(result.current.data).toEqual([]);
    expect(result.current.error).not.toEqual("");
  });
});
