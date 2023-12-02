import { ResetButton } from "./ResetButton";
import { HistoryButton } from "./HistoryButton";

export default function EditorButtons() {
  return (
    <div className="editor-buttons">
      <HistoryButton />
      <ResetButton />
    </div>
  );
}
