import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { hasEnvVars } from "@/lib/utils";
import { createClient } from '@/lib/supabase/server';
import InstrumentsList from './instruments/instruments-list';

export default async function Home() {
  const supabase = await createClient();
  const { data: instruments } = await supabase.rpc("get_instruments", {});

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className=" w-full flex flex-col items-center">
        <nav className="w-full border-b border-b-foreground/10">
          <div className="bg-sky-500 text-white p-3 text-sm flex justify-between items-center">
            <p className="font-bold">calling</p>
            {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
          </div>
        </nav>
        <div>
          <InstrumentsList instruments={instruments} />
        </div>
      </div>
    </main>
  );
}