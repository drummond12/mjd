export const getData = async (req, res) => {
  try {
    console.log("Fetching tasks from PHP API...");
    const response = await fetch("https://markjdrummond.com/api.php");

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    const filteredData = data.map((task) => ({
      description: task.description,
      duedate: task.duedate,
    }));

    res.json(filteredData);
  } catch (error) {
    console.error("Error fetching PHP API:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};
