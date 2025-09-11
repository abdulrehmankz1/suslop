"use server";

export async function submitContact(formData: FormData) {
  try {
    formData.append("_wpcf7", "64"); // numeric form ID
    formData.append("_wpcf7_version", "5.9.6"); // check actual CF7 version
    formData.append("_wpcf7_locale", "en_US");
    formData.append("_wpcf7_unit_tag", "wpcf7-f64-o1"); // inspect from frontend
    formData.append("_wpcf7_container_post", "0");

    const response = await fetch(
      "https://suslop.wasmer.app/wp-json/contact-form-7/v1/contact-forms/64/feedback",
      {
        method: "POST",
        body: formData,
      }
    );

    return await response.json();
  } catch (error) {
    console.error("Error submitting form:", error);
    return { status: "error", message: "Server error" };
  }
}
