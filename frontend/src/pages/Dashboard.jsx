import UploadSection from "../components/UploadSection";
import DocumentTable from "../components/DocumentTable";
import NotificationBell from "../components/NotificationBell";
import AIAssistant from "../components/AIAssistant";

export default function Dashboard() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px"
        }}
      >
        <h1>SWS AI Document Hub</h1>
        <NotificationBell />
      </div>

      <UploadSection />

      <DocumentTable />

      <AIAssistant />
    </div>
  );
}