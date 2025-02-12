export const postData = async (req, res) => {
  try {
    console.log("Sending data to PHP API...", req.body);

    const response = await fetch("https://markjdrummond.com/api.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const responseData = await response.json();
    res.json({ message: "Data successfully sent", data: responseData });
  } catch (error) {
    console.error("Error posting to PHP API:", error);
    res.status(500).json({ error: "Failed to send data" });
  }
};
