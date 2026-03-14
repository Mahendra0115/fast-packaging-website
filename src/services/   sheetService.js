import axios from "axios";

const SHEET_URL = "https://script.google.com/macros/s/AKfycbxhg8-_4Z92X4t63l5Q5BoRmZnFd7QOokxEJiihSw5-C18qyacC-hCkl6d5cjgMO7-j/exec" // Apps Script URL
 

export const saveLeadToSheet = async (formData) => {
   try {

    const response = await axios.post(
      SHEET_URL,
      formData,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error saving to sheet:", error);
    throw error;
  }
};





