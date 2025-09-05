import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";
import { useEffect } from "react";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addRequests(res?.data?.data));
    } catch (err) {}
  };

  useEffect(() => {
    fetchRequests();
  }, []);
  if (!requests) return;
  if (requests.length === 0) return <h1>No Requests found</h1>;

  return (
    <div className=" text-center my-10">
      <h1 className="text-3xl text-bold text-white">Connection Request</h1>
      {requests.map((request) => {
        const { firstName, lastName, age, gender, photoUrl, about } = request;

        return (
          <div className="flex items-center gap-4 m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto">
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
export default Requests;
