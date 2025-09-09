import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      //   console.log(res.data.data);
      dispatch(addConnections(res?.data?.data));
      setError("");
    } catch (error) {
      console.log("Something went wrong", error);
      setError(error?.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) {
    if (error) {
      return (
        <h1 className="text-center text-2xl text-red-500 my-10">{error}</h1>
      );
    }
    return null;
  }
  if (connections.length === 0)
    return (
      <h1 className="flex justify-center my-10 text-2xl">
        No Connections found
      </h1>
    );

  return (
    <div className=" text-center my-10">
      <h1 className="text-3xl text-bold text-white">Connections</h1>
      {connections.map((connection) => {
        const { _id, firstName, lastName, age, gender, photoUrl, about } =
          connection;

        return (
          <div
            key={_id}
            className="flex items-center gap-4 m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
          >
            <div className="flex-shrink-0">
              <img
                src={photoUrl}
                alt="photo"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <div className="flex-1 text-left">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && (
                <p className="text-sm text-gray-400">{age + ", " + gender}</p>
              )}
              <p className="mt-1 text-sm">{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Connections;
