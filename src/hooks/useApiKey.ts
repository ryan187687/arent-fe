import { useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';

import {
  getApiKey,
  removeApiKey as removeApiKeyCookie,
  setApiKey as setApiKeyCookie,
} from '@/lib/utils';
import { apiKeyAtom, setApiKeyAtom } from '@/store/authAtom';

const useApiKey = () => {
  const [apiKey] = useAtom(apiKeyAtom);
  const [, setApiKeyState] = useAtom(setApiKeyAtom);

  const setApiKey = useCallback(
    (key: string) => {
      setApiKeyCookie(key);
      setApiKeyState(key);
    },
    [setApiKeyState],
  );

  const removeApiKey = useCallback(() => {
    removeApiKeyCookie();
    setApiKeyState(null);
  }, [setApiKeyState]);

  useEffect(() => {
    const storedApiKey = getApiKey();
    if (storedApiKey && !apiKey) {
      setApiKeyState(storedApiKey);
    }
  }, [apiKey, setApiKeyState]);

  return {
    apiKey,
    setApiKey,
    removeApiKey,
  };
};

export default useApiKey;
