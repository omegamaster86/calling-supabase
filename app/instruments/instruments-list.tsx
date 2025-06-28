'use client';

interface Instrument {
  id: number;
  name: string;
}

interface InstrumentsListProps {
  instruments: Instrument[];
}

export default function InstrumentsList({ instruments }: InstrumentsListProps) {
  return (
    <div>
      {instruments.length === 0 ? (
        <p>No instruments found</p>
      ) : (
        <ul>
          {instruments.map((instrument) => (
            <li key={instrument.id}>{instrument.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
} 