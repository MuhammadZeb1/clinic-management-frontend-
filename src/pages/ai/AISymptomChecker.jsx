import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAIAnalysis } from "../../features/ai/aiSlice";

export default function AISymptomChecker() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.ai.result);

  const [form, setForm] = useState({
    symptoms: "",
    age: "",
    gender: "",
  });

  const handleAnalyze = () => {
    dispatch(getAIAnalysis(form));
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">
        AI Symptom Checker
      </h1>

      <textarea
        placeholder="Enter symptoms"
        className="border p-2 w-full"
        onChange={(e) =>
          setForm({ ...form, symptoms: e.target.value })
        }
      />

      <input
        placeholder="Age"
        className="border p-2 w-full mt-2"
        onChange={(e) =>
          setForm({ ...form, age: e.target.value })
        }
      />

      <input
        placeholder="Gender"
        className="border p-2 w-full mt-2"
        onChange={(e) =>
          setForm({ ...form, gender: e.target.value })
        }
      />

      <button
        onClick={handleAnalyze}
        className="bg-purple-600 text-white px-4 py-2 mt-3"
      >
        Analyze
      </button>

      {result && (
        <div className="mt-4 border p-3">
          <h2 className="font-bold">AI Result:</h2>
          <pre>{JSON.stringify(result.ai, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}