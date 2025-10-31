import { Snowflake } from "lucide-react";

import { Card, CardBody } from "@/components/ui/Card";

interface WinterWisdomProps {
  quote: string;
  author: string;
}

export const WinterWisdom = ({ quote, author }: WinterWisdomProps) => {
  return (
    <Card className="bg-blue-50 border-blue-200 shadow-sm">
      <CardBody className="pt-4">
        <div className="flex items-start gap-3">
          <Snowflake className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-blue-900">Winter Wisdom</h4>
            <p className="text-sm text-blue-900 mt-1 italic">
              &quot;{quote}&quot;
            </p>
            <p className="text-xs text-gray-600 mt-2 text-right">— {author}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
