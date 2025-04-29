import axios from "axios";

export const getBookingsByBranch = async (branch_id, token) => {
  const response = await axios.get("http://localhost:8080/api/v1/shalom/book/getByBranchId", {
    data: { branch_id },
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};
