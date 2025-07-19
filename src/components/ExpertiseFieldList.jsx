import { useContext } from "react";
import ExpertiseField from "./ExpertiseField";
import { ReferralContext } from "../context/ReferralContext";

function ExpertiseFieldList() {
  const { activeUnitId, unitFields, addFieldToUnit } =
    useContext(ReferralContext);

  const fields = unitFields[activeUnitId] || [];

  return (
    <div className="w-full mt-6">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row">
          <p className="py-3 px-10 bg-blue-300">نام کارشناس</p>
          <p className="py-3 px-10 bg-blue-300">تاریخ ارجاع</p>
          <p className="py-3 px-10 bg-blue-300">مهلت انجام</p>
          <p className="py-3 px-10 bg-blue-300">سر رسید</p>
        </div>

        {fields.map((_, index) => (
          <ExpertiseField key={index} />
        ))}

        <button
          onClick={() => addFieldToUnit(activeUnitId)}
          className="mt-2 w-fit px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          + افزودن کارشناس
        </button>
      </div>
    </div>
  );
}

export default ExpertiseFieldList;
