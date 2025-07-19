function ExpertiseField() {
  return (
    <div className="flex flex-row gap-2 mb-2">
      <input
        type="text"
        className="border w-[10rem]"
        placeholder="نام کارشناس"
      />
      <input type="date" className="border w-[7rem]" />
      <input
        type="number"
        className="border w-[10rem]"
        placeholder="مهلت انجام"
      />
      <input type="date" className="border" />
    </div>
  );
}

export default ExpertiseField;
