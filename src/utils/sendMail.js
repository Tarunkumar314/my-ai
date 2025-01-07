export const handleSendMail = async (infoObj) => {
    const response = await fetch("http://localhost:3000/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(infoObj),
    });
    if (response.ok) {
      alert("Email sent successfully");
    } else {
      alert("Failed to send email");
    }
  }
