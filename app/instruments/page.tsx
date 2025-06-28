import { createClient } from '@/lib/supabase/server';

export default async function Instruments() {
  const supabase = await createClient();
  const { data: instruments, error } = await supabase.from("instruments").select();

  if (error) {
    console.error("Error fetching instruments:", error);
  }
  console.log("Fetched instruments:", instruments);

  return <pre>{JSON.stringify(instruments, null, 2)}</pre>
}