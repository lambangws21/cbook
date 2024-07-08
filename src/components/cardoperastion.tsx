"use client";

import Link from 'next/link';
import { Dokter } from '@/app/libs/operationcard';
import Image from 'next/image';

interface DokterProps {
    dokterProps: Dokter;
}

const OperationCard: React.FC<DokterProps> = ({ dokterProps }) => {
    const { doctorName, doctorPhoto, operationName, operationLink } = dokterProps;

    return (
        <div className="border rounded-lg p-4 mb-4 flex items-center">
            <Image
                src={doctorPhoto}
                alt={`Foto dari ${doctorName}`}
                className="rounded-full mr-4"
                width={48}
                height={48}
            />
            <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">{doctorName}</h2>
                <Link href={operationLink} passHref>
                    <div className="text-blue-500 hover:underline">{operationName}</div>
                </Link>
            </div>
        </div>
    );
};

export default OperationCard;
