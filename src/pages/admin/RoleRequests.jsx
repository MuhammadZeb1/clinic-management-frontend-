import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRoleRequests,
  approveRole,
  rejectRole,
} from "../../features/roleRequest/roleRequestSlice";

export default function RoleRequests() {
  const dispatch = useDispatch();

  const requests = useSelector(
    (state) => state.roleRequests.list
  );

  useEffect(() => {
    dispatch(getRoleRequests());
  }, [dispatch]);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">
        Role Requests
      </h1>

      {requests.map((r) => (
        <div key={r._id} className="border p-3 mt-2">
          <p>User: {r.userId?.name}</p>
          <p>Requested: {r.requestedRole}</p>
          <p>Status: {r.status}</p>

          <button
            className="bg-green-500 text-white px-2 mr-2"
            onClick={() => dispatch(approveRole(r._id))}
          >
            Approve
          </button>

          <button
            className="bg-red-500 text-white px-2"
            onClick={() => dispatch(rejectRole(r._id))}
          >
            Reject
          </button>
        </div>
      ))}
    </div>
  );
}