import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { KeyboardEvent } from "react";
interface Props {
  messageCotent: string;
  onChange: (messageCotent: string) => void;
  onSubmit: () => void;
}

export const ChatInput: React.FC<Props> = ({
  messageCotent,
  onChange,
  onSubmit,
}) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == "Enter" && e.shiftKey == false) {
      e.preventDefault();
      onSubmit();
    }
  };
  return (
    <div className="flex flex-col w-full flex-grow relative border border-black/10 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)]">
      <Textarea
        placeholder="Describe the diagram in nature language."
        value={messageCotent}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        onClick={onSubmit}
        variant="ghost"
        className="absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100 enabled:dark:hover:text-gray-400 disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40"
      >
        <Send className="mr-2 h-4 w-4" />
      </Button>
    </div>
  );
};
