import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
    //   console.log(res.data.data);
    // Start 15 min
      dispatch(addConnections(res?.data?.data));
    } catch (err) {
      // HANDLE LATER
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div className="flex justify-center my-10 ">
      <h1 className="text-2xl text-bold">Connections</h1>
    </div>
  );
};
export default Connections;
