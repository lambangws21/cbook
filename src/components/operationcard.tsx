import Image from 'next/image';
import { Operation } from "@/app/libs/operation";

interface OperationCardProps {
  operation: Operation;
}

const OperationCard: React.FC<OperationCardProps> = ({ operation }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <div className="flex items-center mb-4">
        <Image
        width={48}
        height={48}
          className="rounded-full mr-4"
          src={operation.avatar}
          alt={`${operation.operator} avatar`}
        />
        <div className="text-lg font-bold">{operation.operator}</div>
      </div>
      <ul className="list-disc list-inside">
        <li>{operation.tindakan}</li>
      </ul>
    </div>
  );
};

export default OperationCard;
