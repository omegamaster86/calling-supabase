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
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-end items-center p-3 px-5 text-sm">
            {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
          </div>
        </nav>
        <div>
          <h1>Instruments</h1>
          <InstrumentsList instruments={instruments} />
        </div>
      </div>
    </main>
  );
}