import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { useEffect, useState } from "react";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const [error, seterror] = useState("");

  const reviewRequest = async (status, _id) => {
    try {
      const res = axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
      seterror("");
    } catch (err) {
      seterror(err?.response?.data?.message || "Something went wrong");
    }
  };

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      seterror(
        err?.response?.data?.message ||
          "Something went wrong in fetching request"
      );
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);
  if (!requests) {
    if (error) {
      return (
        <h1 className="text-center text-2xl text-red-500 my-10">{error}</h1>
      );
    }
    return null;
  }
  if (requests.length === 0)
    return (
      <h1 className="flex justify-center my-10 text-2xl">No Requests found</h1>
    );

  return (
    <div className=" text-center my-10">
      <h1 className="text-3xl text-bold text-white">Connection Request</h1>
      {requests.map((request) => {
        const { _id, firstName, lastName, age, gender, photoUrl, about } =
          request.fromUserId;

        return (
          <div
            key={_id}
            className="flex justify-between  items-center gap-4 m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto"
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
            <div>
              <button
                className="btn btn-primary mx-2"
                onClick={() => reviewRequest("rejected", request._id)}
              >
                Reject
              </button>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => reviewRequest("accepeted", request._id)}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Requests;
