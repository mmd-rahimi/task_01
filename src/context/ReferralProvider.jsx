import { useEffect, useState } from "react";
import { ReferralContext } from "./ReferralContext";

export function ReferralProvider({ children }) {
  const [referralData, setReferralData] = useState({});
  const [activeUnitId, setActiveUnitId] = useState(null);
  const [unitFields, setUnitFields] = useState({});

  // save in localStorage
  useEffect(() => {
    try {
      const savedReferrals = localStorage.getItem("referralData");
      const savedUnitFields = localStorage.getItem("unitFields");

      if (savedReferrals) {
        setReferralData(JSON.parse(savedReferrals));
      }
      if (savedUnitFields) {
        setUnitFields(JSON.parse(savedUnitFields));
      }
    } catch (err) {
      console.error("خطا در خواندن localStorage:", err);
    }
  }, []);

  // Save referralData
  useEffect(() => {
    try {
      localStorage.setItem("referralData", JSON.stringify(referralData));
      console.log("saved referralData:", referralData);
    } catch (e) {
      console.error("خطا در ذخیره referralData:", e);
    }
  }, [referralData]);

  // Save unitFields
  useEffect(() => {
    try {
      localStorage.setItem("unitFields", JSON.stringify(unitFields));
      console.log("saved unitFields:", unitFields);
    } catch (e) {
      console.error("خطا در ذخیره unitFields:", e);
    }
  }, [unitFields]);
  

  const setUnitReferral = (unitId, data) => {
    setReferralData((prev) => ({ ...prev, [unitId]: data }));
  };

  const addFieldToUnit = (unitId) => {
    setUnitFields((prev) => ({
      ...prev,
      [unitId]: [...(prev[unitId] || []), {}],
    }));
  };

  return (
    <ReferralContext.Provider
      value={{
        referralData,
        setUnitReferral,
        activeUnitId,
        setActiveUnitId,
        unitFields,
        addFieldToUnit,
      }}
    >
      {children}
    </ReferralContext.Provider>
  );
}
