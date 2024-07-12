type FetchBaseQueryError = {
  status: number;
  data: unknown;
};

type SerializedError = {
  name: string;
  message: string;
  stack?: string;
};

export type TReduxRTKError = FetchBaseQueryError | SerializedError;
