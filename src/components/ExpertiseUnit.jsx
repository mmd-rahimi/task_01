function ExpertiseUnit({ unit, reason }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">صفحه واحد: {unit.name}</h2>
      <p className="mb-4">دلیل ارجاع: {reason}</p>
    </div>
  );
}

export default ExpertiseUnit;
