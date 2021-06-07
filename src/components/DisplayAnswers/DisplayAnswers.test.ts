import {
  getOptionStyle,
  isCorrectOption,
  isOptionSelected,
} from "./DisplayAnswers.utils";
import { result } from "../../pages/Scoreboard/Scoreboard.test";

describe("testing utility functions of DisplayAnswers", () => {
  test("should return true only if selected option is correct option", () => {
    let isCorrect = isCorrectOption(
      result.resultArray,
      "3",
      "5131b8ac-0c8c-4222-b60c-27e22953598d"
    );

    expect(isCorrect).toBe<boolean>(true);

    isCorrect = isCorrectOption(
      result.resultArray,
      "1",
      "5131b8ac-0c8c-4222-b60c-27e22953598d"
    );

    expect(isCorrect).toBe<boolean>(false);
  });

  test("should return true if current option is selected by the user", () => {
    let selected = isOptionSelected(
      result.resultArray,
      "1",
      "5131b8ac-0c8c-4222-b60c-27e22953598d"
    );

    expect(selected).toBe<boolean>(false);

    selected = isOptionSelected(
      result.resultArray,
      "2",
      "5131b8ac-0c8c-4222-b60c-27e22953598d"
    );

    expect(selected).toBe<boolean>(false);

    selected = isOptionSelected(
      result.resultArray,
      "3",
      "5131b8ac-0c8c-4222-b60c-27e22953598d"
    );

    expect(selected).toBe<boolean>(true);

    selected = isOptionSelected(
      result.resultArray,
      "4",
      "5131b8ac-0c8c-4222-b60c-27e22953598d"
    );

    expect(selected).toBe<boolean>(false);

    selected = isOptionSelected(
      result.resultArray,
      "1",
      "d42d8c2f-4b9c-43d0-81e7-0e3a72b56b23"
    );

    expect(selected).toBe<boolean>(false);

    selected = isOptionSelected(
      result.resultArray,
      "2",
      "d42d8c2f-4b9c-43d0-81e7-0e3a72b56b23"
    );

    expect(selected).toBe<boolean>(false);

    selected = isOptionSelected(
      result.resultArray,
      "3",
      "d42d8c2f-4b9c-43d0-81e7-0e3a72b56b23"
    );

    expect(selected).toBe<boolean>(false);

    selected = isOptionSelected(
      result.resultArray,
      "4",
      "d42d8c2f-4b9c-43d0-81e7-0e3a72b56b23"
    );

    expect(selected).toBe<boolean>(false);
  });

  test("should return style for both correct and incorrect option", () => {
    const correctOptionStyle = getOptionStyle(
      result.resultArray,
      "3",
      "5131b8ac-0c8c-4222-b60c-27e22953598d"
    );

    expect(correctOptionStyle).toBe("green");

    const incorrectOptionStyle = getOptionStyle(
      result.resultArray,
      "2",
      "b95791c3-e76b-426f-9d2f-d508750bdcac"
    );

    expect(incorrectOptionStyle).toBe("red");

    const notAnsweredStyle = getOptionStyle(
      result.resultArray,
      "",
      "5131b8ac-0c8c-4222-b60c-27e22953598d"
    );

    expect(notAnsweredStyle).toBe("");
  });
});
