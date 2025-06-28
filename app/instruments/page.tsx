import { createClient } from '@/lib/supabase/server';
import InstrumentsList from './instruments-list';

export default async function InstrumentsPage() {
  const supabase = await createClient();
  const { data: instruments, error } = await supabase.rpc("get_instruments", {});
  
  if (error) {
    return <div>Error loading instruments</div>;
  }

  return (
    <div>
      <h1>Instruments</h1>
      <InstrumentsList instruments={instruments || []} />
    </div>
  );
}