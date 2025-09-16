"use server";

export async function submitContact(formData: FormData) {
  try {
    const response = await fetch(
      "https://suslop.wasmer.app/wp-json/contact-form-7/v1/contact-forms/64/feedback",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return {
      status: "mail_sent",
      message: "Message sent successfully!",
      response: data
    };

  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      status: "error",
      message: "Failed to send message. Please try again."
    };
  }
}