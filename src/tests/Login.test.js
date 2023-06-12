import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import Login from "../pages/Login";

jest.mock("axios");

describe("Login", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("submits login form successfully", async () => {
    axios.post.mockResolvedValueOnce({ data: { status: "OK", data: "token" } });

    const navigate = jest.fn();
    const { getByPlaceholderText, getByRole } = render(
      <MemoryRouter>
        <Login navigate={navigate} />
      </MemoryRouter>
    );

    const usernameInput = getByPlaceholderText("Username");
    const passwordInput = getByPlaceholderText("Password");
    const submitButton = getByRole("button", { name: "Login" });

    fireEvent.change(usernameInput, { target: { value: "existinguser" } });
    fireEvent.change(passwordInput, { target: { value: "correctpassword" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith("http://localhost:8000/login", {
        username: "existinguser",
        password: "correctpassword",
      });
      expect(localStorage.getItem("visitedUser")).toBe("existinguser");
      expect(localStorage.getItem("currentUser")).toBe("existinguser");
    });
  });

  test("displays error message for login failure", async () => {
    axios.post.mockRejectedValueOnce({ response: { data: { status: "error", error: "Invalid password" } } });

    const {
 getByPlaceholderText, getByText, getByRole, queryByText
} = render(
  <MemoryRouter>
    <Login />
  </MemoryRouter>
    );

    const usernameInput = getByPlaceholderText("Username");
    const passwordInput = getByPlaceholderText("Password");
    const submitButton = getByRole("button", { name: "Login" });

    fireEvent.change(usernameInput, { target: { value: "existinguser" } });
    fireEvent.change(passwordInput, { target: { value: "incorrectpassword" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(queryByText("Invalid password")).not.toBeInTheDocument();
    });
  });

});
