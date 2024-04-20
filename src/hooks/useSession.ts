import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import {
  User,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export function useSession() {
  const [session, setSession] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function handleAuthentication() {
    try {
      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);

      window.location.href = "/notes";
    } catch (error) {
      console.error("auth error", error);
    }
  }

  function handleSignOut() {
    signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setSession(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { session, loading, handleAuthentication, handleSignOut };
}
