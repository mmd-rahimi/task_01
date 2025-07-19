import { useContext } from "react";
import { ReferralContext } from "../context/ReferralContext";
import ExpertiseUnit from "../components/ExpertiseUnit";
import ExpertiseFieldList from "../components/ExpertiseFieldList";

const units = [
  { id: "1", name: "واحد تعمیرات" },
  { id: "2", name: "واحد بهره برداری" },
  { id: "3", name: "واحد HSE" },
  { id: "4", name: "واحد بازرسی فنی" },
  { id: "5", name: "واحد مهندسی فرآیند" },
  { id: "6", name: "واحد مهندسی طراحی" },
  { id: "7", name: "واحد مهندسی عمومی" },
];

function Expertise() {
  const { referralData, activeUnitId, setActiveUnitId } = useContext(ReferralContext);

  const handleTabClick = (unitId) => {
    setActiveUnitId(unitId)
  }

    const activeUnit = units.find((u) => u.id === activeUnitId);

if (!Object.keys(referralData).length) {
  return <p className="text-center mt-4">لطفاً ابتدا فرم ارجاع را تکمیل کنید.</p>;
}

    const referral = activeUnit ? referralData[activeUnit.id] : null;

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2 mb-6 border-b pb-2">
        {units.map((unit) => (
          <button
            key={unit.id}
            className={`px-4 py-2 border rounded ${
              unit.id === activeUnitId
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => handleTabClick(unit.id)}
          >
            {unit.name}
          </button>
        ))}
      </div>

      {!referral ? (
        <p className="text-center mt-4">برای این واحد هنوز ارجاعی ثبت نشده.</p>
      ) : (
        <ExpertiseUnit unit={referral.unit} reason={referral.reason} />
      )}

      <ExpertiseFieldList />
    </div>
  );
}

export default Expertise;
