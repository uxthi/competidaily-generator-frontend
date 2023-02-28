import emailjs from "@emailjs/browser";
import sendMail from ".";

jest.mock("next/config", () => ({
  __esModule: true,
  default: () => ({
    publicRuntimeConfig: {
      emailJsServiceID: "test_service_id",
      emailJsTemplateID: "test_template_id",
      emailJsPublicKey: "test_public_key",
    },
  }),
}));

jest.mock("@emailjs/browser");

describe("sendMail", () => {
  it("should send a form and return success when the response status is 200", async () => {
    const form = {
      name: "Test User",
      email: "test@example.com",
      message: "This is a test message",
    };
    const response = {
      status: 200,
    };
    emailjs.sendForm.mockResolvedValueOnce(response);

    const result = await sendMail(form);

    expect(emailjs.sendForm).toHaveBeenCalledWith(
      "test_service_id",
      "test_template_id",
      form,
      "test_public_key"
    );
    expect(result).toEqual("success");
  });

  it("should send a form and return error when the response status is not 200", async () => {
    const form = {
      name: "Test User",
      email: "test@example.com",
      message: "This is a test message",
    };
    const response = {
      status: 500,
    };
    emailjs.sendForm.mockResolvedValueOnce(response);

    const result = await sendMail(form);

    expect(emailjs.sendForm).toHaveBeenCalledWith(
      "test_service_id",
      "test_template_id",
      form,
      "test_public_key"
    );
    expect(result).toEqual("error");
  });

  it("should handle errors and return error", async () => {
    const form = {
      name: "Test User",
      email: "test@example.com",
      message: "This is a test message",
    };
    const error = new Error("An error occurred");
    emailjs.sendForm.mockRejectedValueOnce(error);

    const result = await sendMail(form);

    expect(emailjs.sendForm).toHaveBeenCalledWith(
      "test_service_id",
      "test_template_id",
      form,
      "test_public_key"
    );
    expect(result).toEqual("error");
  });
});
