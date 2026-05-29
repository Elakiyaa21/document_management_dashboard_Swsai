import Header from "../components/Header";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="p-6">
        <h2 className="text-2xl font-bold">
          SWS AI Document Hub
        </h2>
      </div>
    </div>
  );
}