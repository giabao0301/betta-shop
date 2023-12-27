const fetchDataFromDjango_Data = async () => {
    try {
      const response = await fetch('http://192.168.68.102:8000/getfish_no_special/');  // Adjust the URL based on your Django project structure
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  export default fetchDataFromDjango_Data;
  