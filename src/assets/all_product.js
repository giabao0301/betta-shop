const fetchDataFromDjango_Data_Category = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/getfish/');  // Adjust the URL based on your Django project structure
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
};
export default fetchDataFromDjango_Data_Category;
