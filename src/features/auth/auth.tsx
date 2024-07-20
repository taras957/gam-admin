import { useState, useEffect, FC } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../api/superbase';
import { Session } from '@supabase/supabase-js';

export function withAuth<P extends JSX.IntrinsicAttributes>(
  Component: FC<P>,
): FC<P> {
  return (componentProps: P) => {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
      });

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
      });

      return () => subscription.unsubscribe();
    }, []);

    if (!session) {
      return (
        <div className="max-w-md mx-auto my-12">
          <Auth
            providers={['google']}
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
          />
        </div>
      );
    } else {
      return (
        <>
          <Component {...componentProps} />
        </>
      );
    }
  };
}
