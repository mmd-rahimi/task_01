import { useContext, useState } from "react";
import { ReferralContext } from "../context/ReferralContext";
import { useNavigate } from "react-router";

function TechnicalServices() {
    const navigate = useNavigate();
  const {setUnitReferral, setActiveUnitId} = useContext(ReferralContext)
  const [referralReason, setReferralReason] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("1");
  const [isChecked, setIsChecked] = useState(false);

  const units = [
    { id: "1", name: "واحد تعمیرات" },
    { id: "2", name: "واحد بهره برداری" },
    { id: "3", name: "واحد HSE" },
    { id: "4", name: "واحد بازرسی فنی" },
    { id: "5", name: "واحد مهندسی فرآیند" },
    { id: "6", name: "واحد مهندسی طراحی" },
    { id: "7", name: "واحد مهندسی عمومی" },
  ];

  const handleSubmit = () => {
    if (isChecked && referralReason && selectedUnit) {
      const unit = units.find((u) => u.id === selectedUnit);
      setUnitReferral(unit.id, {
        unit,
        reason: referralReason,
      });
      setActiveUnitId(unit.id);
      navigate("/expertise");
    } else {
      alert("لطفاً قوانین را بپذیرید و تمامی فیلدها را پر کنید.");
    }
  };

  return (
    <div className="w-[50rem] h-[30rem] border mx-auto mt-3">
      <div className="flex flex-col w-full py-2 px-6 items-center gap-6">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="font-semibold">تایید کلیات درخواست شده</h1>
          <label className="text-sm">
            قوانین را می‌پذیرم{" "}
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
          </label>
        </div>
        <div className="flex flex-col gap-3 items-start w-full">
          <p>لطفا واحد مورد نظر را برای ارجاع درخواست انتخاب کنید.</p>
          <div className="flex flex-row gap-3 items-center">
            <select
              className="border"
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value)}
            >
              {units.map((unit) => (
                <option key={unit.id} value={unit.id}>
                  {unit.name}
                </option>
              ))}
            </select>
            <label>
              ارجاع به جهت:{" "}
              <input
                type="text"
                className="border"
                value={referralReason}
                onChange={(e) => setReferralReason(e.target.value)}
              />
            </label>
          </div>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSubmit}
          >
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
}

export default TechnicalServices;
