import { useCallback, useState } from "react";

interface dataCEP {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
  erro: boolean;
}

const useFetch = () => {
  const [data, setData] = useState<dataCEP | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const request = useCallback(async (url: string) => {
    let json;
    try {
      setError(false);
      setLoading(true);
      const response = await fetch(url);
      json = await response.json();
    } catch (err) {
      json = null;
      setError(true);
    } finally {
      setLoading(false);
      setData(json);
    }
  }, []);

  return { data, error, loading, request };
};

export default useFetch;
